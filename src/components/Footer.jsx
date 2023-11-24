import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='mt-5 bg-dark text-white p-4 '>

            <div className='row container mx-auto text-white'>
                <ul className='col-md-3 list-unstyled'>
                    <li className='text-warning fw-bold'><h4>Logo here</h4></li>
                    <li>Just-Jinad</li><br />
                    <li className='text-warning fw-bold'>About Us</li>
                    <li><p>We want to help bring talented students And Startups together </p></li>
                    
                </ul>

                <ul className='col-md-3 list-unstyled'>
                    <li className='text-warning fw-bold'><h5>Contact Us</h5></li>
                    <li><p><i className="fa fa-whatsapp" aria-hidden="true"></i></p></li>
                    <li><p><i className="fa fa-twitter" aria-hidden="true"></i></p></li>
                    <li><i className="fa fa-facebook " aria-hidden="true"></i></li>
                    <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                </ul>
                <ul className='col-md-3 list-unstyled'>
                <li className='text-warning fw-bold'><h5>Helpful Links</h5></li>
                    <li>Services</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                    <li>Terms and condition</li>
                </ul>
                <ul className='col-md-3 list-unstyled'>
                    <li><h5>Subscribe to More Info</h5></li>
                    <li><input className='rounded ' type="text" placeholder='Enter Your Email'/></li>
                    <li ><button className='btn btn-warning fw-bold text-white mt-2'>Subscribe</button></li>
             
                </ul>
            </div><hr />
            <p className='text-center'>Copyright @ just_Jinad</p>
        </footer>
    
    </>
  )
}

export default Footer