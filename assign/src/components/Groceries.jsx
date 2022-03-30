import  { React,useEffect,useState } from 'react'
import axios from "axios"

export const Groceries = () => {
const [text,setText]=useState("")
const [groceries,setgroceries]=useState([])
const [page,setPage]=useState(1)




useEffect(()=>{
  getdata()
},[page])


const getdata=()=>{
  axios.get(`http://localhost:8080/groceries?_limit=3&_page=${page}`).then(res=>{
    setgroceries(res.data)
  })
}
  return (

    <div>
      <h1>Groceries</h1>
      <h1></h1>
      <input type="text" onChange={(e)=>{
       setText(e.target.value)
      }} />
      <button onClick={()=>{
        fetch( "http://localhost:8080/groceries",{
          method:"POST",
          body:JSON.stringify({title:text,purchased:false}),
          headers:{
            "content-type":"application/json"
          }
          
        }).then(()=>{
          getdata()
        })
      }}>Add more</button> 
  
{groceries.map((g)=>
  <div key={g.id}>{g.title}</div>
)}
 
 <button onClick={()=>{
  setPage(page+1)
 }}>Next</button>

 <button onClick={()=>{
   setPage(page-1)
 }}>Previous

 </button>
    </div>
  )
}

/*

*/