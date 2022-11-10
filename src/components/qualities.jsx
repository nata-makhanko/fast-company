import PropTypes from "prop-types";

const Qualities = ({ _id, color, name }) => {
  return (
    <span key={_id} className={"badge ms-1 bg-" + color}>
      {name}
    </span>
  );
};

Qualities.propTypes = {
  _id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Qualities;
