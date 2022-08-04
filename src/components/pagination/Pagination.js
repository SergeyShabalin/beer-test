import React, {useEffect, useState} from 'react'
import './styles/Pagination.css'
import {Api} from "../../Api";

export default function Pagination({setParams, viewList}) {

    const page = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    function set(data) {
        setParams(data)
    }

    function viewPagination() {
        let iconPage = page.map(item => {
            return (
                <div className='pgb' onClick={() => set({page: item, per_page: 25})}>{item}</div>
            )
        })
        return iconPage
    }


    return (
        <>
            <div className='Pagination'>
                {viewPagination()}
            </div>
        </>


    )
}