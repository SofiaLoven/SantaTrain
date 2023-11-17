import { HeaderSmall } from "../components/HeaderSmall"
import { TicketForm } from "../components/TicketForm"

export const BuyTickets =()=>{
    return <div>
                <HeaderSmall/>
                <h2>Biljett till Tomtetåget</h2>
                <section>    
                    <strong>Pris: 215 kr per person</strong>
                    <p>Priset är samma för alla resenärer från två år. Barn 0-1 år reser gratis och behöver ingen biljett. Notera att medlemskort och andra fribiljetter ej gäller som färdbevis på tomtetåget. Köpt biljett återköps eller ombokas ej.</p>
                </section>
                <aside>
                    <strong>Detta ingår</strong>
                    <ul>
                        <li>En tur- och returresa mellan Faringe och Almunge med det mysigt julpyntade tomtetåget som dras av ånglok.</li>
                        <li>Ett besök hos Tomtefar och Tomtemor i godsmagasinet som delar ut godispåsar till alla barn (och vuxna som vill ha!)</li>
                        <li>Varmkorv</li>
                        <li>Lussekatter och pepparkakor</li>
                        <li>Kaffe, te eller fest</li>
                        <li>... och mycket julstämning.</li>
                    </ul>
                </aside>
                <TicketForm />
            </div>
}
