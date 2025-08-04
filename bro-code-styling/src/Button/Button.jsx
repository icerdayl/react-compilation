
export default function Button(){
    
    // Inline Styles
    const styles ={
        backgroundColor: "rgb(0, 153, 255)",
        color:" white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        <button style={styles}>Click Me</button>
    )
}