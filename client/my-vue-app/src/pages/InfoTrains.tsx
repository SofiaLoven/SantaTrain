import { HeaderSmall } from "../components/HeaderSmall"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { ITrainInfo } from "../utilities/ITrainInfo"
import axios from 'axios'

type ResponseType= {
    status: string,
    statusCode: number,
    error: string | null,
    data: ITrainInfo[]
}

export const InfoTrains =()=>{

    const [trainInfo, setTrainInfo]= useState<ITrainInfo[]>([]);

    useEffect(()=>{
        const getAllInfo = async()=>{
            try{
                let response = await axios.get<ResponseType>(`http://localhost:8080/api/trains`);
                setTrainInfo(response.data.data);
            }catch(error){
                if(error instanceof Error){
                    console.log(error.message);
                }
            }
        }
    
        getAllInfo();
    }, []);

    return <div>
        <HeaderSmall/>
        <h2>Våra tåg</h2>
        <section>
            <ul>
                {trainInfo.map((train)=>{
                    return <li>
                        <div>
                            <img src={`src/assets/images/${train.picture}`} alt={train.title}/>
                            <Link to={`/infoTrains/${train.id}`} state={train}><strong>{train.title}</strong></Link>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    </div>
}