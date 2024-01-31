import React, { useState } from 'react';
import useAuth from '../../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from '../../../../../api/axios';
import { FormInput } from '../Components/FormInput';
import { SubmitButton } from '../Components/SubmitButton';

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

    <div className='flex flex-col items-center w-[50%] gap-[0.975rem]'>
      <div className='text-center text-3xl font-author font-semibold '>Login </div>
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
        <SubmitButton type="submit" >Submit</SubmitButton>
      </form>
    </div>


  );
};

export default Login;
