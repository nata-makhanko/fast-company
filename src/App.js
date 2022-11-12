import { useState, useEffect } from "react";
import api from "./api";

import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then(data => setUsers(data));
  }, [])
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((users) => users._id !== userId));
  };
  const handleToggleBookmark = (userId) => {
    if (users) {
      setUsers(
        users.map(user => {
          if (user._id === userId) {
            return { ...user, bookmark: !user.bookmark }
          }
          return user;
        })
      )
    }
  }

  return (
    <>
      <Users users={users ? users : []} onDeleteUser={handleDelete} onToggleBookmark={handleToggleBookmark} />
    </>
  );
};

export default App;
