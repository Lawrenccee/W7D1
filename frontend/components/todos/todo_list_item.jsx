import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor ({ todo, receiveTodo }) {
    super();
    this.todo = todo;
    this.receiveTodo = receiveTodo;
    this.updateTodo = this.updateTodo.bind(this);

    this.state = {
      detail: true
    };
  }

  updateTodo() {
    this.todo.done = !this.todo.done;
    return this.todo;
  }

  render() {
    const status = this.todo.done ? "Undo" : "Done";

    return (
      <li onClick={this.handleClick}>
        {this.todo.title}
        <button onClick={() => this.receiveTodo(this.updateTodo())}>{status}</button>
        { this.state.detail ?
          <TodoDetailViewContainer todo={this.todo} />
          :
          <div></div>
        }
      </li>
    );
  }
}

export default TodoListItem;
