import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const EditMovie = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const[editvalues,setEditValues]=useState([])
    const[editMovie,setEditMovie]=useState([])
    useEffect(()=>{
        const fetchData=async ()=>{
            await axios.get(`http://localhost:8001/movies/${id}`).then(res=>setEditValues(res.data)).catch(e=>console.log(e))
        }
        fetchData();
    },[]);
const handleChange=(e)=>{
    setEditValues({...editvalues,[e.target.name]:e.target.value});
   
}
const handleEdit=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8001/movies/${id}`,editvalues).then(res=>console.log(res.data)).catch(e=>console.log(e))
navigate('/movies')

}
  return (
    <div>
        <Header/>
        <div className='movie-wrapper container'>
            <div className='header d-flex justify-content-between align-items-center mt-5'>
                <h4>Edit Movie</h4>
                <Link to='/movies'><button className='btn btn-info'>Back</button></Link>

            </div>
            <div className='row my-3'>
                <div className='col-12 col-md-4'>
                    <label>Movie Name</label>
                    <input type="text" name='name' placeholder='Enter name' onChange={handleChange} value={editvalues.name}/>
                </div>
                <div className='col-12 col-md-4'>
                    <label>Description</label>
                <textarea name='description' onChange={handleChange} placeholder='Write a Description' rows="5" value={editvalues.description} ></textarea>
                </div>
                <div className='col-12 col-md-4'>
                    <label>Review</label>
                   <textarea name='review' onChange={handleChange} placeholder='Write a review' rows="5"></textarea>
                </div>
                <div className='action text-center my-3'>
                    <button className='btn btn-info' onClick={handleEdit}>Update</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default EditMovie