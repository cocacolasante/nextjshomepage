

const Weather = () => {
  const makeApiCall = async () =>{
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.0636&lon=75.0786&appid=${process.env.openWeatherApiKey}`)
      
      const jsonResponse = await response.json()

      console.log(jsonResponse)


    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>Weather
      <button onClick={makeApiCall} >Make Api Call</button>
    </div>
  )
}

export default Weather