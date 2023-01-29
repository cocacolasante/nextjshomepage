import WeatherCard from "components/WeatherCard"


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
  console.log(props)

  const {main} = props
  
  return (
    <div>
      <WeatherCard description={props.weather.weather[0].description} temp={props.weather.main.temp} location="Philadelphia" />

    </div>
  )
}

export default Weather