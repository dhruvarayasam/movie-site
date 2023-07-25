import { useContext } from "react"
import { FavoritesContext } from "../contexts/ListContext"
import { checkIfFolderAlreadyExists, checkIfMovieAlreadyExists } from "../checks"
import CreateListForm from "./CreateListForm"



export default function FavoritesPage() {

    const { favoritesList, setFavoritesList } = useContext(FavoritesContext)

    // favorites will be organized into folders
    // default is Liked movies
    // can create other folders, but liked will always stay there
    // is organized by favoritesList
    // each key in favoritesList represents a folder and each value is an array of arrays [movie title, imdbID]
    // updates to favoritesList include: appending to a list (folder), deleting from a list, and deleting a folder
    // can't add any duplicates to a list

    function deleteFromFolder(folder, imdbID) {

        const listOfMovies = [...favoritesList[folder]]

        for (let i = 0; i < listOfMovies.length; i++) {

            const movie = listOfMovies[i]

            const id = movie[1]

            if (id === imdbID) {

                const newObj = { ...favoritesList }

                newObj[folder].splice(i, 1);

                setFavoritesList({ ...newObj })

                console.log(favoritesList)


                return;

            }

        }

        throw new Error('movie not found')


    }

    function addToFolder(folder, movieTitle, imdbID) {

        const listOfMovies = [...favoritesList[folder]] // 2D Array

        if (!checkIfMovieAlreadyExists(listOfMovies, imdbID)) { // if movie does not exist in the list, it is safe to add to the list

            const newObj = { ...favoritesList }
            newObj[folder] = [movieTitle, imdbID]

            // now, newObj is instantiated with all previous data of favoritesList as well as new movie. now, update state

            setFavoritesList({ ...newObj })

        } else {

            throw new Error('movie exists')

        }
    }

    function addFolder(listName) {

        if (!checkIfFolderAlreadyExists) {

            const objToAdd = {}
            objToAdd[listName] = []

            setFavoritesList({ ...favoritesList, ...objToAdd })

            console.log(favoritesList)

        } else {

            throw new Error('list already exists')

        }

    }

    function deleteFolder(listName) {

        if (checkIfFolderAlreadyExists(listName)) {

            const newObj = { ...favoritesList }

            delete newObj[listName]

            setFavoritesList({ ...newObj })

            console.log(favoritesList)


        } else {
            return new Error('folder doesnt exist')
        }

    }

    // make favoritesList into a renderable array


    // now in html, we must iterate through all keys in favoriteList object, assign these as FOLDERS
    // under each folder, render each movie w/ its respective title 

    return (
        <div>
            <center>
                <h1>Favorites</h1>
            </center>
            <CreateListForm />
            <div className="all-lists">
                {
                Object.entries(favoritesList).map((collection) => {
                    const folderName = collection[0]
                    const moviesList = collection[1]
                    return (
                        <div className="lists">
                            <h4>{folderName}</h4>
                            <div className="movies-folder">
                                {
                                    moviesList.map((movieArr) => {
                                        const imdbLink = `http://imdb.com/title/${movieArr[1]}`
                                        const movieTitle = movieArr[0]
                                        return (
                                            <div className="movies-folder-object">
                                                <a href={imdbLink} target="_blank" rel="noreferrer">{movieTitle}</a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
                }
            </div >
        </div>
    )
}