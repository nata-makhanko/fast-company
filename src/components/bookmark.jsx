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

export default Bookmark;
