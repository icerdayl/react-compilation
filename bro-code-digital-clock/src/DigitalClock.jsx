import {useEffect, useState} from 'react'

function DigitalClock(){
    const [time, setTime] = useState(new Date())

    useEffect(()=> {
        const interval = setInterval(() => {
            setTime(new Date())
        },1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    function renderTime(){
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds(  )
        let meridian = hours >= 12 ? "PM" : "AM"

    function zero(num){
        return( num < 10 ? "0":"" )+ num
    }

        return(
            `${zero(hours)}:${zero(minutes)}:${zero(seconds)} ${zero(meridian)} `
        )
    }

    return(
        <div>
            <div>
                <span>{renderTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock