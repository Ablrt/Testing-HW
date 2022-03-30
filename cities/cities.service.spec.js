const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const rewire = require('rewire');
const service = rewire('./cities.service.js');
chai.use(chaiAsPromised);
chai.should();
//const expect = chai.expect;

const faker = require('faker');


describe('Testing cities.service.js file', ()=>{
    describe('Testing getCityByZipCode function',()=>{

      it('Given data creates the correct string', async()=>{
          const fakeCountry = faker.address.country();
          const fakeCity = faker.address.city();
          const fakeAbbr = faker.address.stateAbbr();
          const repositoryMock = {
              getCityDataByZipCode: function(zipCode){
                return {
                  country: fakeCountry,
                  places: [
                    {
                      'place name': fakeCity,          
                      'state abbreviation': fakeAbbr
                    }
                  ]
                }
              }
          }
          service.__set__('repository', repositoryMock);
          return service.getCityByZipCode().should.eventually.equal(
            `${fakeCity}, ${fakeAbbr}, ${fakeCountry}`
          );
        });

        it('Given empty data thorws correct error', async()=>{
          const repositoryMock = {
              getCityDataByZipCode: function(zipCode){
                return undefined;
              }
          }
          service.__set__('repository', repositoryMock);
          return service.getCityByZipCode().should.eventually.be.rejectedWith('No cities found!');
        });
        
        it('Throws the correct error when something else goes wrong', ()=>{
            service.__set__('repository', null);
            return service.getCityByZipCode().should.eventually.be.rejectedWith('No cities found!');
        });
    })
})
