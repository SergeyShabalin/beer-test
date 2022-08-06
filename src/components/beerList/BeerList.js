import React, {useEffect, useState} from 'react'
import {Api} from '../../Api'
import {BeerCard} from "./beerCard/BeerCard";
import './styles/BeerList.css'
import Search from "../search/Serach";
import Pagination from "../pagination/Pagination";


export default function BeerList() {
    const [listBeer, setListBeer] = useState([])
    const [params, setParams] = useState({page:1})

    useEffect(() => {
        viewList()
    }, [params]);


    function viewList() {
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
                    params={params}
                />
                <div className='background-label'>BEER</div>
                <BeerCard
                    listBeer={listBeer}
                />
                <Pagination
                    viewList={viewList}
                    setParams={setParams}
                    page={params.page}
                    lenghtListBeer={listBeer.length}
                />
            </div>
        </div>
    )
}