import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
const MoviesDetails = () => {
  const {id}=useParams();
  const[details,setDetails]=useState([]);
  useEffect(()=>{
      const fetchData=async ()=>{
          await axios.get(`http://localhost:8001/movies/${id}`).then(res=>setDetails(res.data)).catch(e=>console.log(e))
      }
      fetchData();
  },[]);
  return (
    <>
    <Header/>
    <div className='movie-wrapper container my-2'>
      <div className='row m-0'>
        <div className='col-6 d-flex justify-center align-items-center'>
          <div className='img-wrapper'>
            <img src={details.imgUrl} />
          </div>
        </div>
        <div className='col-6 movie-details'>
          <div className='name'>
            <span>Name:</span>
            <div>{details.name}</div>
          </div>
          <div className='name'>
            <span>Description:</span>
            <div>{details.description}</div>
          </div>
          <div className='name'>
            <span>Review:</span>
           {details.review&& <div>{details.review}</div>}
          </div>
        </div>
      </div>
      <div className='actions text-center my-3'>
        <Link to='/movies'><button className='btn btn-info'>back</button></Link>
      </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default MoviesDetails