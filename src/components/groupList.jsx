import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
}) => {
  const renderListItems = (item, valueProperty, contentProperty) => {
    return (
      <li
        key={valueProperty}
        className={`list-group-item ${selectedItem === item ? " active" : ""}`}
        onClick={() => onItemSelect(item)}
        role="button"
      >
        {contentProperty}
      </li>
    );
  };
  return (
    <>
      <ul className="list-group">
        {Array.isArray(items)
          ? items.map((item) =>
              renderListItems(item, item[valueProperty], item[contentProperty])
            )
          : Object.keys(items).map((item) => {
              renderListItems(
                items[item],
                items[item][valueProperty],
                items[item][contentProperty]
              );
            })}
      </ul>
    </>
  );
};

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name",
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
};

export default GroupList;
