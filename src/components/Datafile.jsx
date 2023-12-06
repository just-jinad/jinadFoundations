import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Datafile = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get("http://localhost:4000/api/blogs").then((response)=>{
        console.log(response);
        setData(response.data)
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
      <h1>Blog List</h1>
      <ul>
        {data.map(blog => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Author: {blog.author}</p>  
            <p>Tittle: {blog.tittle}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Datafile