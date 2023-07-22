import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="navLink">Home</Link>
            <Link to='/favorites' className="navLink">Favorites</Link>
        </nav>
    )
}