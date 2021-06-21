import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "./UserProvider";

export const UserSelect = ({ selectFunc }) => {
  const { users, getUsers } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // FIXME this is looping ad infinitum
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <SelectFilter
        type="text"
        placeholder="Filter by name..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <FilteredSelect onChange={selectFunc}>
        <option value="">View another resume...</option>
        {users
          .filter((user) =>
            searchTerm ? user.name.toLowerCase().includes(searchTerm) : true
          )
          .map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
      </FilteredSelect>
    </>
  );
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
