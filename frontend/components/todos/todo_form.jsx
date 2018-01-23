import React from 'react';
import uniqueId from '../../util/util';

class TodoForm extends React.Component {
  constructor ({ receiveTodo }) {
    super();

    this.state = {
      title: "",
      body: "",
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveTodo = receiveTodo;
  }

  handleTitle(event) {
    this.setState({
      title: event.currentTarget.value
    });
  }

  handleBody(event) {
    this.setState({
      body: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const todo = {
      title: this.state.title,
      body: this.state.body,
      id: uniqueId(),
      done: false,
    };

    if (this.state.title !== "" && this.state.body !== "") {
      this.receiveTodo(todo);
      this.setState({
        title: "",
        body: ""
      });
    }
  }

  render () {
    return (
      <form>
        <label>Title:
          <input onChange={this.handleTitle} type="text" name="todo[title]" value={this.state.title}/>
        </label>

        <label>Body:
          <input onChange={this.handleBody} type="text" name="todo[body]" value={this.state.body}/>
        </label>

        <button onClick={this.handleSubmit}>Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
