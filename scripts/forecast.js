//This JS file is for interacting witht the AccuWeather API

const key = 'RlmdUsWVlO43WKkgrskKmzfV8Nun1utZ';

// Get weather info
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};


// Get city info
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    // Closest match is first element
    return data[0];
};

