function Button(){

    let count = 0

    const handleClick = (e) => e.target.textContent = "ARAY KOOOO"  ;
    

    return(
        <button onClick={(e) => handleClick(e)}>Click Me!</button>
    )
}

export default Button