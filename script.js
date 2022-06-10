const key = "yC5puunijjlNFMYu2rgAObFpYth56e59";

// find current weather conditions
const getWeather = async (id) => {

    //find city destination

};
const base = "http://dataservice.accuweather.com/currentconditions/v1/";
const query = "";

const getCity = async (city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    console.log(data[0]);




};

getCity("Minneapolis")
    .then(data => console.log(data))
    .catch(err => console.log(err));
