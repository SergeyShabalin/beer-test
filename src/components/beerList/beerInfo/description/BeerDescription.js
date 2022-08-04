import React from 'react'
import {Link} from "react-router-dom";

export default function BeerDescription({infoBeer}) {

    let beerValues = infoBeer.map(item => (

        <div className='page'>
            <div className='info-field'>

                <div className='header-info'>
                    <div>{item.name}</div>
                    <div>{item.tagline}</div>
                </div>
                <div className='info'>
                    <div>{item.description}</div>
                    <div>Beer strength: {item.abv}%</div>
                    <div>Food pairing: {item.food_pairing}</div>
                </div>
                <Link className="link" to='/'>
                <div className='back-to'>back to main</div>
                </Link>
            </div>

            <div className='img-field'>
                <img src={item.image_url}></img>
            </div>
        </div>

    ))
    return beerValues
}