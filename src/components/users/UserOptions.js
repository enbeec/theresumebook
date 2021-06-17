import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserProvider";

export const UserOptions = ({ searchTerm }) => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  const userOption = (user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  );

  // if there is a search term, filter using startsWith
  const userSearch = (user) =>
    searchTerm ? user.name.toLowerCase().startsWith(searchTerm) : true;

  return <>{users.filter(userSearch).map(userOption)}</>;
};
