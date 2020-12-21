import React from "react";

const TodoTitle = () => {
  return (
    <div style={{ margin: "5px", display: "flex" }}>
      <div style={{ width: "20%" }}>created</div>
      <div style={{ width: "15%" }}>title</div>
      <div style={{ width: "30%" }}>text</div>
      <div style={{ width: "25%" }}>left for the deadline</div>
    </div>
  );
};

export default TodoTitle;
