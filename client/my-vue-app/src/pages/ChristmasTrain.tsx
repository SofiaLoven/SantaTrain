import { HeaderSmall } from "../components/HeaderSmall"
import { Link } from 'react-router-dom';

export const ChristmasTrain =()=>{
    return <div>
        <HeaderSmall/>
        <h2>Tomtetåget</h2>
        <section>
            <p>Välkommen på en julig resa med Lennakatten i vinter! Tomtetåg på Lennakatten avgår i år den 10 december från Faringe station till tomtefar, tomtemor och alla deras nissar i Almunge. Våra vagnar är mysigt julpyntade och och i Almunge står korv, lussekatter och annat julfika uppdukat.</p>
            <p>Hela turen tar drygt 1 timme och 40 minuter.</p>
        </section>
        <section>
            <h4>Resan med tomtetåget</h4>
            <p>Resan börjar i Faringe där ni hämtar ut era förköpta biljetter i stationshuset. Sedan tar ni plats i de ånguppvärmda och mysigt julpyntade vagnarna. Stinsen vinkar iväg tåget, ångloket börjar frusta och stånka och tåget beger sig mot Almunge och tomtefar, tomtemor och alla deras hjälpsamma nissar. Resan tar ca 17 minuter i vardera riktning. Framme i Almunge kan ni välja mellan att börja gå till tomtefar och tomtemor direkt och få en godispåse, värma er med en kopp varm, alkoholfri glögg, få en korv i korvståndet eller gå in till caféet och hämta en lussekatt och en pepparkaka. Allt ingår i tomtetågsbiljetten.</p>
        </section>
        <Link to={'/christmasTrain/buyTickets'}>Köp biljett här</Link>
    </div>
}