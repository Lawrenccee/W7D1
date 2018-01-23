import React from 'react';

const TodoDetailView = function ({ todo, removeTodo }) {
  return (
    <div>
      {todo.body}
      <button onClick={ removeTodo }>Delete Todo</button>
    </div>
  );
};

export default TodoDetailView;
