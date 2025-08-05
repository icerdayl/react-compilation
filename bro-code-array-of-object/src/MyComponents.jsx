import {useState} from 'react'

function MyComponent(){
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carBrand, setCarBrand] = useState("")
    const [carModel, setCarModel] = useState("")

    function addCar(){
        const newCar = {year: carYear,
                        brand: carBrand,
                        model: carModel
        }

        setCars(c => [...c, newCar])
        setCarYear(new Date().getFullYear())
        setCarBrand("")
        setCarModel("")
    }

    function removeCar(index){
        setCars(c => c.filter((_,i)=> i !== index))
    }

    function changeYear(event){
        setCarYear(event.target.value)
    }

    function changeBrand(event){
        setCarBrand(event.target.value)
    }

    function changeModel(event){
        setCarModel(event.target.value)
    }

    return(
        <>
            <h2>List of Car Object</h2>
            <ul>
               {cars.map((car,index)=>
                <li key={index} onClick={() => removeCar(index)}>
                    {car.year} {car.brand}  {car.model}
                </li>
            )}
            </ul>
            <input type="number" value={carYear} onChange={changeYear} />
            <input type="text" value={carBrand} onChange={changeBrand} />
            <input type="text" value={carModel} onChange={changeModel} />
            <button onClick={addCar}>Add Car</button>
        </>
    )
}

export default MyComponent