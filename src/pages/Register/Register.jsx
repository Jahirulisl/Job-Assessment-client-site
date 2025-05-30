import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerAnimationData from '../../assets/lotti/register.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin  from '../Share/SocialLogin';

const Register = () => {
  const {createUser} =useContext(AuthContext);

  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    //password validation
    //show password validation error

    createUser(email,password)
    .then(result=>{
       console.log(result) 
    })
    .catch(error =>{
      console.log(error.message)
    })
  } 
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='text-center lg:text-left w-96'>
       <Lottie animationData={registerAnimationData}></Lottie>
    </div>
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className=" ml-8 mt-4 text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
            <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;