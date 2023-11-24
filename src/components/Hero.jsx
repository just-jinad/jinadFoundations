import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aim from './Aim';
import Footer from './Footer';

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



      <div className="user-list row  container-fluid">


        <p className='  introOne animate__animated animate__bounce'>Hello and Welcome to JustJinad Foundations.....</p>
        <div className='user-lis col-md-6 animate__animated animate__fadeInUp'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi nobis perferendis aspernatur fugiat ab temporibus totam enim cumque voluptatum!</p>

        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam numquam impedit hic itaque qui consectetur eum, rerum officia ab natus.
        </div>
      <div className='d-flex justify-content-around mt-4 mb-3'>
        <button className='btn btn-outline-warning bg-warning text-white'>Sign Up</button>
        <button className='btn btn-success '>Donate</button>
      </div>
        </div>

        
        <img id='imageOne' src="https://i.pinimg.com/564x/c4/90/7a/c4907a3f5d5579a43759e1d634b28b17.jpg" alt="" className='  col-md-6 '/>
      </div>

    <div>
      <img data-aos="fade-up" data-aos-duration="2000"  id="arrowOne" className='mt-5' src="/images/arrowOneRemoved.png" alt="" />
    </div>

    <div>
      <p className='text-center text-warning'>What we do</p>
      <h4 className='text-center fw-bold'>Make a Difference</h4>
      <p className='text-center fst-italic '>Make a Difference, Change the world through sharing of ideas and dreams!</p>
      <p className='text-center fst-italic '>Dream of an African child</p>
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