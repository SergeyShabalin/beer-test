import BeerList from "./components/beerList/BeerList";
import BeerInfo from "./components/beerList/beerInfo/BeerInfo";
import {Routes, Route} from 'react-router-dom'

import './App.css';


function App() {
    return (
        <div>

            <div className='App'>

                <Routes>
                    <Route path="/" element={<BeerList/>}/>
                    <Route path="/:id" element={<BeerInfo/>}/>
                    <Route path="*" element={<BeerList/>}/>
                </Routes>

            </div>
        </div>
    )
}

export default App;
