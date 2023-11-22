import {ReactNode} from 'react'
import style from './alert.modules.css'

type AlertProps ={
    mode: 'loading' | 'error' | 'info'; 
    children?: ReactNode;
}

const Alert =({ mode, children }: AlertProps)=>{

    if(mode === 'error'){
        return <aside><h3>Något gick tyvärr fel</h3>{children}</aside>
    }

    if(mode === 'loading'){
        return <aside>Laddar tåginformation...</aside>
    }

    if(mode === 'info'){
        return <aside>
            <h3>Tack för att du köpte en biljett.</h3>
            <p>En bekräftelse kommer att skickas till mail: {children}</p>
            </aside>
    }
}

export default Alert;