import { useContext, useEffect } from "react"
import { FavoritesContext } from "../contexts/ListContext"
import CreateListForm from "./CreateListForm"
import Cookies from "js-cookie"



export default function FavoritesPage() {

    const { favoritesList, setFavoritesList } = useContext(FavoritesContext)

    // favorites will be organized into folders
    // default is Liked movies
    // can create other folders, but liked will always stay there
    // is organized by favoritesList
    // each key in favoritesList represents a folder and each value is an array of arrays [movie title, imdbID]
    // updates to favoritesList include: appending to a list (folder), deleting from a list, and deleting a folder
    // can't add any duplicates to a list

    function deleteFromFolder(ev) {

        const [folderName, imdbID] = ev.target.value.split(',')

        // get movies in the folder
        const listOfMovies = favoritesList[folderName]

        for (let i = 0; i < listOfMovies.length; i++) {

            const movie = listOfMovies[i]

            const id = movie[1]

            if (id === imdbID) {

                const newObj = { ...favoritesList }

                newObj[folderName].splice(i, 1);

                setFavoritesList({ ...newObj })

                console.log(favoritesList)


                return;

            }

        }

        throw new Error('movie not found')


    }

    function deleteFolder(ev) {

        const listName = ev.target.value

        const newObj = { ...favoritesList }

        delete newObj[listName]

        setFavoritesList({ ...newObj })

    }

    useEffect(() => { // updates cookies whenever favoritesList updates
        console.log(favoritesList)
        const stringData = JSON.stringify(favoritesList)
        Cookies.set('favoritesList', stringData)
    }, [favoritesList])

    // make favoritesList into a renderable array


    // now in html, we must iterate through all keys in favoriteList object, assign these as FOLDERS
    // under each folder, render each movie w/ its respective title 

    return (
        <div>
            <center>
                <h1>Favorites</h1>
            </center>
            <div className="create-folder-form-title">
                <h3>Create List: </h3>
                <CreateListForm />
            </div>
            <div className="all-lists">
                {
                    Object.entries(favoritesList).map((collection) => {
                        const folderName = collection[0]
                        const moviesList = collection[1]
                        return (
                            <div className="folder-row">
                                <div className="lists">
                                    <h4>{folderName}<button className="delete-button" value={folderName} onClick={deleteFolder}>X</button></h4>
                                    <div className="movies-folder">
                                        {
                                            moviesList.map((movieArr) => {
                                                const imdbID = movieArr[1]
                                                const imdbLink = `http://imdb.com/title/${imdbID}`
                                                const movieTitle = movieArr[0]
                                                return (
                                                    <div className="movies-folder-object">
                                                        <a href={imdbLink} target="_blank" rel="noreferrer">{movieTitle}</a>
                                                        <button className="delete-button" value={[folderName, imdbID]} onClick={deleteFromFolder}>X</button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </div>
    )
}