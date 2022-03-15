import useFetch from "./hooks/useFetch"

function CustomHooksExample1() {

    const {loading, data} = useFetch("https://jsonplaceholder.typicode.com/todos",{})
    if(loading) {
        return <h1>Loading...</h1>
    }else{
        return (
            <div>
                {data.map((item) => (
                    <h3 key={item.id}>{item.title}</h3>
                ))}
            </div>
          )
    }

}

export default CustomHooksExample1