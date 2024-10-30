import "./Header.css";
import { Link } from 'react-router-dom';

export const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <div className={"navLinks"}>
                <Link to="/edit-profile">Edit Profile</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/todos">Todos</Link>
            </div>
        </header>
    )
}
