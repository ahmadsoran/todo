import React from 'react'

function Person() {
   let name = [
       'ahmad',
       'hama',
       'aso'
   ]
    return (
       <div>
           <ul>
               
             {name.map((user)=>{
                return <li> {user}</li>
             })}
               
           </ul>
       </div>
    )
}

export default Person
