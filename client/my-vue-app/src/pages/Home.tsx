import { Link } from 'react-router-dom'
import { HeaderBig } from '../components/HeaderBig'

export const Home =()=>{
    return <div>
        <HeaderBig />
        <section>
            <h1>Välkommen till Lennakatten</h1>
            <p>Lennakatten är en 33 km lång museijärnväg i Uppland, från centrala Uppsala till Faringe, som trafikeras av historiska ånglok, diesellok och rälsbussar. Upplev en resa som om den vore under 1900-talets första hälft med doft av stenkol och varm ånga, dunkande skenskarvar och vackra miljöer utanför fönstret. Det är en resa för hela familjen som fascinerar gammal som ung.</p>
            <Link to={'/infoTrains'}>Läs mer om våra tåg här</Link>
        </section>
        <section>
            <h2>Följ med på vårt tomtetåg</h2>
            <p>Lennakattens tomtetåg avgår 2,3,9 och 10december.</p>
            <Link to={'/christmasTrain'}>Köp biljetter till Tomtetåget</Link>
        </section>
    </div>
}