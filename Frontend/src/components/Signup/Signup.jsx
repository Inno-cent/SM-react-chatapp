import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./signup.scss";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  // const { signup } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { fullname, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.value]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(fullname, email, password, confirmPassword);
    console.log(formData);
  };

  return (
    <>
      {/* <div classNameName="flex h-screen items-center justify-center">
        <form classNameName="bpx-6 py-2  space-y-3 w-96" onSubmit={onSubmit}>
          <h2 classNameName="text-2xl text-white font-bold">Signup</h2>
          <br />

          <label classNameName="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              classNameName="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              classNameName="grow"
              placeholder="Full name"
              name="fullname"
              value={fullname}
              onChange={onChange}
              required
            />
          </label>

          <label classNameName="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              classNameName="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              classNameName="grow"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </label>

          <label classNameName="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              classNameName="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              classNameName="grow"
              name="password"
              value={password}
              onChange={onChange}
              required
              placeholder="password"
            />
          </label>

          <label classNameName="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              classNameName="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              classNameName="grow"
              placeholder="confirm password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              required
            />
          </label>

          <div classNameName="flex justify-between">
            <p>
              Have an account?
              <Link
                to="/login"
                onClick={onSubmit}
                classNameName="text-blue-500 underline cursor-pointer ml-1"
              >
                Login
              </Link>
            </p>

            <input
              type="submit"
              value="Signup"
              classNameName="text-white bg-green-500 px-8 py-2 cursor-pointer rounded-lg"
            />
          </div>
        </form>
      </div> */}

      <div className="main-container">
        <div className="inner-main">
          <div className="de123ess">
            {/* <div id="error-message" className="error-message">
              Error message here
            </div>
            <div id="success-message" className="success-message">
              Success message here
            </div> */}
            <h2 className="m2we433a">Sign Up</h2>

            <form className="space-y-5" id="signup-form">
              <div className="sw23edz">
                <label>Full Name</label>
                <input
                  className="form-input"
                  type="text"
                  required
                  name="Full_name"
                  placeholder="Full Name"
                  id="full_name"
                />
              </div>

              <div className="sw23edz">
                <label>Email</label>
                <input
                  className="form-input"
                  type="email"
                  required
                  name="email"
                  placeholder="johnmark@gmail.com"
                  id="email"
                />
              </div>

              <div className="sw23edz">
                <label>Password</label>
                <input
                  className="form-input"
                  type="password"
                  required
                  name="password"
                  placeholder="**********"
                  id="password"
                />
              </div>

              <div className="sw23edz">
                <label>Confirm Password</label>
                <input
                  className="form-input"
                  type="password"
                  required
                  name="password_confirmation"
                  placeholder="*********"
                  id="password_confirmation"
                />
              </div>

              <button type="submit" className="btn">
                {/* <div id="loader" style="display: none;">
                  Loading...
                </div> */}
                <div id="signup-text">SIGN UP</div>
              </button>
            </form>
            <div className="f32sdxdw">
              <div className="s23edfq">
                <span>OR</span>
              </div>
            </div>
            <p className="text-center">
              Already have an account?
              <a href="/" className="d23sacx">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
