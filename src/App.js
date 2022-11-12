import { useState } from "react";
import api from "./api";

import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((users) => users._id !== userId));
  };

  const handleToggleBookmark = (userId) => {
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
      <Users users={users} onDeleteUser={handleDelete} onToggleBookmark={handleToggleBookmark} />
    </>
  );
};

export default App;
