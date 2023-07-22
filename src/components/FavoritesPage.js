import { useContext } from "react"
import { FavoritesContext } from "../contexts/ListContext"



export default function FavoritesPage() {

    const { favoritesList } = useContext(FavoritesContext)

    return (
        <div>
            <h1>{favoritesList.test}</h1>
        </div>
    )
}