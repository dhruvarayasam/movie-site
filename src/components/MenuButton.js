import { useContext, useState } from 'react'
import PlusSign from '../plus-sign.svg'
import { FavoritesContext } from '../contexts/ListContext'
import { checkIfMovieAlreadyExists } from '../usefulFuncs'
import CreateListForm from './CreateListForm'

export default function MenuButton({movieTitle, imdbID}) {

    const {favoritesList, setFavoritesList} = useContext(FavoritesContext)

    const [openMenu, setOpenMenu] = useState(false) // if this is true, then menu should be open

    function toggleMenu(ev) {

        ev.preventDefault()

        setOpenMenu(!openMenu)

    }

    function addToFolder(ev) { // if successfully added to folder, give success alert() message

        const folderName = ev.target.value

        const list = favoritesList[folderName]
        // const list = [['21 jump street', 12], ['Apocalypse Now', 238]]

        if (checkIfMovieAlreadyExists(list, imdbID)) {
            alert('movie already exists in list, try again')
        } else {

            const newObj = {}
            newObj[folderName] = [...list, [movieTitle, imdbID]]

            console.log(newObj)


            setFavoritesList({
                ...favoritesList,
                ...newObj
            })

            alert('successfully added')

        }

    }

    console.log(favoritesList)

    const folders = Object.keys(favoritesList)

    return (
        <div>
            <button className="menu-button" onClick={toggleMenu}><img src={PlusSign} alt='add'></img></button>
            {openMenu && (
                <ul className="list-buttons">
                    {
                        folders.map((folder) => {
                            return <li><button className="generic-button-style" value={folder} onClick={addToFolder}>{folder}</button></li>
                        })
                    }
                    <li><CreateListForm /></li>
                </ul>
            )}
        </div>

    )
}