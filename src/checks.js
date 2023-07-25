

export function checkIfMovieAlreadyExists(list, imdbID) {

    for (let i = 0; i < list.length; i++) {

        const movie = list[i]

        const id = movie[1]

        if (id === imdbID) {
            return false
        }

    }

    return true

}

export function checkIfFolderAlreadyExists(listName, favoritesList) {

    return favoritesList.hasOwnProperty(listName)

}