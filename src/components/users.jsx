import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import User from "./user";
import Pagination from "./pagination";

import api from "../api";
import { paginate } from "../utils/paginate";

const Users = ({ users, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProf, setSelectedProf] = useState();
  const [professions, setProfessions] = useState();

  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfessions(data);
    });
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const pageSize = 3;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };
  const filtredUsers = selectedProf
    ? users.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf)
      )
    : users;
  const count = filtredUsers.length;
  const userCrop = paginate(filtredUsers, currentPage, pageSize);
  const clearFilter = () => {
    setSelectedProf(undefined);
  };

  return (
    <div className="d-flex">
      {professions ? (
        <div className="d-flex flex-column flex-shrin-0 p-3">
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </div>
      ) : null}
      <div className="d-flex flex-column mt-3">
        <SearchStatus usersLength={count} />
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
        ) : null}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageClick={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
