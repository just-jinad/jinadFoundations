import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Adminsignup = () => {

    let url = "http://localhost:4000/user/admin";
    let navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
  
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(3, "Invalid password").required("Required"),
      }),
  
      onSubmit: async (values) => {
        // console.log(values);
        try {
          const response = await axios.post(url, values);
          console.log(response);
          console.log(response.data.status);
          if (
            values.firstName &&
            values.lastName &&
            values.email &&
            values.password &&
            response.data.status == false
          ) {
            toast.error("Email already exists 👾", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else if (
            values.firstName &&
            values.lastName &&
            values.email &&
            values.password &&
            response.data.status == true
          ) {
            toast("User has been signed successfully 😊", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
  
            values.firstName = "";
            values.lastName = "";
            values.email = "";
            values.password = "";
  
            setTimeout(() => {
              navigate("/login");
            }, 7000);
          }
        } catch (error) {
          console.log(error);
        }
      },
    });
  
    const [bgImage, setBgImage] = useState("");
    useEffect(() => {
      setBgImage(
        "https://i.pinimg.com/564x/e6/43/1a/e6431aa30c869da387519bca47129378.jpg"
        // https://i.pinimg.com/564x/59/41/4d/59414de944327d1c1ec837ba86d167a2.jpg
        
      );
    }, []);
  
    return (
      <>
        <form
          onSubmit={formik.handleSubmit}
          className="col-md-12 col-lg-6 mx-auto mt-3 border p-5 shadow-lg rounded"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="row mb-4">

            <h4 className="text-white fw-bold text-center mb-5 fst-italic">Admin Login page</h4>
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                {formik.errors.firstName && formik.touched.firstName ? (
                  <div className="alert alert-danger p-1" role="alert">
                    {formik.errors.firstName && (
                      <div>{formik.errors.firstName}</div>
                    )}
                    <br />
                  </div>
                ) : null}
                <input
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  type="text"
                  id="form3Example1"
                  name="firstName"
                  className="form-control"
                />
                <label
                  className="form-label fw-bold text-white"
                  for="form3Example1"
                >
                  First name
                </label>
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                {formik.errors.lastName && formik.touched.lastName ? (
                  <div className="alert alert-danger p-1" role="alert">
                    {formik.errors.lastName && (
                      <div>{formik.errors.lastName}</div>
                    )}
                    <br />
                  </div>
                ) : null}
                <input
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  type="text"
                  id="form3Example2"
                  name="lastName"
                  className="form-control"
                />
                <label
                  className="form-label fw-bold text-white"
                  for="form3Example2"
                >
                  Last name
                </label>
              </div>
            </div>
          </div>
  
          <div data-mdb-input-init className="form-outline mb-4">
            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-danger p-1" role="alert">
                {formik.errors.email && <div>{formik.errors.email}</div>}
                <br />
              </div>
            ) : null}
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              id="form3Example3"
              name="email"
              className="form-control"
            />
            <label className="form-label fw-bold text-white" for="form3Example3">
              Email address
            </label>
          </div>
  
          <div data-mdb-input-init className="form-outline mb-4">
            {formik.errors.password && formik.touched.password ? (
              <div className="alert alert-danger p-1" role="alert">
                {formik.errors.password && <div>{formik.errors.password}</div>}
                <br />
              </div>
            ) : null}
            <input
              type="password"
              id="form3Example4"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-control"
            />
            <label className="form-label fw-bold text-white" for="form3Example4">
              Password
            </label>
          </div>
  
          <button
            data-mdb-ripple-init
            type="submit"
            className="btn btn-warning p-3 fw-bold text-white btn-block mb-4 w-100"
          >
            Sign Up
          </button>
  
          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example33"
              checked
            />
            <label
              className="form-check-label fw-bold text-white"
              for="form2Example33"
            >
              Subscribe to our newsletter
            </label>
          </div>
  
          <div className="text-center fw-bold text-white">
            <p>or sign up with:</p>
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
        </form>
      </>
  )
}

export default Adminsignup