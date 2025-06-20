import './ToDoItem.css'
export default function ToDoItem({tarea, onDelete})
{
    return(
        <div className="item">
            {tarea.texto}
            <button onClick={() => onDelete(tarea.id)}>Eliminar</button>
        </div>
    );
}
