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
