import React, { useEffect, useState } from 'react'
import {Bar, Doughnut} from 'react-chartjs-2'
import {Chart,ArcElement,Tooltip,Legend,CategoryScale,LinearScale,BarElement} from 'chart.js'
import axios from 'axios'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
// import Chart from 'chart.js/auto';
Chart.register(
  ArcElement,Tooltip,Legend,CategoryScale,LinearScale,BarElement
)

const Charts= () => {
    const[chartValues,setChartValues]=useState({datasets: [],labels:[]});
    const[chartValuesBar,setChartValuesBar]=useState({datasets: [],labels:[]});
     useEffect(()=>{
         const chartResponse=async()=>{
             await axios.get("http://localhost:8001/reports")
             .then(resp=>resp.data).then(response=>{
                const arr=[...response];
                const res = [...arr.reduce((acc, curr) => {

                    const { location } = curr;
                    const grouped = acc.get(location);
                    if(!grouped) {
                      acc.set(location, { ...curr });
                    } 
                    else {
                      acc.set(location, { ...grouped, saved: Number(grouped.saved) + Number(curr.saved) })
                    }

                    return acc

                  }, new Map)
                  .values()
                ];
               
                const data=[];
                const label=[];
                for (var i of res){
                  label.push(i.location);
                  data.push(i.saved)
                }

                setChartValues({
                  datasets: [{
                            data:data,
                            backgroundColor:[ "#CA9C31",'#854095','#E37E06','#1170CB','#D9B648']
                        }], 
                  labels:label,
                
                })
             }).catch(error=>console.log("error",error))
            }  
        chartResponse();  
        const chartResponseTwo=async()=>{
            await axios.get("http://localhost:8001/reportsTwo")
            .then(resp=>resp.data).then(response=>{
               const arr=[...response];
               const res = [...arr.reduce((acc, curr) => {

                   const { location } = curr;
                   const grouped = acc.get(location);
                   if(!grouped) {
                     acc.set(location, { ...curr });
                   } 
                   else {
                     acc.set(location, { ...grouped, saved: Number(grouped.saved) + Number(curr.saved) })
                   }

                   return acc

                 }, new Map)
                 .values()
               ];
              
               const data=[];
               const label=[];
               for (var i of res){
                 label.push(i.location);
                 data.push(i.saved)
               }

               setChartValuesBar({
                 datasets: [{
                           data:data,
                           backgroundColor:[ "#CA9C31",'#854095','#E37E06','#1170CB','#D9B648']
                       }], 
                 labels:label,
               
               })
            }).catch(error=>console.log("error",error))
           }  
       chartResponseTwo();  
    },[])
  return (
    <>
    <Header/>
<div className='movie-wrapper container'>
<div className='row'>
    <div className='col-12 col-md-6'>
    <Doughnut data={chartValues} height={400} width={600}/>
    </div>
    <div className='col-12 col-md-6'>
    <Bar data={chartValuesBar} />
    </div>
</div>
</div>
<Footer/>
    </>
  )
}

export default Charts