import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { postApi } from '../Services/Services';

const AddMovie = () => {
  const navigate=useNavigate()
  const[values,setValues]=useState({name:"",description:"",imgUrl:[],trailerUrl:[]});
  const [imgUpload, setImgUpload] = useState(
    "https://cdn2.vectorstock.com/i/1000x1000/35/71/profile-icon-with-add-sign-vector-20383571.jpg"
  );

  const imgHandler = (e) => {
    const file = new FileReader();
    file.onload = () => {
      if (file.readyState === 2) {
        setImgUpload(file.result);
      }
    };
    file.readAsDataURL(e.target.files[0]);
  };

 
  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    values.imgUrl.push(imgUpload);
    postApi(values);
    navigate('/movies')
  }
  return (
    <>
    <Header/>
        <div className='movie-wrapper movie-list container'>
          <h2>Add Movie</h2>
         <form onSubmit={handleSubmit}>
         <div className='row'>
          <div className='col-12 col-md-4'>
            <span>Movie Name</span>
            <div className='custom-input'>
              <input type="text" onChange={handleChange} name="name"/>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <span>Movie description</span>
            <div className='custom-input'>
              <textarea placeholder='enter Description' onChange={handleChange} name="description"></textarea>
             
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <label>Movie Image</label>
          <div className="image-add">
                  <input
                    type="file"
                    id="input"
                    className="img-upload"
                    accept="image/*"
                    onChange={imgHandler}
                  />
                  <label htmlFor="input">
                    {" "}
                    <span className="image-add">Add Image</span>
                  </label>
                </div>
          </div>
          <div className='col-12 col-md-4'>
            <label>Trailer URL</label>
            <div className='custom-input'>
              <input type="text" placeholder='Enter trailer Url' onChange={handleChange} name="trailerUrl"/>
            </div>
          </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className='action-buttons text-center my-3'>
                  <button className='btn btn-success' type='submit' >Add Movie</button>
                </div>
              </div>
            </div>
         </form>

        </div>
        <Footer/>
    </>
  )
}

export default AddMovie