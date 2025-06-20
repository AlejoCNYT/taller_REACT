import {userState, useState} from "react";

export default function ToDoForm({onAdd}) {
    const [texto, setTexto] = useState(' ');

    const handleSubmit= (e) => {
        e.preventDefault();
        if (!texto.trim()) return;
        onAdd(texto);
        setTexto('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={texto}>
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Nueva tarea"
            </input>
            <button type="submit">Agregar</button>
        </form>
    )
}
