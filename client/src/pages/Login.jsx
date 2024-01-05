import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';
import { CredInput, SubmitButton } from '../components/shared/Input';
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
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
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.accessToken;

      setAuth({ username: formData.username, password: formData.password, accessToken: accessToken });
      setUser('');
      setPwd('');
      navigate(from, { replace: true });
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
      errRef.current.focus();
  }

    console.log('Submitted data:', formData);
    // Reset the form after submission
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <div className='flex w-full h-auto min-h-[100vh] justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='flex flex-col w-[390px] h-[420px] bg-white overflow-hidden pt-[80px] px-[55px] pb-[30px] gap-[0.975rem] rounded-[20px]'>
      <div className='text-center text-3xl font-author font-semibold '>Login </div>


      <CredInput
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        value={formData.username}
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

      <section className='flex justify-center'>
        <SubmitButton type="submit" onSubmit={handleSubmit}>Submit</SubmitButton>
      </section>


    </div>
    </div>
  );
};

export default Login;
