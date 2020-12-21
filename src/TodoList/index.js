import React from "react";
import { todo } from "./initData.json";
import Todo from "./Todo";
import TodoCreator from "./TodoCreator";
import TodoTitle from "./TodoTitle";

class TodoMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: todo,
      id: 3,
    };
  }

  render() {
    return (
      <div
        style={{
          background: "white",
          width: "680px",
          height: "calc(90vh - 80px)",
          minHeight: '175px',
          boxShadow: "0 3px 6px rgba(0,0,0,0.26), 0 6px 12px rgba(0,0,0,0.34)",
          borderRadius: "8px",
        }}
      >
        <TodoCreator />
        <TodoTitle />
        <div style={{ overflowY: 'auto',height: "calc(80vh - 160px)", minHeight: '60px'}}>
          {this.state.todos.map((todo) => (
            <Todo key={`TODO_${todo.id}`} {...todo} />
          ))}
        </div>
        
      </div>
    );
  }
}

export default TodoMain;
