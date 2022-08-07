import { useState } from "react";
import api from "../api";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handelDelete = (userId) => {
    setUsers((prevState) => prevState.filter((users) => users !== userId));
  };
  const renderPhrase = (number) => {
    let phrase = " человек тусанет с тобой сегодня";
    let classBadge = "primary";
    if (number < 1) {
      number = "";
      phrase = "никто с тобой сегодня не тусанет";
      classBadge = "danger";
    } else if (number > 1 && number < 5) {
      phrase = " человека тусанет с тобой сегодня";
    }
    return (
      <span className={"badge ms-1 bg-" + classBadge}>{number + phrase}</span>
    );
  };
  const renderQualitiesList = (user) => {
    return user.qualities.map((quality) => {
      return (
        <span key={quality.name} className={"badge ms-1 bg-" + quality.color}>
          {quality.name}
        </span>
      );
    });
  };
  const renderUsersList = () => {
    return users.map((user) => {
      return (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{renderQualitiesList(user)}</td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate + "/5"}</td>
          <td>
            <button
              className="btn bg-danger badge"
              onClick={() => handelDelete(user)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <h1>{renderPhrase(users.length)}</h1>
      {users.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{renderUsersList()}</tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};

export default Users;
