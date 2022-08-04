import React, {useEffect, useState} from 'react'
import './styles/Pagination.css'
import {Api} from "../../Api";

export default function Pagination({setParams, viewList}) {

function set(data){
    setParams(data)
   }

    return (
        <>
            <div className='Pagination'>
                <div className='pgb' onClick={() => set({page:1, per_page: 25})}>1</div>
                <div className='pgb' onClick={() => set({page:2, per_page: 25})}>2< /div>
                <div className='pgb' onClick={() => set({page:3, per_page: 25})}>3</div>
                <div className='pgb' onClick={() => set({page:4, per_page: 25})}>4</div>
                <div className='pgb' onClick={() => set({page:5, per_page: 25})}>5</div>
            </div>
        </>


    )
}