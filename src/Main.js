import React from "react";
import TodoList from "./TodoList";

class Main extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          width: "100%",
          background: "#e7f3ef",
          height:"100vh",
          minHeight: '295px',
          minWidth: '700px',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Todo App</h2>
          <div style={{ width: "100%", textAlign: "left" }}>Current Time: </div>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default Main;
