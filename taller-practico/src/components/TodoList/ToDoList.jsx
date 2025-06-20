import ToDoItem from "../TodoItem/ToDoItem";
import './TodoList.css'

function ToDoList({tareas, onDelete}){

    return(
        <div className="list" >
            {tareas.length >0 ?(
                tareas.map(tarea => (<ToDoItem key={tarea.id} tarea={tarea} onDelete={onDelete}></ToDoItem>))
            ):  (<p> No hay tareas pendientes</p>)}
        </div>
    )
}
