import { createContext, useState } from "react";
import Cookies from "js-cookie";

export const FavoritesContext = createContext({})

export function FavoritesListProvider({children}) {

    // set initial value of favoritesList to favoritesList cookie; if no cookie exists, then instantiate the cookie and favoritesList context to empty object

    if (Cookies.get('favoritesList') === undefined) {
        Cookies.set('favoritesList', {})
    }

    const initialValue = JSON.parse(Cookies.get('favoritesList'))

    console.log(initialValue)

    const [favoritesList, setFavoritesList] = useState(initialValue);

    return (
        <FavoritesContext.Provider value={{favoritesList, setFavoritesList}}>
            {children}
        </FavoritesContext.Provider>
    )

}