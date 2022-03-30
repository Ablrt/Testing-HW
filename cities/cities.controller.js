const expres = require('express')
const router = expres.Router()
const citiesService = require('./cities.service')
const asyncHandler = require('express-async-handler');


router.get('/:zipCode', asyncHandler(async (req,res)=>{
    const city = await citiesService.getCityByZipCode(req.params.zipCode);
    res.send(city);
}));

module.exports = router;