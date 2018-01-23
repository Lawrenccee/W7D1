import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo, removeTodo }) => {

  return (
    <div>
      <ul>
        {
          todos.map((todo) => (
            <TodoListItem todo={todo} receiveTodo={receiveTodo} key={todo.id}/>
          ))
        }
      </ul>
      <TodoForm receiveTodo={receiveTodo} />
    </div>

  );
};

export default TodoList;
