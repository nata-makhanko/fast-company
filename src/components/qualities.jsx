const Qualities = ({ qualities }) => {
  let renderQualitiesList = qualities.map((quality) => {
    return (
      <span key={quality._id} className={"badge ms-1 bg-" + quality.color}>
        {quality.name}
      </span>
    );
  });
  return renderQualitiesList;
};

export default Qualities;
