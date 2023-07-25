import { useContext, useState } from "react";
import { FavoritesContext } from "../contexts/ListContext";
import { checkIfFolderAlreadyExists } from "../checks";


export default function CreateListForm() {


    const {favoritesList, setFavoritesList} = useContext(FavoritesContext)
    const [folderName, setFolderName] = useState('')

    function addFolder(ev) {

        ev.preventDefault()

        if (!checkIfFolderAlreadyExists(folderName, favoritesList)) {

            const objToAdd = {}
            objToAdd[folderName] = []

            setFavoritesList({ ...favoritesList, ...objToAdd })

        } else {

            console.log(favoritesList)

            alert('folder already exists, try again')

        }

    }

    return (
        <div>
            <h3 className="lists">Create a folder: </h3>
            <form onSubmit={addFolder}>
                <input
                    type="text"
                    value={folderName}
                    placeholder="enter name here"
                    onChange={(e) => {setFolderName(e.target.value)}}

                ></input>
                <button>Submit</button>
            </form>
        </div>
    )


}