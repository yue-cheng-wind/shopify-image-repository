import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';

import './Cards.css'

/*component is implemented as a function component*/

function Cards(props) {
    const imageItems = props.itemList.map((item) =>

        <CardItem
            src={item.avatar}
            text={item.description}
            label={item.imageName}
        />
    )
    return (
        <div className='cards'>
            {/* <h1>Check out the recommeded veggies!</h1> */}
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        {/* pass in props */}
                        {imageItems}

                    </ul>


                </div>
            </div>
        </div>
    );
}

export default Cards
