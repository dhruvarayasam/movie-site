import { useContext } from "react"
import { FavoritesContext } from "../contexts/ListContext"



export default function FavoritesPage() {

    const { favoritesList } = useContext(FavoritesContext)

    // favorites will be organized into folders
    // default is Liked movies
    // can create other folders, but liked will always stay there
    // is organized by favoritesList
    // each key in favoritesList represents a folder and each value is an array of strings (movie titles)
    // updates to favoritesList include: appending to a list (folder), deleting from a list, and deleting a folder

    function deleteFromFavoritesList(value) {

    }

    function addToFavoritesList(value) {

    }

    function deleteList() {
        
    }

    return (
        <div>
            <h1>{favoritesList.test}</h1>
        </div>
    )
}