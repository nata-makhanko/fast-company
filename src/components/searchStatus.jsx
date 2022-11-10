import PropTypes from "prop-types";

const SearchStatus = ({ usersLength }) => {
  const renderPhrase = () => {
    const lastOne = Number(usersLength.toString().slice(-1));
    if (usersLength > 4 && usersLength < 15) return "человек тусанет";
    if (lastOne === 1) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанет";
    return "человек тусанет";
  };

  return (
    <h2>
      <span
        className={"badge " + (usersLength > 0 ? "bg-primary" : "bg-danger")}
      >
        {usersLength > 0
          ? `${usersLength + " " + renderPhrase()} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};

SearchStatus.propTypes = {
  usersLength: PropTypes.number.isRequired,
};

export default SearchStatus;
