import Image from "next/image"
import Link from "next/link"


export async function getStaticProps(){

    const response = await fetch(`http://www.gamespot.com/api/articles/?format=json&api_key=${process.env.GAMESPOT_API}&limit=10&sort=publish_date:desc`)
    const data = await response.json()

    return{
        props:{
            articles: data.results
        }
    }
}

const GameNews = (props) => {
    console.log(props)
  return (
    <div>
    {props.articles.map((article)=>{
        return(<div key={article.id}>
            <Link href={`/gamenews/${article.id}`}>
            <h2>{article.title}</h2>
            <Image width={250} height={100} src={article.image.original} alt="game article" />

            </Link>
        </div>)
    })}

    </div>
  )
}

export default GameNews