const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8ffde56cddmshd5bfedd32a7752bp121841jsn8039fba9af1a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }     
};  

const cityName = document.getElementById('cityName'); 
const temp = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const Humidity = document.getElementById('Humidity');
const Min_temp = document.getElementById('Min_temp');
const max_temp = document.getElementById('Max_temp');
const Wind_speed = document.getElementById('Wind_speed');
const Wind_degrees = document.getElementById('Wind_degrees');
const Sunrise = document.getElementById('Sunrise');
const Sunset = document.getElementById('Sunset');
const Submit = document.getElementById('submit');
const city = document.getElementById('city');
const temp2 = document.getElementById('temp2');
const Humidity2 = document.getElementById('Humidity2');
const Wind_speed2 = document.getElementById('Wind_speed2');

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            Humidity.innerHTML = response.humidity;
            Humidity2.innerHTML = response.humidity;
            Min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            Wind_speed.innerHTML = response.wind_speed;
            Wind_speed2.innerHTML = response.wind_speed;
            Wind_degrees.innerHTML = response.wind_degrees;
            Sunrise.innerHTML = response.sunrise;
            Sunset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
};

Submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Delhi");

//weather for himachal pradesh
const getWeatherForHimachalPradesh = () => {
    cityName.innerHTML = "Himachal Pradesh"
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Himachal%20Pradesh", options)
        .then(response => response.json())
        .then(response => {
          
            document.getElementById('temp_himachal').innerHTML = response.temp;
            document.getElementById('feels_like_himachal').innerHTML = response.feels_like+"°";
            document.getElementById('Humidity_himachal').innerHTML = response.humidity;
            document.getElementById('Min_temp_himachal').innerHTML = response.min_temp+" °C";
            document.getElementById('Max_temp_himachal').innerHTML = response.max_temp+"°C";
            document.getElementById('Wind_speed_himachal').innerHTML = response.wind_speed+" Km/hr";
            document.getElementById('Wind_speed2_himachal').innerHTML = response.wind_speed+" Km/hr";
            document.getElementById('Wind_degrees_himachal').innerHTML = response.wind_degrees+"°";

            const sunriseTime = new Date(response.sunrise * 1000);
            const sunsetTime = new Date(response.sunset * 1000);
    
            document.getElementById('sunrise_himachal').textContent = formatTimeWithpmmamm(sunriseTime);
            document.getElementById('sunset_himachal').textContent = formatTimeWithpmmamm(sunsetTime);
        })
        .catch(err => console.error(err));
};
const formatTimeWithpmmamm = (time) => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours ? hours : 12; 
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};
getWeatherForHimachalPradesh();

