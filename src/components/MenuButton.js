import { useContext, useState } from 'react'
import PlusSign from '../plus-sign.svg'
import { FavoritesContext } from '../contexts/ListContext'

export default function MenuButton(movieTitle, imdbID) {

    const {favoritesList, setFavoritesList} = useContext(FavoritesContext)

    const [openMenu, setOpenMenu] = useState(false) // if this is true, then menu should be open

    function toggleMenu(ev) {

        ev.preventDefault()

        setOpenMenu(!openMenu)

    }

    function addToFolder() { // if successfully added to folder, give success alert() message

        console.log('success')

    }

    const folders = Object.keys(favoritesList)

    return (
        <div>
            <button className="menu-button" onClick={toggleMenu}><img src={PlusSign} alt='add'></img></button>
            {openMenu && (
                <ul>
                    {
                        folders.map((folder) => {
                            return <li onClick={addToFolder}><button>{folder}</button></li>
                        })
                    }
                </ul>
            )}
        </div>

    )
}