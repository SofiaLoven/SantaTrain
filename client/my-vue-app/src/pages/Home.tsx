import { Link } from 'react-router-dom'
import { HeaderBig } from '../components/HeaderBig'
import style from './home.module.css'

export const Home =()=>{
    return <div className={style.home}>
                <HeaderBig />
                <section className={style.section}>
                    <h1>Välkommen till Lennakatten</h1>
                    <p>Lennakatten är en 33 km lång museijärnväg i Uppland, från centrala Uppsala till Faringe, som trafikeras av historiska ånglok, diesellok och rälsbussar. Upplev en resa som om den vore under 1900-talets första hälft med doft av stenkol och varm ånga, dunkande skenskarvar och vackra miljöer utanför fönstret. Det är en resa för hela familjen som fascinerar gammal som ung.</p>
                    <Link to={'/infoTrains'} className={style.link}>Läs mer om våra tåg här</Link>
                </section>
                <section className={style.section}>
                    <h2>Följ med på vårt tomtetåg</h2>
                    <p>Lennakattens tomtetåg avgår den 10december.</p>
                    <Link to={'/christmasTrain'} className={style.link}>Köp biljetter till Tomtetåget</Link>
                </section>
            </div>
}