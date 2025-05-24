import React, { useContext } from 'react';

import signinAnimationData from '../../assets/lotti/signin.json'
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext/AuthContext';
 const Signin = () => {
   //for context hooks start>
  const { singInUser}=useContext(AuthContext);
   //for context hooks end> 

  const handleSignIN = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

     singInUser(email,password)
     .then(result=>{
      console.log('signin',result.user)
     })
     .catch(error=>{
      console.log(error.message)
     })
  }

    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold w-96">Login now!</h1>
      <Lottie animationData={signinAnimationData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignIN} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Signin;