// weather for banglore
const getWeatherForBangalore = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
      .then(response => response.json())
      .then(response => {
        
        document.getElementById('cloud_pct_bangalore').textContent = response.cloud_pct;
        document.getElementById('feels_like_bangalore').textContent = response.feels_like+"°";
        document.getElementById('humidity_bangalore').textContent = response.humidity+"%";
        document.getElementById('max_temp_bangalore').textContent = response.max_temp+"°C";
        document.getElementById('min_temp_bangalore').textContent = response.min_temp+"°C";
        document.getElementById('sunrise_bangalore').textContent = response.sunrise;
        document.getElementById('sunset_bangalore').textContent = response.sunset;
        document.getElementById('temp_bangalore').textContent =  response.temp+"°C";
        document.getElementById('wind_degrees_bangalore').textContent = response.wind_degrees+"°";
        document.getElementById('wind_speed_bangalore').textContent = response.wind_speed +" Km/hr";
        const sunriseTime = new Date(response.sunrise * 1000);
        const sunsetTime = new Date(response.sunset * 1000);

        document.getElementById('sunrise_bangalore').textContent = formatTimeWithpmam(sunriseTime);
        document.getElementById('sunset_bangalore').textContent = formatTimeWithpmam(sunsetTime);
      })
      .catch(err => console.error(err));
  };
  
  const formatTimeWithpmam = (time) => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours ? hours : 12; 
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};
  getWeatherForBangalore();

  // weather for mumbai
  const getWeatherForMumbai = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
       .then(response => response.json())
       .then(response => {
         
         document.getElementById('cloud_pct_mumbai').textContent = response.cloud_pct;
         document.getElementById('feels_like_mumbai').textContent = response.feels_like+"°";
         document.getElementById('humidity_mumbai').textContent = response.humidity+"%";
         document.getElementById('max_temp_mumbai').textContent = response.max_temp+"°C";
         document.getElementById('min_temp_mumbai').textContent = response.min_temp+"°C";
         document.getElementById('sunrise_mumbai').textContent = response.sunrise;
         document.getElementById('sunset_mumbai').textContent = response.sunset;
         document.getElementById('temp_mumbai').textContent = response.temp+"°C";
         document.getElementById('wind_degrees_mumbai').textContent = response.wind_degrees+"°";
         document.getElementById('wind_speed_mumbai').textContent = response.wind_speed +" Km/hr";
         const sunriseTime = new Date(response.sunrise * 1000);
         const sunsetTime = new Date(response.sunset * 1000);

         document.getElementById('sunrise_mumbai').textContent = formatTimeWithpa(sunriseTime);
         document.getElementById('sunset_mumbai').textContent = formatTimeWithpa(sunsetTime);
       })

       .catch(err => console.error(err));
   };
   const formatTimeWithpa = (time) => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours ? hours : 12; 
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};
   
   
   
   getWeatherForMumbai();
  
 // weather for kolkata
 const getWeatherForKolkata = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
       .then(response => response.json())
       .then(response => {
         
         document.getElementById('cloud_pct_kolkata').textContent = response.cloud_pct;
         document.getElementById('feels_like_kolkata').textContent = response.feels_like+"°";
         document.getElementById('humidity_kolkata').textContent = response.humidity+"%";
         document.getElementById('max_temp_kolkata').textContent = response.max_temp+"°C";
         document.getElementById('min_temp_kolkata').textContent = response.min_temp+"°C";
         document.getElementById('sunrise_kolkata').textContent = response.sunrise;
         document.getElementById('sunset_kolkata').textContent = response.sunset;
         document.getElementById('temp_kolkata').textContent = response.temp+"°C";
         document.getElementById('wind_degrees_kolkata').textContent = response.wind_degrees+"°";
         document.getElementById('wind_speed_kolkata').textContent = response.wind_speed+" Km/hr";
         const sunriseTime = new Date(response.sunrise * 1000);
         const sunsetTime = new Date(response.sunset * 1000);

         document.getElementById('sunrise_kolkata').textContent = formatTimeWithap(sunriseTime);
         document.getElementById('sunset_kolkata').textContent = formatTimeWithap(sunsetTime);
       })
       .catch(err => console.error(err));
   };
   const formatTimeWithap = (time) => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours ? hours : 12; 
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};
   
   getWeatherForKolkata();

   // weather for lucknow
 const getWeatherForLucknow = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
       .then(response => response.json())
       .then(response => {
         
         document.getElementById('cloud_pct_lucknow').textContent = response.cloud_pct;
         document.getElementById('feels_like_lucknow').textContent = response.feels_like+"°";
         document.getElementById('humidity_lucknow').textContent = response.humidity+"%";
         document.getElementById('max_temp_lucknow').textContent = response.max_temp+"°C";
         document.getElementById('min_temp_lucknow').textContent = response.min_temp+"°C";
         
         document.getElementById('temp_lucknow').textContent = response.temp+"°C";
         document.getElementById('wind_degrees_lucknow').textContent = response.wind_degrees+"°";
         document.getElementById('wind_speed_lucknow').textContent = response.wind_speed +" Km/hr";

         
         const sunriseTime = new Date(response.sunrise * 1000);
         const sunsetTime = new Date(response.sunset * 1000);

         document.getElementById('sunrise_lucknow').textContent = formatTimeWithampm(sunriseTime);
         document.getElementById('sunset_lucknow').textContent = formatTimeWithampm(sunsetTime);
       })
       .catch(err => console.error(err));
   };
   
   const formatTimeWithampm = (time) => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours ? hours : 12; 
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};
   
   getWeatherForLucknow();

   // weather for jammu and kashmi
   const getWeatherForJammuAndKashmir = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Srinagar,Jammu%20and%20Kashmir', options)
       .then(response => response.json())
       .then(response => {
         document.getElementById('cloud_pct_jk').textContent = response.cloud_pct;
         document.getElementById('temp_jk').textContent = response.temp + "°C";
         document.getElementById('feels_like_jk').textContent = response.feels_like + "°";
         document.getElementById('humidity_jk').textContent = response.humidity + "%";
         document.getElementById('min_temp_jk').textContent = response.min_temp + "°C";
         document.getElementById('max_temp_jk').textContent = response.max_temp + "°C";
         document.getElementById('wind_speed_jk').textContent = response.wind_speed + " Km/hr";
         document.getElementById('wind_degrees_jk').textContent = response.wind_degrees + "°";

         
         const sunriseTime = new Date(response.sunrise * 1000);
         const sunsetTime = new Date(response.sunset * 1000);

         document.getElementById('sunrise_jk').textContent = formatTimeWithAMPM(sunriseTime);
         document.getElementById('sunset_jk').textContent = formatTimeWithAMPM(sunsetTime);
       })
       .catch(err => console.error(err));
};


const formatTimeWithAMPM = (time) => {
  let hours = time.getHours();
  const minutes = time.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours ? hours : 12; 
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};

getWeatherForJammuAndKashmir();


// weather for haryana
const getWeatherForHaryana = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=haryana', options)
       .then(response => response.json())
       .then(response => {
         document.getElementById('cloud_pct_haryana').textContent = response.cloud_pct;
         document.getElementById('temp_haryana').textContent = response.temp + "°C";
         document.getElementById('feels_like_haryana').textContent = response.feels_like + "°";
         document.getElementById('humidity_haryana').textContent = response.humidity + "%";
         document.getElementById('min_temp_haryana').textContent = response.min_temp + "°C";
         document.getElementById('max_temp_haryana').textContent = response.max_temp + "°C";
         document.getElementById('wind_speed_haryana').textContent = response.wind_speed + " Km/hr";
         document.getElementById('wind_degrees_haryana').textContent = response.wind_degrees + "°";

        
         const sunriseTime = new Date(response.sunrise * 1000); // Convert from seconds to milliseconds
         const sunsetTime = new Date(response.sunset * 1000); // Convert from seconds to milliseconds
         
         document.getElementById('sunrise_haryana').textContent = formatTimeWithAmPm(sunriseTime);
         document.getElementById('sunset_haryana').textContent = formatTimeWithAmPm(sunsetTime);
       })
       .catch(err => console.error(err));
};


const formatTimeWithAmPm = (time) => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours ? hours : 12; 
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};


getWeatherForHaryana();





































