const chai = require('chai');
const sinon = require('sinon');
chai.should();
const expect = chai.expect;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const {getCityDataByZipCode} = require('./cities.repository');
const axios = require('axios');

describe('Testing cities.repository.js file', ()=>{
    describe('Testing getCityDataByZipCode function',()=>{
        it('Stub the axios.get once',async ()=>{
            const stub = sinon.stub(axios, 'get').resolves(
                {
                    data:{
                        places:[],
                        country:''
                    }
                }
            );
            const a  = await getCityDataByZipCode();
            expect(stub).to.have.been.calledOnce;
        });
    })
})
