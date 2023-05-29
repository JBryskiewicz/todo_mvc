import './App.css'
import {useState} from "react";

function App() {
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const getId = () => {
        if (!tasks.length) return 1;

        return Math.max(...tasks.map((task) => task.id)) + 1;
    }

    const handleAddTask = (event) => {
        if (event.key === "Enter") {
            setTasks(prevState => [...prevState, {
                id: getId(),
                name: value,
                status: 'active'
            }]);
            setValue('');
        }
    }

    const handleDelete = (toDelete) => {
        return () => {
            const newTasks = tasks.filter((task) => task !== toDelete);
            setTasks(newTasks);
        }
    }

    const handleChangeStatus = (task) => {
        return () => {
            task.status = task.status === 'active' ? 'done' : 'active';
            setTasks([...tasks]);
        }
    }

    const taskList = tasks.map((element) => (
        <li key={element.id}>
            <button
                onClick={handleChangeStatus(element)}
                className={element.status === 'active' ? 'active' : 'done'}>
                { element.status }
            </button>
            <span>{element.name}</span>
            <button
                onClick={handleDelete(element)}>
                X
            </button>
        </li>
    ));

    return (
        <>
            <h1>Todos</h1>
            <input type="text"
                   value={value}
                   onChange={event => setValue(event.target.value)}
                   onKeyUp={handleAddTask}
            />
            <ul>
                {taskList}
            </ul>
        </>
    )
}

export default App
