import style from './headerSmall.module.css'
import Logo from '../assets/images/Lennakatten-logo-liggande-vit-RGB_Rityta-1.png.webp';
import { NavBar } from './navBar';
import { Link } from 'react-router-dom';

export const HeaderSmall =  ()=>{
    return <header className={style.header}>
        <Link to={'/'}><img src={Logo} alt='Lennakattens logga'/></Link>
        <div>
            <NavBar />
        </div>
    </header>
}