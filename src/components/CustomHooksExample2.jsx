import useLocalStorage from "./hooks/useLocalStorage"

function CustomHooksExample2() {
    const [title,setTitle] = useLocalStorage('title','')
    const [tasks,setTasks] = useLocalStorage('tasks',[])

    const formSubmit = (e) => {
        
        const newTaskObj = {
            title,
            completed: false,
            date: new Date().toLocaleTimeString()
        }
        setTasks([...tasks,newTaskObj])
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={formSubmit} className='w-50'>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input 
                    type="text" 
                    value={title} 
                    className="form-control" 
                    onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <button 
            type='submit' 
            className="btn btn-primary">
        Submit</button>
        </form>
        {tasks.map((task) => (
            <h1 key="task.title">{task.title}</h1>
        ))}
    </div>
  )
}

export default CustomHooksExample2