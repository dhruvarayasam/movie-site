import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="navLink">Home</Link>
            <Link to='/letterboxdsignin' className="navLink">Letterboxd Sign In</Link>
        </nav>
    )
}