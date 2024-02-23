import logo from '../img/logo.svg';
import Menu from './Menu';

export default function Header() {
    return(
        <nav className="navigation">
            <img src={logo} alt=""/>
            <Menu translateValor={{transform: `translateX(300px)`}}/>
        </nav>   
    )
}