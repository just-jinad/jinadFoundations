import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Aim = () => {

  useEffect(() => {
     AOS.init({
      duration: 4000, })
  }, [])
  


    
  return (
    <>
   



    <div className="parent user-li" >

      <div>
      <img data-aos="fade-up" data-aos-duration="2000"  id="arrowOne" className='mt-5' src="/images/arrowOneRemoved.png" alt="" />
    </div>

      <div  data-aos="fade-up" data-aos-duration="2000" className=" row container mt-5 mx-auto">
        <div className="col-md-6 mt-5" style={{fontFamily:"Times New roman"}}>

        <p className="fw-bold fst-italic text-black">
          
         Welcome to Just Jinad Foundations, where our mantra is simple yet powerful: 'Create Impact, Transform Lives.' We believe in the profound effect of sharing ideas and dreams to bring about positive change in the world.
         </p>
         <br />
         <p >

         At the heart of our mission is a dedication to nurturing the dreams of African children. We recognize the immense potential within each young mind and aim to provide a platform where these dreams can take root, flourish, and impact not only individual lives but entire communities.
          <br /><br /><br />

          In our pursuit of making a difference, we invite you to join us on this journey of inspiration and empowerment. By fostering a community that values the exchange of ideas and the pursuit of dreams, we envision a future where every shared aspiration becomes a catalyst for meaningful change.
         </p>
        </div>

      <div className="col-md-6">
        <img id='smilingChildren' src="https://i.pinimg.com/564x/06/47/c2/0647c2cd711b037ba2d522a79e92bf40.jpg" alt="" className="container-fluid" />
      </div>
      </div>
    </div>

      






      <div  data-aos="fade-up" data-aos-duration="2000" className=" row container mt-5 mx-auto">
      <div className="col-md-6">
        <img id='smilingChildren' src="https://i.pinimg.com/564x/0e/34/21/0e3421b2a325a6d5fce4048d79a8690d.jpg" alt="" className="container-fluid" />
      </div>
        <div className="col-md-6 mt-5" style={{fontFamily:"Times New roman"}}>

        Our mission goes beyond mere education; it is about fostering a community that encourages individuals to dream, aspire, and contribute meaningfully to the world.




         <br /><br /><br />

    
         In our pursuit of change, we believe in the transformative power of shared ideas and collective dreams. Just Jinad Foundations serves as a catalyst, providing a platform where aspirations take root and grow into real-world impact. Together, we aim to inspire and empower, sparking a ripple effect that reaches far beyond individual accomplishments.
          <br /><br /><br />

          "Join us on this journey of making a difference, where every idea shared and dream nurtured becomes a building block for positive change. Together, we can shape a future where the dreams of individuals, especially those of African children, are not only valued but also supported to blossom into reality." 
  
        </div>

      </div>
      
    </>
  );
};

export default Aim;
