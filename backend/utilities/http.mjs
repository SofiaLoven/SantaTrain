import fetch from 'node-fetch'

const baseUrl = process.env.BASE_URL;

let responseType = {
    status: 'Error',
    statusCode: 500,
    error: null,
    data: null,
};

const getData = async()=>{
    const response = await fetch(`${baseUrl}trains/`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    })

    if(response.ok){
        const result = await response.json();

        responseType.status = 'Sucsess';
        responseType.statusCode = 200;
        responseType.data = result;
        return responseType;
    }else{
        responseType.error = 'Kunde inte finna din data';
        responseType.status = 'Not Found';
        responseType.statusCode = 404;
    }
}

const addData = async(body) =>{
    const response = await fetch(`${baseUrl}tickets/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if(response.status !== 201){
        responseType.error = 'Ett fel inträffade när du skulle köpa din biljett. Försök igen senare eller kontakta biljettkontoret.'
        return responseType;
    }else{
        const result = await response.json();
        responseType.status = 'Success';
        responseType.statusCode = 201;
        responseType.data = result;
        return responseType;
    }
}

export { addData, getData }