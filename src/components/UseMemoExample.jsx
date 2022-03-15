import {useEffect,useState,useRef,useMemo} from 'react'

function UseMemoExample() {

    const [number,setNumber] = useState(1)
    const [inc,setInc] = useState(0)

    const renders = useRef(1)
    const numberSqrt = useMemo(() => getSqrt(number),[number])

    useEffect(() => {
        renders.current = renders.current + 1
    })
    const handleClick = () => {
        setInc((preValue) => {
            return preValue + 1
        })
    }
  return (
      
    <div>
        <input type="number" 
                value={number} 
                onChange = {(e) => setNumber(e.target.value)} 
                className="form-control w-25"
        />
        <h3>The sqrt of {number} is {numberSqrt}.</h3>
        <button className="btn btn-primary my-3"
            onClick={() => handleClick()}>Re render</button>
        <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
    for (let index = 0; index < 10000; index++) {
        console.log(index);
        
    }
    return Math.sqrt(n)
}

export default UseMemoExample