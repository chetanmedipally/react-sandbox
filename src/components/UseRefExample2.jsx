import {useEffect,useState,useRef} from 'react'

function UseRefExample2() {
    const [name,setName] = useState('')
    const prevName = useRef('')
    const renders = useRef(1)

    useEffect(() => {
        renders.current = renders.current + 1
        prevName.current = name
    },[name])
  return (
    <div>
        <h1>Renders : {renders.current}</h1>
        <h2>Previous Renders : {prevName.current}</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
  )
}

export default UseRefExample2