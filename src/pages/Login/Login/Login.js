import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="">
      <h1 className="">This is Login Page</h1>
      <div className="">
        <form className="">
          <label className="" >
            Name
          </label>
          <input type="email" className="" placeholder="Your E-mail"></input>

          <label className="">
            Password
          </label>
          <input
            type="password"
            className=""
            placeholder="Your Password"
          ></input>

     
            <input
              className=""
              type="checkbox"
              
            />
            <label className="">
              Remember me
            </label>
     

          <button
            type="submit"
            className=""
          >
            Login
          </button>
        </form>
      </div>
      
      <Link to="/register">Are You Register?</Link>

      <br />
      <br />
      <button className="" onClick={signInUsingGoogle}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
