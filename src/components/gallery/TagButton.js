import React from "react";
import "./TagButton.css";

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <>
      <>
        <button
          className={`tag ${tagActive ? "active" : null}`}
          onClick={() => handleSetTag(name)}>
          {name.toUpperCase()}
        </button>
      </>
    </>
  );
};

export default TagButton;
