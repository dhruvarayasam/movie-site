import PlusSign from '../plus-sign.svg'

export default function MenuButton(movieTitle, imdbID) {

    function openMenu(ev) {
        
        ev.preventDefault()

        console.log(movieTitle, imdbID)
    }


    return (
        <button className="menu-button" onClick={openMenu}><img src={PlusSign} alt='add'></img></button>
    )
}