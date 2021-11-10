import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
export default function Home() {
    const [RandomInfo, setRandomInfo] = useState({})
    function randomInfoFUNCTION() {
        axios.get('https://api.quotable.io/random')
        .then((response)=> {
            setRandomInfo(response['data'])
          console.log(response['data']);
        })
    }
 useEffect(() => {
  randomInfoFUNCTION()
}, [])

    return (
      <>
        <nav>
        
         <h2> <Link to="/">Home</Link></h2>
         <h2> <Link to="/todo">Todo</Link></h2>
        </nav>
        <div className="container">

    
        <table className="table">
  <thead>
    <tr>
      <th >ID: {RandomInfo._id}</th>
      <th >Author: {RandomInfo.author}</th>

    </tr>
  </thead>
  <tbody>
    <tr>

      <th>Content:</th>
      <td>{RandomInfo.content}</td>
    </tr>
    <tr>
      <th >Date Add:</th>
      <td>{RandomInfo.dateAdded}</td>
 
    </tr>
    <tr>
      <th >Date Modified</th>
      <td>{RandomInfo.dateModified}</td>
    </tr>
  </tbody>

</table>
  <div className="tB">
  <button onClick={()=>randomInfoFUNCTION()} className="btn btn-primary">Generate</button>
  </div>
</div>
      </>
    );
  }
 
 