import {useState} from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState(["Walk 5km", "Lebron James", "I miss You"])
    const [newTasks, setNewTasks] = useState("")

    function handleInput(event){
        setNewTasks(event.target.value)
    }

    function addTask(){
        if (newTasks.trim() !== ""){
            setTasks(t => [...t, newTasks]);
            setNewTasks("")
        }
    }

    function deleteTask(index){
        setTasks(tasks.filter((_,i) => i !== index))
    }

    function moveUp(index){
        if (index > 0){
            const updatedTasks = [...tasks]
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }

    function moveDown(index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks]
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return(
        <div>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter a task...' onChange={handleInput} value={newTasks}/>
                <button onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                    <li key={index} >
                        <span>{task}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={() => moveUp(index)}>🔺</button>
                        <button onClick={() => moveDown(index)}>🔻</button>
                    </li>
                )}
            </ol>
            
        </div>
    )
}

export default ToDoList