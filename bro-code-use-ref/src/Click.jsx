import {useRef} from "react"

function Click (){
    const inputRef = useRef(0)

    function handleClick(){
        inputRef.current.style.backgroundColor = "green";
    }

    return (
        <>
            <button onClick={handleClick}>CLICK ME</button>
            <input type="text" ref={inputRef}/>
        </>
    )
}

export default Click