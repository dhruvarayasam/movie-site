

export function checkIfMovieAlreadyExists(list, imdbID) { // if true, movie exists in list

    for (let i = 0; i < list.length; i++) {

        const movie = list[i]

        const id = movie[1]

        if (id === imdbID) {
            return true
        }

    }

    return false

}

export function checkIfFolderAlreadyExists(listName, favoritesList) {

    return favoritesList.hasOwnProperty(listName)

}