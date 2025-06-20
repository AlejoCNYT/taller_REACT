import api from '../api/axiosConfig'
import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/TodoList/ToDoList'

export default function Home()
{
    const [todos, setTodos] = useState([]);
    useEffect(()=> 
        {
        api.get("/todos").then((res) => setTodos(res.data));
    },
    []);

    const addTodo = (texto) => 
        {
        api.post('/todos', {texto, completado:false}).then((res) => 
            {
            setTodos([...todos, res.data]);
        });
    }

    const deleteTodo = (id) =>
        {
        api.delete(`/todos/${id}`).then(()=>{
            setTodos(todos.filter((todo) => todo.id !== id));
        })
    }

    return(
        <>
            <h1>Lista de tareas</h1>
            <ToDoForm onAdd={addTodo}></ToDoForm>
            <ToDoList tareas={todos} onDelete={deleteTodo}></ToDoList>
        </>
    )

}
