import {useState} from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState([])
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

    }

    function moveUp(index){

    }

    function moveDown(index){

    }

    return(
        <>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter a task...' onChange={handleInput} />
                <button onClick={addTask}>Add</button>
                <ol>
                    {tasks.map((task,index)=>
                    <li key={index} >
                        <span>{task}</span>
                        <button>Delete</button>
                        <button>UP</button>
                        <button>DOWN</button>
                    </li>
                    )}
                </ol>
            </div>
            
        </>
    )
}

export default ToDoList