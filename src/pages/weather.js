
export async function getStaticProps(context){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.0636&lon=75.0786&appid=${process.env.openWeatherApiKey}`)
      
  const weather = await response.json()
  return{
    props: {
      weather
    }
  }
}

const Weather = (props) => {
  console.log(props.weather.weather[0].description)

  const {main} = props
  
  return (
    <div>
      <h1>Weather</h1>
      <h2>{props.weather.main.temp}</h2>
      <h2>Location: Philadelphia</h2>

      <p>Description: {props.weather.weather[0].description} </p>

    </div>
  )
}

export default Weather