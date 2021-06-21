import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "./UserProvider";

export const UserSelect = ({ selectFunc }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const changeSearchTerm = (event) => setSearchTerm(event.target.value);

  return (
    <>
      <SelectFilter
        type="text"
        placeholder="Filter by name..."
        value={searchTerm}
        onChange={changeSearchTerm}
      />
      <FilteredSelect onClick={selectFunc}>
        <option value="">View another resume...</option>
        <UserOptions searchTerm={searchTerm} />
      </FilteredSelect>
    </>
  );
};

const UserOptions = ({ searchTerm }) => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const userOption = (user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  );

  // filter func that returns everything if there is no searchTerm
  const userSearch = (user) =>
    searchTerm ? user.name.toLowerCase().includes(searchTerm) : true;

  return <>{users.filter(userSearch).map(userOption)}</>;
};

const SelectFilter = styled.input`
  border-radius: 0.1rem;
  margin-bottom: 0.4rem;
  border-width: 0.1rem;
  border-style: inset;
`;

const FilteredSelect = styled.select`
  border-radius: 0.1rem;
  margin-bottom: 0.4rem;
  border-width: 0.1rem;
  border-style: inset;
`;
