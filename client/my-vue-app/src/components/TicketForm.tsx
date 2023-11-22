import style from './ticketForm.module.css';
import { type FormEvent, useRef, useState} from 'react';
import axios from 'axios';

type TicketInfo = {
    id: number
    name: string;
    email: string;
    amountTickets: number;
}

//Jag försökte länge och väl med att skicka info till Alerkomponenten istället för alert(). Men det ville sig tyvärr inte. 
const saveTicket = async(data: TicketInfo) =>{

    try{
        const response = await axios.post('http://localhost:8080/api/tickets', data);
        alert(`Tack för att du har köpt en biljett, ett bekräftelsemail kommer att skickas till ${response.data.data.email}`);

     }catch(error){
        if(error instanceof Error){
            alert(`Något gick tyvärr fel i biljettköpet.
            ${error.message}`);
        }
     }
}

export const TicketForm=()=>{
    const [text, setText]= useState<string>('');
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const amountTickets = useRef<HTMLSelectElement>(null);

    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const ticketInfo: TicketInfo ={
            id: Date.now(), //Det är självklart säkrare och bättre att skapa id i backend med uuid. Men jag hinner inte med att får det att lira nu när praktiken börjat. 
            name: name.current!.value,
            email: email.current!.value,
            amountTickets: +amountTickets.current!.value,
        }

        if(ticketInfo.amountTickets === 0){
            setText('Vänligen välj antal biljetter!');
        }else{
            e.currentTarget.reset();
            saveTicket(ticketInfo);
        }

        
    }

    return <>
            <form onSubmit={handleSubmit} className={style.form}>
                <input ref={name} placeholder="För och efternamn" type='text' required></input>
                <input ref={email} placeholder="Mailadress" type='email' required></input>
                <select ref={amountTickets} name="tickets" id="tickets" defaultValue={0} required>
                    <option value={0} disabled>Antal biljetter. Max 6st</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                </select>
                <p>{text}</p>
                <button type='submit'>Köp biljett</button>
            </form>
        </>    
}