import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo, removeTodo }) => {

  return (
    <div>
      <ul>
        {
          todos.map((todo, index) => (
            <TodoListItem todo={todo} removeTodo={removeTodo} receiveTodo={receiveTodo} key={index}/>
          ))
        }
      </ul>
      <TodoForm receiveTodo={receiveTodo} />
    </div>

  );
};

export default TodoList;
