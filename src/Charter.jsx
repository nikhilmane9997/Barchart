import React, { Component, useState } from "react";
import { Bar } from "react-chartjs-2";

export default function Charter() {
const [one, setone] = useState()
const [two, settwo] = useState(2015)
const [labeldata, setlabeldata] = useState(65)
const [update, setupdate] = useState({
  val:[],
  ind:[]
})

const data = {
    labels: [2010,2011,2012,2013,2014,2015,2016],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [labeldata, 59, 80, 81, 56, 60, 70],
      },
    ],
    options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
  };

 

  
// console.log(a)
  
  
  function addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
          dataset.data.push(data);
      });
      chart.update();
  }

//   let updaters = []
//   data.labels.map((v,index)=>{
//     setupdate(v)
//   })
  
  function removeData(chart) {
      chart.data.labels.pop();
      chart.data.datasets.forEach((dataset) => {
          dataset.data.pop();
      });
      chart.update();
  }

  const HandleOne = (e) => {
    setone(e.target.value)  
}
const HandleTwo = (e) => {
    settwo(e.target.value) 
}
// console.log(update.val,update.ind)
// console.log(data.labels.includes(2013))
  return (
    <>
      <div>
      
  
      
        <h2>Bar Chart</h2>
        <center><input type="text" onChange={HandleOne} placeholder="enter values"/>
        <input type="text" onChange={HandleTwo} placeholder="enter year"/>
        <button  onClick={
            ()=>{
                if(Number(two) === data.labels[0] ){
                    setlabeldata(Number(data.datasets[0].data[0]) + Number(one))
                }
            }
        }>Submit</button></center>
        {/* {one}{two} */}
        <br/>
        <Bar data={data} height="100vh"/>
      </div>
    </>
  );
}