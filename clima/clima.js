const axios = require ("axios");

const getClima = async (lat,lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=746e546a8274111d29d356eba7c70fd4&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}