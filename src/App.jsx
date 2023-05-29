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

    // const handleDelete = (event) => {
    //
    // }

    const taskList = tasks.map((element) => (
        <li key={ element.id }>
            { element.name }
            <button>X</button>
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
                { taskList }
            </ul>
        </>
    )
}

export default App
