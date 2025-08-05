import { useState } from 'react'

function MyComponent(){
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")
    const [color, setColor] = useState("#FFFFFF")
    const [car, setCar] = useState({year:"", brand:"", model:""})
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"])

    function changeName(event){
        setName(event.target.value)
    }

    function changeNum(event){
        setQuantity(event.target.value)
    }

    function changeComment(event){
        setComment(event.target.value)
    }

    function choosePayment(event){
        setPayment(event.target.value)
    }

    function chooseShipping(event){
        setShipping(event.target.value)
    }

    function changeColor(event){
        setColor(event.target.value)
    }

    function updateCarYear(event){
        setCar(c => ({...c, year: event.target.value }))
    }

    function updateCarBrand(event){
        setCar(c => ({...c, brand: event.target.value }))
    }

    function updateCarModel(event){
        setCar(c => ({...c, model: event.target.value }))
    }

    function updateFood(){
        const newFood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value =""
        setFoods(f =>[...f, newFood ])
    }

    function removeFood(index){
       setFoods( foods.filter((_,i) => i !== index))
    }

    return(
        <>
           <div className='onchange-container'>
                <input type="text" value={name} onChange={changeName}/>
                <p>Name: {name}</p>

                <input type="number" value={quantity} onChange={changeNum}/>
                <p>Quantity: {quantity}</p>

                <textarea type="number" value={comment} onChange={changeComment} placeholder='Enter your comments...'/>
                <p>Comment: {comment}</p> 

                <select value={payment} onChange={choosePayment}>
                    <option value="">Select Mode of Payment</option>
                    <option value="Gcash">Gcash</option>
                    <option value="Maya">Maya</option>
                    <option value="SeaBank">SeaBank</option>
                    <option value="Lebron James">Lebron James</option>
                </select>
                <p>Payment Option: {payment}</p>

                <label >
                    <input type="radio"  value="Pick up" checked = {shipping === "Pick Up"}
                    onChange={chooseShipping}/>
                    Pick Up
                </label> <br />
                <label>
                    <input type="radio"  value="Delivery" checked = {shipping === "Delivery"}
                    onChange={chooseShipping}/>
                    Delivery
                </label>
                <label> <br />
                    <input type="radio"  value="Lebron James" checked = {shipping === "Lebron James"}
                    onChange={chooseShipping}/>
                    Lebron James
                </label>
                <p>Shipping Option: {shipping}</p>
           </div>
            <div className='color-picker-container'>
                <h1>Color Picker</h1>
                <label >
                    <p style={{backgroundColor: color}}>Color: {color}</p>
                    <input type="color" value={color} onChange={changeColor} />
                </label>
            </div>

            <div className='updater'>
                <p>Your favorite car is: {car.year} {car.brand} {car.model}</p>
                <input type="number" placeholder='Enter the year' onChange={updateCarYear} />
                <input type="text" placeholder='Enter the brand name' onChange={updateCarBrand} />
                <input type="text" placeholder='Enter the card model' onChange={updateCarModel} />
            </div>

            <div className='food-updater'>
                <h1>Fruits</h1>
                <ul>
                    {foods.map ((food,index)=>
                     <li key={index} onClick={()=>removeFood(index)}>
                        {food}
                    </li>
                    )}
                </ul>
                <input type="text" id='foodInput'/>
                <button onClick={updateFood}>Enter</button>
            </div>
        </>
    )
}

export default MyComponent