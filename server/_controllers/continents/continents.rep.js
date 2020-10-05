const requstService = require('../../services/requstService');

module.exports={
    getCountries
}

async function getCountries(continent){
  return  await requstService.getData(`http://restcountries.eu/rest/v2/region/${continent}`)
}