import React, { useState, useEffect, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';
import { CredInput, SubmitButton } from '../components/shared/Input';

const LOGIN_URL = "/login"

const Login = () => {
  const { setAuth } = useAuth();
  const [errMsg, setErrMsg] = useState('')

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
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

    try {
      const response = await axios.post(LOGIN_URL,
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      const accessToken = response?.data?.accessToken;
      const userId = response?.data?.userId

      setAuth({ userId: userId, accessToken: accessToken });
      setFormData({
        email: '',
        password: '',
      })
      navigate('/myCourses', { replace: true });

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

    // Reset the form after submission
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className='flex w-full h-auto min-h-[100vh] justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='flex flex-col w-[390px] h-[420px] bg-white overflow-hidden pt-[80px] px-[55px] pb-[30px] gap-[0.975rem] rounded-[20px]'>
      <div className='text-center text-3xl font-author font-semibold '>Login </div>


      <CredInput
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <CredInput
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <form className='flex justify-center' onSubmit={handleSubmit}>
        <SubmitButton type="submit" >Submit</SubmitButton>
      </form>


    </div>
    </div>
  );
};

export default Login;
