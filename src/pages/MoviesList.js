import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const MoviesList = () => {
  const[movies,setMovies]=useState([]);
  const [searchName, setsearchName] = useState("");
  const handleSearch = (e) => {
    setsearchName(e.target.value);
  };
  const navigate=useNavigate()
 useEffect(()=>{
  const fetchData=async()=>{
    await axios.get("http://localhost:8001/movies").then(res=>setMovies(res.data)).catch(e=>console.log(e));
  }
  fetchData();
 },[]);
 const handleDelete=(id)=>{
  console.log(id);
  axios.delete(`http://localhost:8001/movies/${id}`);
  window.location.reload(false);
 }
const handleEdit=(id)=>{
navigate(`/editmovie/${id}`)

}
const handleTrailer=(id)=>{
  console.log(id);
  navigate(`/trailer/${id}`)
  
  }
  const handleDetails=(id)=>{
    console.log(id);
    navigate(`/details/${id}`)
    
    }
  return (
 <>
 <Header/>
 <div class="movie-wrapper">
      <div className='container'>
<div className='d-flex justify-content-between align-items-center'>
<h2>Latest Movies</h2>
<Link to='/addmovie'><button className='btn btn-info'>Add Movie</button></Link>
</div>
<div className='custom-search mb-5'>
  <input placeholder='Enter Movie' type="text" onChange={handleSearch}/>
</div>
<div className='row m-0'>
  {
     movies
     .filter((data) => {
       if (
         searchName == ""
        
       ) {
         return data;
       } else if (
         data.name
           .toLowerCase()
           .includes(searchName.toLowerCase())
       
          
       ) {
         return data;
       }
     }).map((item,index)=>{
      return(
        <div key={index} className='col-4'>
        <div className='card p-2'>
        <Card>
        <div className='img-wrapper'onClick={()=>{handleDetails(item.id)}}>
        <Card.Img variant="top" src={item.imgUrl} alt="img"/>
        </div>
        </Card>
        <h4>{item.name}</h4>
        <div className='description'>
          <p>{item.description}</p>
        </div>
         <div className='d-flex my-2'>
          <div><button className='btn btn-warning' onClick={()=>{handleTrailer(item.id)}} >Watch Full trailer</button></div>
          <div className='btn btn-secondary mx-2'><AiOutlineEdit onClick={()=>{handleEdit(item.id)}}/></div>
            <div className='btn btn-danger mx-2'><AiOutlineDelete onClick={()=>{handleDelete(item.id)}}/></div>
          </div>
        </div>
      </div>
      )
    })
  }
 
</div>
    </div>
  </div>
  <Footer/>
 </>
  )
}

export default MoviesList