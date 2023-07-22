import { createContext, useState } from "react";

export const FavoritesContext = createContext({})

export function FavoritesListProvider({children}) {

    const [favoritesList, setFavoritesList] = useState({test: 'test value'});

    return (
        <FavoritesContext.Provider value={{favoritesList, setFavoritesList}}>
            {children}
        </FavoritesContext.Provider>
    )

}