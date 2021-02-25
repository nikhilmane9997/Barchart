import React, { Component, useState } from "react";
import { Bar } from "react-chartjs-2";

export default function Charter() {
const [one, setone] = useState()
const [two, settwo] = useState(2015)
const [labeldata, setlabeldata] = useState(65)
const [labeldata1, setlabeldata1] = useState(59)
const [labeldata2, setlabeldata2] = useState(80)
const [labeldata3, setlabeldata3] = useState(81)
const [labeldata4, setlabeldata4] = useState(56)
const [labeldata5, setlabeldata5] = useState(60)
const [labeldata6, setlabeldata6] = useState(70)
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
        data: [labeldata, labeldata1, labeldata2, labeldata3, labeldata4, labeldata5, labeldata6],
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
                } else  if(Number(two) === data.labels[1] ){
                    setlabeldata1(Number(data.datasets[0].data[1]) + Number(one))
                } else  if(Number(two) === data.labels[2] ){
                    setlabeldata2(Number(data.datasets[0].data[2]) + Number(one))
                } else  if(Number(two) === data.labels[3] ){
                    setlabeldata3(Number(data.datasets[0].data[3]) + Number(one))
                } else  if(Number(two) === data.labels[4] ){
                    setlabeldata4(Number(data.datasets[0].data[4]) + Number(one))
                } else  if(Number(two) === data.labels[5] ){
                    setlabeldata5(Number(data.datasets[0].data[5]) + Number(one))
                } else  if(Number(two) === data.labels[6] ){
                    setlabeldata6(Number(data.datasets[0].data[6]) + Number(one))
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