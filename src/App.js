import React from 'react'
import './App.css';
import HomeSearch from './HomeSearch';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                <Route index element={
                    <div>
                        <HomeSearch/>
                    </div>
                }/>
            </Routes>
        </div>
    )
}

export default App;