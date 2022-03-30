import axios from "axios"
import { useState,useEffect } from "react"
import { Table } from "./table";
export const EmpolyForm=()=>{
    const[form,setFrom]=useState({
        name:"",
        age:"",
        address:"",
        department:"",
        status:"",
        salary:""
 })
const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
     setIsChecked(!isChecked);
    };
const hendalechange=(e)=>{
    let status;
    if(isChecked){
        status="Married"
    }
    if(!isChecked){
        status="Single"
    }
 const{id,value}=e.target
       setFrom({
           ...form,
           [id]:value,
           status
           })
     }
 const Submitform=(e)=>{
       e.preventDefault()
        axios.post("http://localhost:3000/employeeData",form).then((e)=>{
            alert("Thank you for fille details")
            setFrom({
                name:"",
                age:"",
                address:"",
                department:"",
                salary:"",
            })
            getData()
        })
     }
const[list,setlist]=useState([])
   useEffect(()=>{
        getData()
    },[])
const getData=()=>{
        axios.get("http://localhost:3000/employeeData").then((res=>{
            setlist(res.data)
        }))
    }
 return(
        <>
        <h1>Employee Details Form</h1>
        <form onSubmit={Submitform}>
         <label>Name:-</label>
         <input type="text" id="name" placeholder="Empolyee Name" onChange={hendalechange} value={form.name} required/>
         <br />
         <label>Age:-</label>
         <input type="number" id="age" placeholder="Empolyee Age" onChange={hendalechange} value={form.age} required/>
          <br />
          <label>Address:-</label>
         <input type="text" id="address" placeholder="Empolyee Address" onChange={hendalechange} value={form.address} required/>
          <br />
          <label>Department:-</label>
          <select name="" id="department" onChange={hendalechange} value={form.department}>
          <option>------------</option> 
             <option>Administration</option> 
             <option>Operations</option> 
          </select>
          <br />
          <label>Marital State :-</label>
          <input
          type="checkbox"
          id="status"
          name="married"
          value="Married"
          checked={isChecked}
          onChange={handleOnChange}
        />
        Married
        <input
          type="checkbox"
          id="status"
          name="single"
          value="Single"
          checked={!isChecked}
          onChange={handleOnChange}
        />
        Single
        <br />
        <label>Current Salary:-</label>
          <input type="number" id="salary" placeholder="current salary(INR)" onChange={hendalechange} value={form.salary} required />
          <br />
         
       <input type="submit" value="Submit Details"  className="submitbtn"/>
</form>
        <Table list={list}/>
         </>
    )
}