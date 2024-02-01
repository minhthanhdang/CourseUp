import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../../../api/axios';
import { SubmitButton } from '../Components/SubmitButton';
import { FormInput } from '../Components/FormInput';

const SIGN_UP_URL = "/signup"

const SignUp = () => {
  const navigate = useNavigate()

  const [errMsg, setErrMsg] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitting')

    try {
      const response = await axios.post(SIGN_UP_URL,
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));

      console.log("Signup success!!!")
      setFormData({
        username: '',
        email: '',
        password: '',
      })
      navigate('/login', { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      console.log(errMsg)
    }
  };

  return (
    <div className='flex flex-col items-center w-[50%] gap-[0.975rem]'>

      <div className='text-center text-3xl font-author font-semibold '>Sign Up </div>


      <FormInput
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <FormInput
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormInput
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <form className='flex justify-center' onSubmit={handleSubmit}>
        <SubmitButton >Submit</SubmitButton>
      </form>


    </div>

  );
};

export default SignUp;
