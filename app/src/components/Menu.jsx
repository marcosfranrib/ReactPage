import TodoIcon from '../img/icon-todo.svg';
import Calendar from '../img/icon-calendar.svg';
import Reminders from '../img/icon-reminders.svg';
import Planning from '../img/icon-planning.svg';
import Arrow from '../img/icon-arrow-down.svg';
import MenuIcon1 from '../img/icon-menu.svg';
import MenuIcon2 from '../img/icon-close-menu.svg';
import Button from './Button';
import { useState } from 'react';

export default function Menu({translateValor}) {
    const [showMenu,setShowMenu] = useState(false)
    const [showCompanyMenu, setShowCompanyMenu] = useState(false);
    const [sideBar,setSideBar] = useState(true)

    const openMenu = ()=>{
        setShowMenu(!showMenu)
    }

    const openCompany = ()=>{
        setShowCompanyMenu(!showCompanyMenu)
    }

    const openLateral = ()=>{
        setSideBar(!sideBar)
    }

    return(
        <div className="navBar">
             <div className='menuLateral'>
                <img src={sideBar ? MenuIcon1 : MenuIcon2} alt="" className='menuIcon' onClick={openLateral}/>
             </div>
            <ul className='ul'>
                <div style={sideBar ? translateValor : {width:'70%'}}>              
                    <li className='feature li'>
                        <span onClick={openMenu}>Features <img src={Arrow} /></span>
                        <ul className='menu' style={{display: showMenu ? 'block' : 'none'}}>
                            <li><img src={TodoIcon} />Todo List</li>
                            <li><img src={Calendar} />Calendar</li>
                            <li><img src={Reminders} style={{marginRight:'1.2rem'}}/>Reminders</li>
                            <li><img src={Planning} />Planning</li>
                        </ul>
                    </li>
                    <li className='company li'>
                        <span onClick={openCompany}>Company <img src={Arrow} /></span>
                        <ul className='menu' style={{display: showCompanyMenu ? 'block' : 'none'}}>
                            <li>History</li>
                            <li>Our Team</li>
                            <li>Blog</li>
                        </ul>
                    </li>
                    <li className='li'>Carrers</li>
                    <li className='li'>About</li>
                    <div className='login'>
                        <a href="#">Login</a>
                        <Button nameClass={'headButton'} tipo={'Registrer'}/>
                    </div>
                </div>
                
            </ul>
        </div>
    )
}

