import axios from 'axios';
axios.defaults.baseURL="http://localhost:8001"
export const postApi=(movie)=>{
    axios.post("/movies",movie).then(res=>console.log(res.data)).catch((e)=>{console.log(e)})
}
// export const getApi=async ()=>{
//    return await axios.get("/movies").then(res=>{return (res.data)}).catch((e)=>{console.log(e)})
// }
