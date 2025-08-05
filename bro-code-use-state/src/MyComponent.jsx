import { useState } from "react"

function MyComponent(){

    const [name, setName] = useState("Guest")
    let [age, setAge] = useState(0)
    let [isEmployed, setIsEmployed] = useState(false)
    
    function updateName(){
        setName("LEBROOOOOOOON JAMEEEEEEES")
        
    }

    function updateAge(){
        setAge(age+1)
    }

    function updateEmployment(){
        setIsEmployed(!isEmployed)
    }

    return(
        <>
            <p>Name: {name}</p>
            <button onClick={updateName}>Click Me</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Click Me</button>

            <p>Employment Status: {isEmployed ? "Employed" : "Unemployed"}</p>
            <button onClick={updateEmployment}>Click Me</button>
        </>
    )

}

export default MyComponent