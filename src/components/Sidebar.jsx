import axios from 'axios';
import React, { useEffect, useState } from 'react';


const SideNavbar = () => {
  const [userinfo, setUserData] = useState(undefined)
  let url = "http://localhost:4000/user/dashboard"
  
  useEffect(() => {
  
    getUserName()
 
  }, [])
  

  const getUserName =()=>{
    console.log("Function was seeennn");
    axios.get(url,{headers:{
      bearer:`Bearer ${localStorage.userToken}`
    }}).then((res)=>{
      console.log(res.data.result );
      setUserData(res.data.result)
    }).catch((err)=>{
      console.log(err);
    })
    
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar  d-none d-md-block">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active p-4" href="#">
              Admin page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-4 text-secondary fw-bold" href="#">
               List of resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-4 text-secondary fw-bold" href="#">
                Available resources
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link p-4 text-secondary fw-bold" href="#">
                Announcements 
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link p-4 text-secondary fw-bold" href="#">
                Catalog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-4 text-secondary fw-bold" href="#">
                Resource upload
                </a>
              </li>

              
              <li className="nav-item">
                <a className="nav-link p-4 text-secondary fw-bold" href="#">
                Documentary 
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="pt-3">
           <p>Welcome {userinfo?userinfo?.lastName:null}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SideNavbar;
