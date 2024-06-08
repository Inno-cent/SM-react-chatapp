import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const Signup = () => {
  const [, setAuthUser] = useAuth();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const onSubmit = async (data) => {
  //   const userInfo = {
  //     fullname: data.fullname,
  //     email: data.email,
  //     password: data.password,
  //     confirmPassword: data.confirmPassword,
  //   };
  //   // console.log(userInfo);
  //   await axios
  //     .post("/api/user/signup", userInfo)
  //     .then((response) => {
  //       if (response.data) {
  //         toast.success("Signup successful");
  //       }
  //       localStorage.setItem("ChatApp", JSON.stringify(response.data));
  //       setAuthUser(response.data);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         toast.error("Error: " + error.response.data.error);
  //       }
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/api/user/signup", {
        fullname,
        email,
        password,
        confirmPassword,
      });

      const { user, token } = response.data;
      setAuthUser(user);
      Cookies.set("jwt", token);
      localStorage.setItem("ChatApp", JSON.stringify(user));
      toast.success("Signup successful!");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Signup failed. Please try again.");
    }
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form className="bpx-6 py-2  space-y-3 w-96">
          <h2 className="text-2xl text-white font-bold">Signup</h2>
          <br />
          {/* Fullname */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </label>

          {/* Email */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          {/* Password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="password"
            />
          </label>

          {/*Confirm Password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>

          {/* Text & Button */}
          <div className="flex justify-between">
            <p>
              Have an account?
              <Link
                to="/login"
                className="text-blue-500 underline cursor-pointer ml-1"
              >
                Login
              </Link>
            </p>

            <input
              type="submit"
              value="Signup"
              className="text-white bg-green-500 px-8 py-2 cursor-pointer rounded-lg"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
