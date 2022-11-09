import { useState } from "react";
import api from "./api";

import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((users) => users._id !== userId));
  };

  const handleToggleBookmark = (userId) => {
    // const elementUser = users.findIndex(user => user._id === userId);
    // const newUsers = [...users];
    // newUsers[elementUser].bookmark = !newUsers[elementUser].bookmark;
    // setUsers(newUsers);

    setUsers(
      users.map(user => {
        if (user._id === userId) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user;
      })
    )

  }

  return (
    <>
      <SearchStatus usersLength={users.length} />
      <Users users={users} onDeleteUser={handleDelete} onToggleBookmark={handleToggleBookmark} />
    </>
  );
};

export default App;
