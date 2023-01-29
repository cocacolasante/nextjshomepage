import { useState, useEffect } from "react"


const WeatherCard = (props) => {
    const [farTemp, setFarTemp] = useState()

    const calculateTemp = () =>{
        // return (9/5)*(props.temp-273) + 32
        return (
            <>
                <p>Temp Celcius: {props.temp -273.15} degrees</p>
                <p>Fahrenheit: {(9/5)*(props.temp-273) + 32} degrees</p>
            </>
        )
    }

  return (
    <div>
        <h2>Weather Near Me</h2>
        <h3>{props.location}</h3>
        <h6>Temp: {calculateTemp()}</h6>
        <p>Description: {props.description}</p>

    </div>
  )
}

export default WeatherCard