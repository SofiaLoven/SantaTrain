import { addData, getData } from "../utilities/http.mjs";

const addTicket = async ( req, res)=>{
    const body = req.body;
    const response = await addData(body);

    if(response.statusCode === 201){
        return res.status(201).json(response);
    }else{
        return res.status(500).json(response);
    }
}

const getTrains = async(req, res)=>{
    const response = await getData();
    res.status(200).json(response);
}

export { addTicket, getTrains };