import Qualities from "./qualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";
const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDeleteUser,
  bookmark,
  onToggleBookmark,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Qualities {...qual} key={qualities._id} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate + "/5"}</td>
      <td>
        <Bookmark bookmark={bookmark} onClick={() => onToggleBookmark(_id)} />
      </td>
      <td>
        <button
          className="btn bg-danger badge"
          onClick={() => onDeleteUser(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  bookmark: PropTypes.bool,
  onToggleBookmark: PropTypes.func.isRequired,
};

export default User;
