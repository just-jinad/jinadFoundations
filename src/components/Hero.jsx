import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aim from './Aim';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Hero = () => {
  
  const [user, setUser] = useState("")

    let url = "https://www.boredapi.com/api/activity";

    const test =(e)=>{
      axios.get(url).then((data)=>{
        // console.log(data);
        let info = data.data

        
        // console.log(info);
        console.log(info.activity);
      }).catch((err)=>{
        console.log(err);
      })
    }
    
    useEffect(() => {
      AOS.init({
       duration: 4000, })
   }, [])
  return (
    <>



    
        <div className=' row  container-fluid mx-auto mt-3'>
        
        <h1 style={{fontSize:"27px",}} className='  introOne animate__animated animate__bounce fw-bolder'>Hello and Welcome to JustJinad Foundations.....</h1><br />
        <div className='user-lis col-md-6 animate__animated animate__fadeInUp'>
        <p className='fw-bold'>
        "Just Jinad Foundations is a dedicated blog website with a mission to empower children through education, aligning closely with the United Nations Sustainable Development Goals (SDGs), particularly SDG 4: Quality Education. Focused on delivering valuable insights into educational materials, the foundation strives to illuminate the path to knowledge for young minds."</p>

        <p >
        As a beacon of educational enlightenment, Just Jinad Foundations aspires to contribute to a future where every child, regardless of background, has the tools and motivation to unlock their full potential. By nurturing a generation of lifelong learners, the foundation aims to create a positive impact that extends far beyond the digital realm of its blog, shaping the leaders, thinkers, and innovators of tomorrow, in line with the transformative vision of SDG 4."
        </p>
      <div className='d-flex justify-content-around mt-4 mb-3'>
        <button className='btn btn-outline-warning bg-warning text-white' ><Link to={"/signup"} className='text-decoration-none text-white fw-bold'>Sign Up</Link> </button>
        <button className='btn btn-outline-success bg-success text-white' ><Link to={"/login"} className='text-decoration-none text-white fw-bold'>Login</Link> </button>
      </div>
        </div>

        
        <img id='imageOne' src="https://i.pinimg.com/564x/c4/90/7a/c4907a3f5d5579a43759e1d634b28b17.jpg" alt="" className='  col-md-6 '/>

        </div>



    <div className='mt-5 p-5 ' style={{backgroundColor:"#eff2e4", fontFamily:"cursive"}}>
      
      <h2 className='text-center text-warning'>What we do!</h2>
      <h5 className='text-center fw-bold'>Make a Difference, Create Impact, Transform Lives</h5>
      <p className='text-center  '>Create impact, change the world by sharing ideas and dreams</p>
      <p className='text-center   fw-bold'>Nurturing the Dreams of African Children..</p>
    </div>

      
    <Aim/>
    <Footer/>
























    {/* <marquee behavior="" direction="">  <div className='fw-bold'>Hello welcome to boredom killer</div></marquee> */}
        {/* <div className='mx-auto p-5 user-list w-75 mt-5'>
    <div>{user}</div>
          <div className='mx-auto p-5 user-list '>
        <input type="text"  placeholder='Enter Name' className='form-control my-3' value={user} onChange={(e)=> setUser(e.target.value)}/>
        <button className='btn btn-outline-warning fw-bolder' onClick={test}>Get suggestion</button>

          </div>
        </div> */}

       
    </>
  )
}

export default Hero