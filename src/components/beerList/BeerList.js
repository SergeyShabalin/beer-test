import React, {useEffect, useState} from 'react'
import {Api} from '../../Api'
import {BeerCard} from "./beerCard/BeerCard";
import './styles/BeerList.css'
import Search from "../search/Serach";
import Pagination from "../pagination/Pagination";


export default function BeerList() {
    const [listBeer, setListBeer] = useState([])
    const [params, setParams] = useState()

    useEffect(() => {
        viewList()
          },[params]);




    function viewList(data) {

        console.log(params)
        Api.get('/beers', {params}).then((resp) => {
            setListBeer(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

    return (
        <div className='content'>
            <div>
                <Search
                    viewList={viewList}
                    setParams={setParams}
                />
                <div className='background-label'>BEER</div>
                <Pagination
                    viewList={viewList}
                    setParams={setParams}
                />
                <BeerCard
                    listBeer={listBeer}
                />

            </div>
        </div>
    )
}