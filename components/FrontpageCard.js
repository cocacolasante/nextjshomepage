import Image from "next/image"


const FrontpageCard = (props) => {
  return (
    <div className={styles.topicDiv}>
        <h2>{props.title}</h2>
        <Image src={props.image} alt="homepage" />
  </div>
)
}

export default FrontpageCard