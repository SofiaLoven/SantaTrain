import { Link } from 'react-router-dom';
import style from './navBar.module.css';
import '../assets/css/page.css'

export const NavBar = ()=>{
    return <nav className={style.navBar}>
        <ul className={style.ul}>
            <Link to={'/'} className={style.link}><li>Start</li></Link>
            <Link to={'/infoTrains'} className={style.link}><li>Våra tåg</li></Link>
            <Link to={'/christmasTrain'} className={style.link}><li>Tomtetåget</li></Link>
        </ul>
    </nav>
}