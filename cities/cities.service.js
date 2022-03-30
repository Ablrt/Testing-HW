const repository = require('./cities.repository')
const NotFoundError = require('../common/errors/not-found.error')

async function getCityByZipCode(zipcode){
    try {
        const data = await repository.getCityDataByZipCode(zipcode);
        let city = `${data.places[0]['place name']}, ${data.places[0]['state abbreviation']}, ${data.country}`;
        return city;
    } catch (error) {
        throw new NotFoundError('No cities found!')
    }
}
module.exports = {
    getCityByZipCode
}