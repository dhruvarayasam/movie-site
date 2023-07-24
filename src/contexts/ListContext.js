import { createContext, useState } from "react";

export const FavoritesContext = createContext({})

export function FavoritesListProvider({children}) {

    const [favoritesList, setFavoritesList] = useState({'all-time-favorites': [['Movie1', 1]], 'list2':[['Mission Impossible Ghost Protocol', 109], ['Harry Potter', 987]]});

    return (
        <FavoritesContext.Provider value={{favoritesList, setFavoritesList}}>
            {children}
        </FavoritesContext.Provider>
    )

}