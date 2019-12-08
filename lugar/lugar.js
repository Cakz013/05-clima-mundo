const axios = require ("axios");


const getLugarLatLng=  async (dir) =>
{
    const encodedUrl = encodeURI(dir);

    console.log(encodedUrl);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key': 'd57b636779msh85bc872e12b7493p121904jsn71b589c260f1'}
        
      });
    const resp = await instance.get();

    if (resp.data.Results.length === 0){
        throw new Error (`No hay resultado para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
   
}
module.exports = {
    getLugarLatLng
}


  