import User from "./user";
import Pagination from "./pagination";
import { useState } from "react";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users, ...rest }) => {
  const count = users.length;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      {count > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => {
              return <User {...user} {...rest} key={user._id} />;
            })}
          </tbody>
        </table>
      ) : (
        ""
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageClick={handlePageChange}
      />
    </>
  );
};

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
