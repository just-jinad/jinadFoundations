import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Datafile = () => {
    const [apiData, setApidata] = useState([])
    useEffect(() => {
      axios.get("http://localhost:4000/api/blogs").then((response)=>{
        
        console.log(response);
        setApidata(response.data)
      }).catch((err)=>{
        console.log(err);
      })
    }, [])
    
  return (
    <>
    {/* <div>
        hello to the data page{data}
    </div> */}

    <div>
      <h5>Blog List</h5>
      <ul>
        {apiData.map(blog => (
          <li key={blog.id}>
            <Link  to={`/blogs/${blog.id}`}>
            <h6>{blog.title}</h6>
            <p>Author: {blog.author}</p>  
            </Link>
         
          </li>
        ))}
      </ul>
     
    </div>
    </>
  )
}

export default Datafile