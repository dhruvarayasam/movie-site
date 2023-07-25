import { useContext } from "react";
import { FavoritesContext } from "../contexts/ListContext";
import { checkIfFolderAlreadyExists } from "../checks";


export default function CreateListForm() {


    const {favoritesList, setFavoritesList} = useContext(FavoritesContext)

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

    return (
        <div>
            <form>
                <label>Name of Folder</label>
                <input
                    type="text"
                ></input>
                <button>Submit</button>
            </form>
        </div>
    )


}