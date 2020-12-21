import React from "react";

const TodoCreator = () => {
  return (
    <div
      style={{
        margin: "5px",
        height: "65px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        style={{ width: "20%", height: "20px", marginRight: "10px" }}
        placeholder="Title"
      />
      <input
        style={{ width: "40%", height: "20px", marginRight: "10px" }}
        placeholder="Text"
      />
      <input
        style={{ width: "25%", height: "20px", marginRight: "10px" }}
        placeholder="duetime DD/HH/MM later"
      />
      <button style={{ height: "26px" }}>Submit</button>
    </div>
  );
};

export default TodoCreator;
