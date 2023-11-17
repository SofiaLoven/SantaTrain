import { HeaderSmall } from "../components/HeaderSmall"
import { ITrainInfo } from "../utilities/ITrainInfo"
import { useLocation } from 'react-router-dom';

export const Train =()=>{
    const location = useLocation();
    const train: ITrainInfo = location.state;

    return <>
        <HeaderSmall/>
        <section>
            <div>
            <img src={`../src/assets/images/${train.picture}`} alt={train.title}/>
            </div>
            <div>
                <h2>{train.title}</h2>
                <p>Antalet platser på tåget: {train.passengers.toString()}</p>
                <p>{train.info}</p>
            </div>
        </section>
    </>
}