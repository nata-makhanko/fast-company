import PropTypes from "prop-types";

const Bookmark = ({ bookmark, ...rest }) => {
  const clazz = "bi bi-bookmark";
  return (
    <>
      <div {...rest}>
        <i className={bookmark ? `${clazz}-star ` : clazz}></i>
      </div>
    </>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.bool.isRequired,
};

export default Bookmark;
