import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  let url = "https://jfoundationsbackend.onrender.com/user/login";
  // let url = "http://localhost:4000/user/login";

  const loginBtn = () => {
    let loginInfo = {
      email, password
    }


    axios.post(url, loginInfo)
    .then((response) => {
      console.log(response);
      if (password && email && response.data.status == true) {
        toast("Login successful😊", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true, 
          progress: undefined,
          theme: "light",
          

        });
        localStorage.userToken=email
        setTimeout(() => {
          navigate("/dashboard")
        }, 7000);
      }else if(password && email && response.data.status == false){
        toast.error("Wrong Email or password👾" , {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })

      }
    }).catch((err)=>{
      console.log(err);
    });

  };

  const [bgImage, setBgImage] = useState("");
  useEffect(() => {
    setBgImage(
      "https://i.pinimg.com/564x/7e/2d/f5/7e2df5fe3b174b4c6bfecbca5db0d2c7.jpg"
    );
  }, []);
  return (
    <>
      <div
        className="col-md-12 col-lg-6 mx-auto mt-3 border p-5 shadow-lg rounded"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
  
        <div data-mdb-input-init class="form-outline mb-4">
          <input type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          id="form2Example1" 
          class="form-control" />
          <label class="form-label fw-bold text-white" for="form2Example1">
            Email address
          </label>
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
          <input type="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          id="form2Example2" 
          class="form-control" />
          <label class="form-label fw-bold text-white" for="form2Example2">
            Password
          </label>
        </div>

        <div class="row mb-4">
          <button
            data-mdb-ripple-init
            onClick={loginBtn}
            class="btn btn-warning text-white fw-bold p-3 btn-block mb-4"
          >
            Sign In
          </button>
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example34"
                checked
              />
              <label class="form-check-label text-white" for="form2Example34">
            
                Remember me
              </label>
            </div>
          </div>
        </div>

        <div class="text-center">
          <p className="text-white">
      
            Not a member?
            <Link
              to={"/signup"}
              className="text-decoration-none text-white fw-bold text-black"
            >
              Sign Up
            </Link>
          </p>
          <p className="text-white">or sign up with:</p>
          <button
            data-mdb-ripple-init
            type="button"
            className="btn btn-warning btn-floating mx-1"
          >
            <i className="fab fa-facebook-f"></i>
          </button>

          <button
            data-mdb-ripple-init
            type="button"
            className="btn btn-warning btn-floating mx-1"
          >
            <i className="fab fa-google"></i>
          </button>

          <button
            data-mdb-ripple-init
            type="button"
            className="btn btn-warning btn-floating mx-1"
          >
            <i className="fab fa-twitter"></i>
          </button>

          <button
            data-mdb-ripple-init
            type="button"
            className="btn btn-warning btn-floating mx-1"
          >
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
