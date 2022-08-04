import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {Api} from "../../../Api";
import BeerDescription from "./description/BeerDescription";
import './styles/BeerInfo.css'


export default function BeerInfo() {

    useEffect(() => {
        viewInfo(url)
    }, []);

    const [infoBeer, setInfoBeer] = useState([])

    let usId = useParams()
    const url = `beers/${usId.id}`

    function viewInfo(url) {
        Api.get(url).then((resp) => {
            setInfoBeer(resp.data)
            console.log(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }


    return (
        <div className="content-info">
            <BeerDescription infoBeer={infoBeer}
            />
        </div>
    )

}