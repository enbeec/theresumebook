import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./UserProvider";

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

// TODO try refactoring as "filteredState"
export const UserSelect = ({ selectFunc }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const changeSearchTerm = (event) => setSearchTerm(event.target.value);

  return (
    <>
      <input
        type="text"
        name="filterText"
        placeholder="Filter by name..."
        value={searchTerm}
        onChange={changeSearchTerm}
      />
      <select onClick={selectFunc}>
        <option value="">View another resume...</option>
        <UserOptions searchTerm={searchTerm} />
      </select>
    </>
  );
};