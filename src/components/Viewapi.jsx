import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Viewapi = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/blogs/${id}`)
      .then((response) => {
        console.log(response.data);
        const blogWithId = response.data.find(item => item.id === Number(id));
        setBlog(blogWithId);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);
    
    console.log(blog);

  return (
    <>
    <div>
      {blog ? (
        <>
          <img src={blog.image} alt="" style={{height:"60px"}}/>
          <p>Title: {blog.title}</p>
          <p>Author: {blog.author}</p>
          <p>Content: {blog.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    
    </div>
    </>
  )
}

export default Viewapi