import axios from "axios";
import React, { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")

    const sendResource =()=>{
        // let url = "http://localhost:4000/api/blogs"
     const resource = {title:"data", body:"lorem", author:"data"}
     axios.post("http://localhost:4000/api/blogs", resource, {
        headers: {
            'Content-Type': 'application/json',
          },
     }).then((res)=>{
        console.log(res);
     }).catch((err)=>{
        console.log(err);
     })






    //  .then((res)=>{
    //     console.log("data", res);

    //  }).catch((err)=>{
    //     console.log("error", err);
    //  })
        // axios.post(url,resource, {
        
        //     // headers: {  'Content-Type': 'application/json'},
          
        // }).then((response)=>{
        //     console.log(response);
        //     console.log("Added successfully");
        // }).catch((err)=>{
        //     console.log(err);
        // })
    }
  return (
    <>
      <div className="container border rounded shadow-lg p-5 mt-4 ">
        <h4 className="text-center text-decoration-underline">Create Blog</h4>
        <label htmlFor="">Resource Title</label>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control my-3" />

        <label htmlFor="">Resource body</label>
        <input type="text" value={body} onChange={(e)=> setBody(e.target.value)} className="form-control my-3" />

        <label htmlFor="">Resource Author</label>
        <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)} className="form-control my-3" />

        <button onClick={sendResource} className="btn btn-warning fw-bold text-white">Create</button>
      </div>
    </>
  );
};

export default Create;
