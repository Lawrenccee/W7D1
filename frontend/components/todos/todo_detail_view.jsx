import React from 'react';

const TodoDetailView = function ({ todo, removeTodo }) {
  console.log(todo);
  console.log(removeTodo);
  return (
    <div>
      {todo.body}
      <button onClick={() => removeTodo(todo.id)}>Delete Todo</button>
    </div>
  );
};

export default TodoDetailView;
