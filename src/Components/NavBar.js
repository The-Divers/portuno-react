import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Home as HomeIcon, Calendar as CalendarIcon, Bookmark as BookMarkIcon, User as UserIcon} from 'react-feather';

const NavBar = () => {
    return (
        <nav className="navbar fixed-bottom">
            <Link to="/">
                <HomeIcon />
                <br/>
                <span>Home</span>
            </Link>
            <Link to="/">
                <CalendarIcon />
                <br/>
                <span>Horários</span>
            </Link>
            <Link to="/">
                <BookMarkIcon />
                <br/>
                <span>Reservas</span>
            </Link>
            <Link to="/">
                <UserIcon />
                <br/>
                <span>Perfil</span> 
            </Link>
        </nav>
    );
}

export default NavBar;