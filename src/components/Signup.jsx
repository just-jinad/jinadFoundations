import React, { useEffect, useState } from "react";

const Signup = () => {
  const [bgImage, setBgImage] = useState("");
  useEffect(() => {
    setBgImage(
      "https://i.pinimg.com/564x/ef/af/69/efaf696f1bc07a48aeea032e57a403f1.jpg"
    );
  }, []);

  return (
    <>
      <form
        className="col-md-12 col-lg-6 mx-auto mt-3 border p-5 shadow-lg rounded"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <input type="text" id="form3Example1" className="form-control" />
              <label className="form-label fw-bold" for="form3Example1">
                First name
              </label>
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <input type="text" id="form3Example2" className="form-control" />
              <label className="form-label fw-bold" for="form3Example2">
                Last name
              </label>
            </div>
          </div>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input type="email" id="form3Example3" className="form-control" />
          <label className="form-label fw-bold" for="form3Example3">
            Email address
          </label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input type="password" id="form3Example4" className="form-control" />
          <label className="form-label fw-bold" for="form3Example4">
            Password
          </label>
        </div>

        <button
          data-mdb-ripple-init
          type="button"
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
          <label className="form-check-label fw-bold text-white" for="form2Example33">
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
  );
};

export default Signup;
