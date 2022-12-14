import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import {TodoForm} from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import {Modal} from '../Modal';

function AppUI(){
  const {
    error, 
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

    return (
      <>
        <TodoCounter/>
        
        <TodoSearch/>
      
        <TodoList>
          {error && <p>¡Opps! ha ocurrido un error</p>}
          {loading && <p>¡Loading...!</p>}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer ToDo!</p>}

          {searchedTodos.map(todo => (
            <TodoItem 
              key= {todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete = { () => completeTodo(todo.text)}
              onDelete = { () => deleteTodo(todo.text)}
            />
          ))}  
        </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}    


        <CreateTodoButton
          setOpenModal = {setOpenModal}
        />
        
      </>
      );
}

export {AppUI};