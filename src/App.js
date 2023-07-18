import React from 'react'
import './App.css';
import HomeSearch from './components/HomeSearch';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LetterboxdSignIn from './components/LetterboxdSignIn';

function App() {
    return (
        <div>
            <Routes>

                <Route index element={
                    <div>
                        <Navbar />
                        <HomeSearch/>
                    </div>
                }/>

                <Route path="/letterboxdsignin" element={
                    <div>
                        <Navbar />
                        <LetterboxdSignIn />
                    </div>
                } />
            </Routes>
        </div>
    )
}

export default App;