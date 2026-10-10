import React, { useEffect, useState } from "react";

import {
  Bar,
  Pie,
  Line
} from "react-chartjs-2";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);



function Dashboard(){


const [history,setHistory] = useState([]);

const [loading,setLoading] = useState(true);




useEffect(()=>{


fetch("http://127.0.0.1:5000/history")


.then(res=>res.json())


.then(data=>{


setHistory(data);

setLoading(false);


})


.catch(err=>{


console.log(err);

setLoading(false);


});


},[]);






if(loading){

return(

<div className="loading">

🌱 Loading Dashboard...

</div>

)

}







if(history.length===0){

return(

<div className="empty">

<h1>
🌾 No Prediction Data
</h1>


<p>
Make predictions first
</p>


</div>

)

}






// =============================
// CALCULATIONS
// =============================


const totalPredictions = history.length;



const averageYield = (

history.reduce(

(sum,item)=>

sum + Number(item.predicted_yield),

0

)

/ history.length

).toFixed(2);






const bestCrop = history.reduce(

(best,item)=>

Number(item.predicted_yield) >

Number(best.predicted_yield)

?

item

:

best

);





const latest = history[0];





// =============================
// CROP DATA
// =============================


const cropYield={};


history.forEach(item=>{


if(!cropYield[item.crop]){

cropYield[item.crop]=[];

}


cropYield[item.crop].push(

Number(item.predicted_yield)

);


});




const cropLabels = Object.keys(cropYield);



const cropAverage = cropLabels.map(crop=>{


const values=cropYield[crop];


return (

values.reduce((a,b)=>a+b,0)

/ values.length

).toFixed(2);


});






// =============================
// CHARTS
// =============================



const yieldChart={


labels:cropLabels,


datasets:[{

label:"Average Yield",

data:cropAverage,

backgroundColor:"#4caf50",

borderRadius:20

}]

};






const weatherChart={


labels:

history.map(item=>item.crop),


datasets:[{


label:"Temperature °C",

data:

history.map(item=>item.temperature),


backgroundColor:"#ff9800"


}]


};







const rainfallChart={


labels:

history.map(item=>item.crop),


datasets:[{


label:"Rainfall mm",

data:

history.map(item=>item.rainfall),


backgroundColor:"#2196f3"


}]


};







const humidityChart={


labels:

history.map(item=>item.crop),


datasets:[{


label:"Humidity %",

data:

history.map(item=>item.humidity),


backgroundColor:"#00bcd4"


}]


};







const pieChart={


labels:cropLabels,


datasets:[{

data:

cropLabels.map(

crop=>

history.filter(

item=>item.crop===crop

).length

),


backgroundColor:[

"#4caf50",

"#2196f3",

"#ff9800",

"#e91e63",

"#9c27b0"

]


}]


};







const options={


responsive:true,


plugins:{


legend:{


labels:{


color:"white"

}


}


},


scales:{


x:{


ticks:{

color:"white"

}

},


y:{


ticks:{

color:"white"

}

}


}



};







return(


<div className="dashboard">



<style>{`


.dashboard{

min-height:100vh;

padding:40px;

background:

linear-gradient(

135deg,

#e8f5e9,

#ffffff

);

}


.title{

text-align:center;

font-size:45px;

color:#1b5e20;

font-weight:900;

}



.cards{

display:flex;

justify-content:center;

gap:20px;

flex-wrap:wrap;

margin:40px;

}



.card{

background:white;

padding:25px;

width:250px;

border-radius:25px;

text-align:center;

box-shadow:0 10px 30px #ccc;

}



.card h2{

font-size:35px;

color:#2e7d32;

}




.latest{

background:#1b5e20;

color:white;

padding:30px;

border-radius:30px;

max-width:700px;

margin:30px auto;

}



.chart{

background:#1b5e20;

padding:30px;

margin:40px auto;

max-width:800px;

border-radius:30px;

}



.chart h2{

color:white;

text-align:center;

}



table{

width:90%;

margin:40px auto;

background:white;

border-collapse:collapse;

}


th{

background:#2e7d32;

color:white;

padding:15px;

}


td{

padding:12px;

text-align:center;

border-bottom:1px solid #ddd;

}



.loading,.empty{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

font-size:30px;

}



`}</style>





<h1 className="title">

📊 Agriculture AI Dashboard

</h1>







<div className="cards">


<div className="card">

<h2>{totalPredictions}</h2>

<p>Total Predictions</p>

</div>




<div className="card">

<h2>{averageYield}</h2>

<p>Average Yield</p>

</div>





<div className="card">

<h2>{bestCrop.crop}</h2>

<p>Best Crop</p>

</div>




<div className="card">

<h2>{latest.predicted_yield}</h2>

<p>Latest Yield</p>

</div>


</div>







<div className="latest">


<h2>

🌾 Latest Prediction

</h2>


<p>
Crop: {latest.crop}
</p>


<p>
Soil: {latest.soil_type}
</p>


<p>
Fertilizer: {latest.fertilizer}
</p>


<p>
Temperature: {latest.temperature} °C
</p>


<p>
Humidity: {latest.humidity} %
</p>


<p>
Yield: {latest.predicted_yield} Tons/Hectare
</p>


</div>







<div className="chart">

<h2>
🌾 Crop Yield Analysis
</h2>


<Bar

data={yieldChart}

options={options}

/>


</div>






<div className="chart">

<h2>
🌡 Temperature Analysis
</h2>


<Bar

data={weatherChart}

options={options}

/>


</div>







<div className="chart">

<h2>
🌧 Rainfall Analysis
</h2>


<Bar

data={rainfallChart}

options={options}

/>


</div>







<div className="chart">

<h2>
💧 Humidity Analysis
</h2>


<Bar

data={humidityChart}

options={options}

/>


</div>







<div className="chart">

<h2>
🌱 Crop Distribution
</h2>


<Pie

data={pieChart}

/>


</div>








<h2 style={{textAlign:"center"}}>

📋 Prediction History

</h2>




<table>


<thead>

<tr>

<th>Date</th>

<th>Crop</th>

<th>Soil</th>

<th>Fertilizer</th>

<th>Yield</th>

</tr>

</thead>



<tbody>


{

history.map(item=>(


<tr key={item.id}>


<td>

{new Date(item.created_at).toLocaleDateString()}

</td>


<td>
{item.crop}
</td>


<td>
{item.soil_type}
</td>


<td>
{item.fertilizer}
</td>


<td>
{item.predicted_yield}
</td>


</tr>


))


}


</tbody>


</table>







</div>


);


}


export default Dashboard;