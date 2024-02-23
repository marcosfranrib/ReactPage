import logo from '../img/logo.svg';
import Menu from './Menu';

export default function Header() {
    const windowSize = window.innerWidth;

    return(
        <nav className="navigation">
            <img src={logo} alt=""/>
            {windowSize < 600 && (<Menu displayMode={{display: 'none'}}/>)}
            {windowSize > 600 && (<Menu displayMode={{display: 'flex'}}/>)}
        </nav>   
    )
}