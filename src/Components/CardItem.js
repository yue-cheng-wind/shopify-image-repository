import React from 'react'
import { Link } from 'react-router-dom'

/*component is implemented as a function component*/
/*pass in props*/
function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                {/* pass in the path , label and text for each image */}
                <figure className="cards__item__pic-wrap" data-category={props.label} >
                    <img src={props.src} alt="Image"
                        className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text" >{props.text}</h5>
                </div>
            </li>
        </>
    );
}

export default CardItem

