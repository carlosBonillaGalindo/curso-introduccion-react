// import './App.css';
import React from "react";
import {AppUI} from "./AppUI"
import {TodoProvider} from '../TodoContext'


 const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
   { text: 'Tomar curso de intro de React', completed: true },
  { text: 'Llorar =(', completed: false },
   { text: 'Llorar ssssss(', completed: false }
 ];

function App() {


  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
