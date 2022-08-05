import React, {useState} from 'react'
import './styles/Serach.css'

export default function Search({setParams, params}) {

    const [searchData, setSearchData] = useState('')

    function getSearchValue(event) {
        setSearchData(event.target.value)
    }

    function applySearch() {
        setParams({beer_name: searchData, ...params})
    }


    return (
        <div className=" search input-group">
            <input onChange={getSearchValue}
                   type="search" className="form-control rounded"
                   placeholder="Search" aria-label="Search"
                   aria-describedby="search-addon"/>
            <button
                onClick={applySearch}
                type="button"
                className="btn btn-outline-primary"
            >search
            </button>
        </div>

    )
}