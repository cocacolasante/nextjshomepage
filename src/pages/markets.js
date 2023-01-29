

export async function getStaticProps(){
  const response = await fetch(`https://api.polygonscan.com/api?module=account&action=balance&address=0x4f14bcC4b898e6248e4a20D6F88e38a945fee83a&apikey=${process.env.POLYGONSCAN_API}`)

  const polygonData = await response.json()
  console.log(polygonData)
  return{
    props:{
      polygon: polygonData
    }
  }
}


const Markets = (props) => {
  console.log(props)

  const calculateBalance = () =>{
    const balance = (props.polygon.result / 1000000000)
    return(<>{balance}</>)
  }
  return (
    <div>
      <h1>Markets</h1>
      <p>Ethereum: </p>
      <p>Polygon: {calculateBalance()}</p>
      <p>Binance: </p>

    </div>
  )
}

export default Markets