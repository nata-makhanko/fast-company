import Qualities from "./qualities";
import Bookmark from "./bookmark";

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
        <Qualities qualities={qualities} />
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

export default User;
