import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Trailerpage = () => {
    const {id}=useParams();
    const[video,setVideo]=useState([]);
    useEffect(()=>{
        const fetchData=async ()=>{
            await axios.get(`http://localhost:8001/movies/${id}`).then(res=>setVideo(res.data)).catch(e=>console.log(e))
        }
        fetchData();
    },[]);
  return (
    <>
    <Header/>
    <div className='movie-wrapper container my-5'>
        <div className='row m-0'>
            <div className='video-wrapper'>
            <Iframe url={video.trailerUrl}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
            </div>
            <div className='actions text-center my-3'>
                <Link to='/movies'><button className='btn btn-info'>Back</button></Link>
            </div>
        </div>
    </div>
    <Footer/>
    </>
   
  )
}

export default Trailerpage