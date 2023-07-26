import { useContext, useState } from "react";
import { FavoritesContext } from "../contexts/ListContext";
import { checkIfFolderAlreadyExists } from "../usefulFuncs";


export default function CreateListForm() {


    const {favoritesList, setFavoritesList} = useContext(FavoritesContext)
    const [folderName, setFolderName] = useState('')

    function addFolder(ev) { // ADD PROVISION TO CHECK FOR COMMAS: NO COMMAS ALLOWED IN FOLDER TITLES
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

    // useEffect(() => { // updates cookies whenever favoritesList updates
    //     const stringData = JSON.stringify(favoritesList)
    //     Cookies.set('favoritesList', stringData)
    // }, [favoritesList])

    return (
        <div className="create-form">
            <form onSubmit={addFolder}>
                <input
                    type="text"
                    value={folderName}
                    placeholder="enter name here"
                    onChange={(e) => {setFolderName(e.target.value)}}

                ></input>
                <button className="generic-button-style">Create</button>
            </form>
        </div>
    )


}