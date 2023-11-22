import { HeaderSmall } from "../components/HeaderSmall"
import { type ReactNode, useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { ITrainInfo } from "../utilities/ITrainInfo"
import axios from 'axios'
import Alert from "../components/Alert";
import style from './infoTrains.module.css'

type ResponseType= {
    status: string,
    statusCode: number,
    error: string | null,
    data: ITrainInfo[]
}

export const InfoTrains =()=>{
    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState(false);
    const [trainInfo, setTrainInfo]= useState<ITrainInfo[]>([]);

    useEffect(()=>{
        const getAllInfo = async()=>{
            try{
                setLoading(true);
                let response = await axios.get<ResponseType>(`http://localhost:8080/api/trains`);
                setTrainInfo(response.data.data);
            }catch(error){
                if(error instanceof Error){
                    setError(error.message);
                }
            }
            setLoading(false);
        }
    
        getAllInfo();
    }, []);

    let content: ReactNode;

    if(trainInfo){
        content = (
            <>
                <h2>Våra tåg</h2>
                <section>
                    <ul>
                        {trainInfo.map((train)=>{
                            return <li>
                                <div className={style.train}>
                                    <img src={`src/assets/images/${train.picture}`} alt={train.title}/>
                                    <Link to={`/infoTrains/${train.id}`} state={train} className={style.link}><strong>{train.title}</strong></Link>
                                </div>
                            </li>
                        })}
                    </ul>
                </section>
            </>    
        );
    }

    if(error){
        content = <Alert mode='error'>{error}</Alert>
    }

    if(loading){
        content = <Alert mode='loading'></Alert>
    }

    return <div>
        <HeaderSmall/>
        <section className={style.trains}>
            {content}
        </section>
    </div>
}