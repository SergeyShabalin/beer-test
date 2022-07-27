import {Api} from '../Api'
import React,{useEffect,useState} from 'react'


export default function Main() {

    const url = 'beers'


    useEffect(() => {
        viewList(url)

    }, []);

    const [listBeer, setListBeer]=useState([])

    function viewList(url) {
        Api.get(url).then((resp) => {
                setListBeer(resp.data)
            console.log(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

    function listView(){
     let a = listBeer.map(item=> (

         <div>
             <div>{item.name}</div>
             <img src = {item.image_url}></img>
         </div>
     ))
        return a
    }

    return (
        <div>
            {listView()}
            <button>beer</button>
        </div>
    )
}