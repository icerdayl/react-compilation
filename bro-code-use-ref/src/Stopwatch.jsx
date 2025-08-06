import {useRef, useState, useEffect} from "react"

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const interval = useRef(null)
    const startTime = useRef(0)

    useEffect(() => {
        if (isRunning){
            interval.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime.current)
            }, 10);
        }

        return () => {
            clearInterval(interval.current)
        }
    }, [isRunning])

    function start(){
        setIsRunning(true)
        startTime.current = Date.now() - elapsedTime
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setElapsedTime(0)
        setIsRunning(false)
    }

    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let milliseconds = Math.floor(elapsedTime / (1000 / 10))

        hours = String(hours).padStart(2,"0")
        minutes = String(minutes).padStart(2,"0")
        seconds = String(seconds).padStart(2,"0")
        milliseconds = String(milliseconds).padStart(2,"0")

        return (
            `${hours}:${minutes}:${seconds}:${milliseconds}`
        )

    }

    return(
        <div>
            <div>{formatTime()}</div>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch