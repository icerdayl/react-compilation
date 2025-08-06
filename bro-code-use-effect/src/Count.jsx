import { useEffect, useState } from "react";

function Count(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")



    function addCount (){
        setCount(c => c + 1)
    }

    function minusCount(){
        setCount(c => c-1)
        if (count === 0){
            setCount(0)
        }
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", resize)
    }, [])

    useEffect(() => {
        document.title = `Count: ${count} ${color}  Size: ${width} x ${height}`;
    }, [count, color, width, height]) 

    function resize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <>
            <div id="counter">
                <h3 style={{color: color}}>Count: {count}</h3>
                <button onClick={addCount}>Add</button>
                <button onClick={minusCount}>Minus</button>
                <button onClick={changeColor}>Change Color</button>     
            </div>   
            <div id="width">
                <p >Height: {height}</p>
                <p>Width: {width}</p>
            </div>
        </>
    )
}

export default Count