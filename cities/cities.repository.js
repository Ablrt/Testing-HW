const axios = require('axios');

async function getCityDataByZipCode(zipCode){
    const city = await axios.get(`https://api.zippopotam.us/us/${zipCode}`);
    if(!city.data){
        throw new Error();
    }
    return city.data   
}

module.exports = {
    getCityDataByZipCode
}