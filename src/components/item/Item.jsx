import {useState} from "react";
const Item = ({card}) => {
    const [showLogo, setShowLogo] = useState(true)

    return(
        <div className="card" onClick={()=> setShowLogo(!showLogo)}>
            {showLogo ? 
            <>
            <img className="card-logo" src={card.img} alt="Logo"/>
            <h3 className="card-title">{card.name}</h3>
            </>
            :
            <ul className="list">
                {card.options.map((optElement, index)=>{
                    return <li key={index}>
                        {optElement}
                    </li>
                })}
            </ul>          
        
        
        
        }


        </div>
    )
}

export default Item;