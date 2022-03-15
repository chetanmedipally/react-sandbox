import { useRef } from "react";
function UseRefExample1() {

    const inputRef = useRef()
    const pRef = useRef()
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value);
        inputRef.current.value = "Submit Clicked"
        inputRef.current.style.backgroundColor = "red"
        pRef.current.innerText = "Clicked Here"
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" ref={inputRef} className="form-control mb-2" id="name"/>
          <button type="submit" className="btn btn-primary">
              Submit
          </button>
          <p ref={pRef} onClick= {() => {inputRef.current.focus()}}>Click Here</p>
      </form>
    </div>
  );
}

export default UseRefExample1