import axios from "axios";

//const url ="http://api.weatherstack.com/current?access_key=10be6c6f21c0f00ac5996f269291dee9&query=Tunisia";
const url = "http://localhost:5000/serverData";
//const url="https://api.github.com/users/deekshasharma";
//const url="https://api.randomuser.me/"
export const fetchData = async () => {
  try {
    // const {
    //   data: {
    //     current: { temperature, humidity },
    //     location: { lat, lon, localtime, country, region },
    //   },
    // } 
    const {data}
   =await axios.get(url);
   const test={
     temp:data.data[0].geometry.coordinates[0]
   }
    const modif= 
    { temperature: data.data[0].temperature,
      humidity: data.data[0].humidity,
      localtime:data.data[0].localtime,
      country:data.data[0].country,
      region:data.data[0].region,
      lat: data.data[0].geometry.coordinates[0],
      lon: data.data[0].geometry.coordinates[1], }

     return modif;
    
  } catch (error) {}

};
