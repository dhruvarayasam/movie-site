import React from 'react'
import './App.css';
import HomeSearch from './components/HomeSearch';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FavoritesPage from './components/FavoritesPage';
import { FavoritesListProvider } from './contexts/ListContext';

function App() {
    return (
        <div>
            <FavoritesListProvider>
                <Routes>
                    <Route index element={
                        <div>
                            <Navbar />
                            <HomeSearch/>
                        </div>
                    }/>

                    <Route path="/favorites" element={
                        <div>
                            <Navbar />
                            <FavoritesPage />
                        </div>
                    } />
                </Routes>
            </FavoritesListProvider>
        </div>
    )
}

export default App;