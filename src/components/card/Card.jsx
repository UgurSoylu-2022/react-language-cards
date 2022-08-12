import "./Card.css";
import {categories as data} from "../../helper/data"
import Item from "../item/Item";
const Card = () => {
  return (
    <div className="cards-area-container">
        <div className="bars"></div>
        <h1 className="language-title">Languages</h1>
        <div className="cards-container">
        {data.map((cardElement, index)=>{
                return <Item card={cardElement} key={index}/>
            })}
        </div> 
    </div>
  )
}

export default Card;