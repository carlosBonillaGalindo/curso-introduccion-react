import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };

// export default TodoCounter;   
// Se podria importar con cualquier nombre pero causar cnflicto con otros componentes s