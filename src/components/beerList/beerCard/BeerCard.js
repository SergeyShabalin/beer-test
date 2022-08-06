import React from 'react'
import {Link} from "react-router-dom";


export function BeerCard({listBeer}) {


    let viewer = listBeer.map(item => (
            <Link className="link" to={'/'+ item.id}>
                <div  className='block'>
                    <div className='cont'>
                        <div className='header'>{item.name}</div>
                        <div className='image_field'>
                            <div className='image'>
                                <img className='img' src={item.image_url}></img>
                            </div>
                        </div>
                        {item.description.length > 140
                            ? <div className='about'>  {item.description.slice(0, 140)} ... </div>
                            : <div className='about'>{item.description}</div>

                        }
                    </div>
                </div>
            </Link>

    )
    )
    return viewer
}