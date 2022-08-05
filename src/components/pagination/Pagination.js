import React, {useState} from 'react'
import './styles/Pagination.css'


export default function Pagination({setParams, params}) {

    const [page, setPage] = useState(1)
    const pageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    function set(data) {
        setParams({...params, ...data})
        setPage(data.page)
          }

    function viewPagination() {
        let iconPage = pageNumber.map(item => {
            return (
                <div key = {item.id} className={page === item ? 'pgba' : 'pgb'} onClick={() => set({ page: item, per_page: 25})}>{item}</div>
            )
        })
        return iconPage
    }


    return (
        <>
            <div className='Pagination'>
                {page >1 ?  <div className='pgb' onClick={() => set({page: page - 1, per_page: 25})}>пред.</div> : null}
                {viewPagination()}
                {page <9 ? <div className='pgb' onClick={() => set({page: page + 1, per_page: 25})}>след.</div> :null}
            </div>
        </>


    )
}