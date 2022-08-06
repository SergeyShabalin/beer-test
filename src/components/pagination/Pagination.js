import './styles/Pagination.css'


export default function Pagination({setParams, lenghtListBeer, page}) {


    function set(data) {
        setParams(prev => ({...prev, ...data}))
    }

    return (
        <>
            <div className='Pagination'>
                {page !== 1 ?
                    <div className='pgb' onClick={() => set({page: page - 1, per_page: 25})}>пред.</div> : null}
                {lenghtListBeer === 25 ?
                    <div className='pgb' onClick={() => set({page: page + 1, per_page: 25})}>след.</div> : null}
            </div>
        </>


    )
}