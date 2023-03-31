import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import './mix.css'

const Login = () => {
    const history = useNavigate();
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    async function submit(e){
        e.preventDefault();

        try {
            
            await axios.post("http://localhost:8000/",{
                email, password
            })
            .then(res => {
                if(res.data == "exist"){
                    history("/home", {state: {id:email}})
                }else if(res.data == "notexist"){
                    alert("User havnot Signup")
                }
            }).catch(e => {
                alert("Wrong Details")
                console.log(e);
            })
        } catch (error) {
            console.log(error);
        }

    }
  return (
    <div>
      <section>
      <div className="form_data">
        <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
        </div>

      <form action="POST">
            <div className="form_input">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name=""
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                id="email"
                placeholder="Enter Your Email Address"
            />
            </div>

            <div className="form_input">
            <label htmlFor="Password">Password</label>
            <input
                type="text"
                name=""
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                id=""
                placeholder="Enter Your Password"
            />
            </div>
                
          <input className="btn" type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Sign Up </Link>
      </div>
      </section>
    </div>
  );
};

export default Login;
