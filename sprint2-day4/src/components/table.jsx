
export const Table=({list})=>{
    return(
        <>
        <table className="table" >
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Status</th>
                
            </tr>
            
            {list.map((e,index)=>{
              return  <tr key={e.id}>
                     <td >{e.name}</td>
                     <td>{e.age}</td>
                     <td>{e.address}</td>
                     <td>{e.department}</td>
                     <td>{e.salary}</td>
                     <td>{e.status}</td>
                </tr>
                 
           })}
            
        </table>
       </>
    )
}