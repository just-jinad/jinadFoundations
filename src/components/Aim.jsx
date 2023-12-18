import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Aim = () => {

  useEffect(() => {
     AOS.init({
      duration: 6000, })
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

    <div className="accordion mt-5" id="accordionExample" data-aos="fade-up" data-aos-duration="2000">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     Aim One
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <hr />
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Aim Two
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <hr />
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Aim Three
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
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
