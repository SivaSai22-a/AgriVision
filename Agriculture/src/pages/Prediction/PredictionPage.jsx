import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PredictionPage.css";

const API_URL = "http://127.0.0.1:5000";


function PredictionPage() {


const navigate = useNavigate();


const [location,setLocation] = useState("");

const [weather,setWeather] = useState(null);

const [result,setResult] = useState("");

const [recommendation,setRecommendation] = useState("");

const [loading,setLoading] = useState(false);



const [formData,setFormData] = useState({

    rainfall:"",
    temperature:"",
    humidity:"",
    soil_quality:"",
    crop:"",
    soil_type:"",
    fertilizer:""

});




const handleChange=(e)=>{


setFormData({

    ...formData,

    [e.target.name]:e.target.value

});


};






// ==========================
// WEATHER
// ==========================


const getWeather = async()=>{


if(!location){

alert("Please enter farm location");

return;

}



try{


const response = await fetch(

`${API_URL}/weather`,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

city:location

})

}

);




const data = await response.json();




if(!response.ok){

alert(data.error || "Weather not found");

return;

}




setWeather(data);



setFormData(prev=>({

...prev,

rainfall:data.rainfall,

temperature:data.temperature,

humidity:data.humidity

}));



}

catch(error){

console.log(error);

alert("Weather connection failed");

}



};







// ==========================
// PREDICTION
// ==========================


const predict = async()=>{


// GET LOGIN USER ID

const user_id = Number(localStorage.getItem("user_id"));



if(!user_id){

alert("Please login first");

navigate("/login");

return;

}



if(

formData.rainfall === "" ||

formData.temperature === "" ||

formData.humidity === ""

){

alert("Please enter weather details first");

return;

}




if(

!formData.crop ||

!formData.soil_type ||

!formData.fertilizer

){

alert("Please select crop, soil type and fertilizer");

return;

}





try{


setLoading(true);

setResult("");

setRecommendation("");






const response = await fetch(

`${API_URL}/predict`,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

rainfall:Number(formData.rainfall),

temperature:Number(formData.temperature),

humidity:Number(formData.humidity),

soil_quality:Number(formData.soil_quality),

crop:formData.crop,

soil_type:formData.soil_type,

fertilizer:formData.fertilizer,

user_id:user_id

})


}

);




const data = await response.json();



if(!response.ok){


setResult(

"❌ "+(data.error || "Prediction failed")

);


return;

}




setResult(

`🌾 Predicted Yield: ${data.prediction} Tons / Hectare`

);




setRecommendation(

`Maintain proper irrigation and use ${formData.fertilizer} fertilizer. Monitor weather conditions regularly for better crop production.`

);



}



catch(error){


console.log(error);


setResult(

"❌ Backend Connection Error"

);


}



finally{


setLoading(false);


}



};
return(


<div className="prediction-page">


<div className="prediction-card">



<h1>

🌾 AI Smart Farming Prediction

</h1>



<p className="subtitle">

AI powered crop yield prediction with weather intelligence

</p>





{/* LOCATION */}


<div className="input-box">


<label>

📍 Farm Location

</label>



<input

type="text"

placeholder="Enter city name"

value={location}

onChange={(e)=>setLocation(e.target.value)}

/>



<button

className="weather-btn"

onClick={getWeather}

>

🌦 Get Weather

</button>



</div>








{

weather &&

<div className="weather-card">


<h2>

🌦 Current Weather

</h2>


<p>

🌡 Temperature: {weather.temperature} °C

</p>


<p>

💧 Humidity: {weather.humidity} %

</p>


<p>

🌧 Rainfall: {weather.rainfall} mm

</p>



</div>

}








<div className="input-box">

<label>

🌧 Rainfall (mm)

</label>


<input

type="number"

name="rainfall"

value={formData.rainfall}

placeholder="Enter rainfall"

onChange={handleChange}

/>


</div>







<div className="input-box">


<label>

🌡 Temperature (°C)

</label>


<input

type="number"

name="temperature"

value={formData.temperature}

placeholder="Enter temperature"

onChange={handleChange}

/>


</div>







<div className="input-box">


<label>

💧 Humidity (%)

</label>


<input

type="number"

name="humidity"

value={formData.humidity}

placeholder="Enter humidity"

onChange={handleChange}

/>


</div>







<div className="input-box">


<label>

🌱 Soil Quality

</label>


<input

type="number"

name="soil_quality"

value={formData.soil_quality}

placeholder="Enter soil quality"

onChange={handleChange}

/>


</div>








<div className="input-box">


<label>

🌾 Crop

</label>


<select

name="crop"

value={formData.crop}

onChange={handleChange}

>


<option value="">

Select Crop

</option>


<option>Rice</option>

<option>Wheat</option>

<option>Corn</option>

<option>Sugarcane</option>

<option>Cotton</option>

<option>Barley</option>


</select>


</div>









<div className="input-box">


<label>

🪨 Soil Type

</label>


<select

name="soil_type"

value={formData.soil_type}

onChange={handleChange}

>


<option value="">

Select Soil

</option>


<option>Clay</option>

<option>Loamy</option>

<option>Sandy</option>

<option>Black</option>

<option>Red</option>

<option>Alluvial</option>


</select>


</div>









<div className="input-box">


<label>

🧪 Fertilizer

</label>


<select

name="fertilizer"

value={formData.fertilizer}

onChange={handleChange}

>


<option value="">

Select Fertilizer

</option>


<option>Urea</option>

<option>DAP</option>

<option>NPK</option>

<option>Organic</option>

<option>Compost</option>

<option>Ammonium Sulphate</option>


</select>


</div>









<button

className="predict-btn"

onClick={predict}

>


{

loading

?

"🔄 Predicting..."

:

"🚀 Predict Yield"

}



</button>









{

result &&

<div className="result-card">

{result}

</div>


}









{

recommendation &&

<div className="ai-card">


<h2>

🤖 AI Farming Assistant

</h2>


<p>

{recommendation}

</p>


</div>


}









<button

className="dashboard-btn"

onClick={()=>navigate("/dashboard")}

>


📊 Open Dashboard


</button>







</div>


</div>


);


}



export default PredictionPage;