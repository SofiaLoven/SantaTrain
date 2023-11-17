import style from './ticketForm.module.css';
import { type FormEvent, useRef } from 'react';
import axios from 'axios';

type TicketInfo = {
    id: number
    name: string;
    email: string;
    amountTickets: number;
}



const saveTicket = async(data: TicketInfo) =>{
    try{
        const response = await axios.post('http://localhost:8080/api/tickets', data);
        console.log(response.data);
        alert(`Tack ${response.data.data.name} för att du köpte en biljett.`)
     }catch(error){
        console.log(error);
        alert('Det uppstod tyvärr ett fel. Vänligen försök igen senare.')
     }
}

export const TicketForm =()=>{

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const amountTickets = useRef<HTMLSelectElement>(null);

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const ticketInfo: TicketInfo ={
            id: Date.now(),
            name: name.current!.value,
            email: email.current!.value,
            amountTickets: +amountTickets.current!.value,
        }
        e.currentTarget.reset();

        saveTicket(ticketInfo);
    }


    return <form onSubmit={handleSubmit} className={style.form}>
        <input ref={name} placeholder="För och efternamn" type='text'></input>
        <input ref={email} placeholder="Mailadress" type='email'></input>
        <select ref={amountTickets} name="tickets" id="tickets" defaultValue={0}>
            <option value={0} disabled>Antal biljetter. Max 6st</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
        </select>
        <button type='submit'>Köp biljett</button>
    </form>
}