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
      <nav data-aos="zoom-in" data-aos-duration="2000" className=" container-fluid mt-5 d-flex justify-content-around align-items-center flex-wrap  animate__animated animate__fadeIn">
          <div className="card col-md-3 shadow-lg " id="aimImage" >
            <img   id="imageTwo" src="https://i.pinimg.com/564x/e3/5a/c0/e35ac0f5039877c38e6e49548072033e.jpg" className="card-img-top mx-auto" alt="..." />
            <div className="card-body">
              <p className="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card col-md-3  shadow-lg " id="aimImage2">
            <img   id="imageTwo" src="https://i.pinimg.com/564x/91/dd/dd/91dddd06ceef1c5734f8910b58280351.jpg" className="card-img-top mx-auto" alt="..." />
            <div className="card-body">
              <p className="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card col-md-3 shadow-lg " id="aimImage3">
            <img   id="imageTwo" src="https://i.pinimg.com/564x/82/75/ea/8275ea5e8c59e1f95401a6bd72566d41.jpg" className="card-img-top mx-auto" alt="..." />
            <div className="card-body">
              <p className="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className=" container-fluid d-flex justify-content-around align-items-center flex-wrap  animate__animated animate__fadeIn">
          <div className="card col-md-3 shadow-lg " id="aimImage4">
            <img   id="imageTwo" src="https://i.pinimg.com/564x/e3/5a/c0/e35ac0f5039877c38e6e49548072033e.jpg" className="card-img-top mx-auto" alt="..." />
            <div className="card-body">
              <p className="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card col-md-3 shadow-lg " id="aimImage5">
            <img   id="imageTwo" src="https://i.pinimg.com/564x/91/dd/dd/91dddd06ceef1c5734f8910b58280351.jpg" className="card-img-top mx-auto" alt="..." />
            <div className="card-body">
              <p className="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card col-md-3 shadow-lg " id="aimImage6">
            <img   id="imageTwo" src="https://i.pinimg.com/564x/82/75/ea/8275ea5e8c59e1f95401a6bd72566d41.jpg" className="card-img-top mx-auto" alt="..." />
            <div className="card-body">
              <p className="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          </div>
      </nav>






      {/* <div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner ">
      <div className="carousel-item active">
      <div className="get-position rounded ms-md-5 px-3 px-md-5  mx-auto " >
       <h3 className="px-3">Welcome to Jinad's blog</h3><br />
       <h6 className="px-3"> Clean Water and Sanitation to the Forefront of Change</h6>
       <p className="col-md-6 col-12 carousel-text px-3 text-light">At Jinad's, we are passionate about making a difference in the world by addressing one of the most critical issues of our time: access to clean water and sanitation. Our mission is aligned with the United Nations' Sustainable Development Goal 6, which aims to ensure availability and sustainable management of water and sanitation for all. Through this platform, we aspire to educate, inspire, and drive action towards a future where every individual has access to clean and safe water resources</p>
       </div>
        <img  src="https://img.freepik.com/free-photo/macro-green-leaf_23-2148212007.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais" className="d-block px-md-5  px-2 w-100 rounded" alt="..."/>
      </div>
      <div className="carousel-item">
      <div className="get-position rounded ms-md-5 px-3  px-md-5  mx-auto " >
       <h3>Welcome to Jinad's blog</h3><br/>
       <h6> Clean Water and Sanitation to the Forefront of Change</h6>
       <p className="col-md-6 col-12 text-light px-3 carousel-text">At Jinad's, we are passionate about making a difference in the world by addressing one of the most critical issues of our time: access to clean water and sanitation. Our mission is aligned with the United Nations' Sustainable Development Goal 6, which aims to ensure availability and sustainable management of water and sanitation for all. Through this platform, we aspire to educate, inspire, and drive action towards a future where every individual has access to clean and safe water resources</p>
       </div>
        <img src="https://img.freepik.com/free-photo/beautiful-shot-sea-with-windmills-factory-distance-cloudy-sky_181624-11846.jpg?w=740&t=st=1693580433~exp=1693581033~hmac=2789095bf13b3fd77450e6112467a52a739b2c1cff0c3a6b39b1dfda783bdaab" className="d-block px-md-5 px-3 w-100 rounded" alt="..."/>
      </div>
      <div className="carousel-item">
      <div className="get-position rounded ms-md-5 px-3 px-md-5  mx-auto " >
       <h3>Welcome to Jinad's blog</h3><br />
       <h6> Clean Water and Sanitation to the Forefront of Change</h6>
       <p className="col-md-6 col-12 text-light px-3 carousel-text">At Jinad's, we are passionate about making a difference in the world by addressing one of the most critical issues of our time: access to clean water and sanitation. Our mission is aligned with the United Nations' Sustainable Development Goal 6, which aims to ensure availability and sustainable management of water and sanitation for all. Through this platform, we aspire to educate, inspire, and drive action towards a future where every individual has access to clean and safe water resources</p>
       </div>
        <img src="https://img.freepik.com/premium-photo/silhouettes-animals-terrain-with-ecological-problems-polluted-air-by-factories-toxic-waste-water-pollution-generative-ai_131265-169.jpg?size=626&ext=jpg&ga=GA1.1.26054885.1689417218&semt=ais" className="d-block px-md-5 px-3 w-100 rounded" alt="..."/>
      </div>
    </div>
  
    <button className="carousel-control-prev px-2 fw-bold" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
  
    <button className="carousel-control-next  px-2 fw-bold" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div> */}






      <div>
      <img data-aos="fade-up" data-aos-duration="2000"  id="arrowOne" className='mt-5' src="/images/arrowOneRemoved.png" alt="" />
    </div>

      <div  data-aos="fade-up" data-aos-duration="2000" className=" row container mt-5 mx-auto">
        <div className="col-md-6 mt-5">

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eos molestiae est, maiores nihil in illum pariatur debitis corrupti! Animi suscipit, odio voluptate tempora optio ex illum amet nesciunt modi. Voluptas accusamus inventore ut vitae id sit, libero modi quasi?
         <br /><br /><br />

    
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eos molestiae est, maiores nihil in illum pariatur debitis corrupti! Animi suscipit, odio voluptate tempora optio ex illum amet nesciunt modi. Voluptas accusamus inventore ut vitae id sit, libero modi quasi?
          <br /><br /><br />

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eos molestiae est, maiores nihil in illum pariatur debitis corrupti! Animi suscipit, odio voluptate tempora optio ex illum amet nesciunt modi. Voluptas accusamus inventore ut vitae id sit, libero modi quasi?
  
        </div>

      <div className="col-md-6">
        <img id='smilingChildren' src="https://i.pinimg.com/564x/06/47/c2/0647c2cd711b037ba2d522a79e92bf40.jpg" alt="" className="container-fluid" />
      </div>
      </div>

      






      <div  data-aos="fade-up" data-aos-duration="2000" className=" row container mt-5 mx-auto">
      <div className="col-md-6">
        <img id='smilingChildren' src="https://i.pinimg.com/564x/0e/34/21/0e3421b2a325a6d5fce4048d79a8690d.jpg" alt="" className="container-fluid" />
      </div>
        <div className="col-md-6 mt-5">

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eos molestiae est, maiores nihil in illum pariatur debitis corrupti! Animi suscipit, odio voluptate tempora optio ex illum amet nesciunt modi. Voluptas accusamus inventore ut vitae id sit, libero modi quasi?
         <br /><br /><br />

    
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eos molestiae est, maiores nihil in illum pariatur debitis corrupti! Animi suscipit, odio voluptate tempora optio ex illum amet nesciunt modi. Voluptas accusamus inventore ut vitae id sit, libero modi quasi?
          <br /><br /><br />

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eos molestiae est, maiores nihil in illum pariatur debitis corrupti! Animi suscipit, odio voluptate tempora optio ex illum amet nesciunt modi. Voluptas accusamus inventore ut vitae id sit, libero modi quasi?
  
        </div>

      </div>
      
    </>
  );
};

export default Aim;
