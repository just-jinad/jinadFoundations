import axios from "axios";
import React, { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")

    const sendResource =(e)=>{
        let url = "http://localhost:4000/api/blogs"
        console.log(content);
        const userInput = {
            title:title,
            content:content,
            author:author
        }
        console.log(userInput);
        axios.post(url, userInput)
        .then((response)=>{
            console.log(response.data);
        }).catch((err)=>{
            console.log("err creating blog", err);
        })
   
    }
  return (
    <>
      <div className="container border rounded shadow-lg p-5 mt-4 ">
        <h4 className="text-center text-decoration-underline fw-bold">Create Resource</h4>
        <label htmlFor="">Resource Title</label>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control my-3" />

        <label htmlFor="">Resource body</label>
        <input type="text" value={content} onChange={(e)=> setContent(e.target.value)} className="form-control my-3" />

        <label htmlFor="">Resource Author</label>
        <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)} className="form-control my-3" />

        <button onClick={sendResource} className="btn btn-warning fw-bold text-white">Create</button>
      </div>
    </>
  );
};

export default Create;
