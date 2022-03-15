import React,{useCallback,useState} from 'react'

function UseCallbackExample() {

    const [tasks,setTasks] = useState([])
    const addTask = useCallback(() => {
        setTasks((prevTasks) => {
            return [...prevTasks,'New Task']
        })
    },[setTasks])
  return (
    <div>
        <Button addTask={addTask}/>
        {tasks.map((task, index) => (
            <h2 key={index}>{task}</h2>
        ))}
    </div>
  )
}

const Button = React.memo(({addTask}) => {
    console.log("Button Rendered");
    return(
        <div>
            <button className="btn btn-primary" onClick={addTask}>Add Tasks</button>
        </div>
    )
})

export default UseCallbackExample