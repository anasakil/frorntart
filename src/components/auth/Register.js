import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../features/auth/authSlice'; 
import {  Input, Button, Typography, Alert } from 'antd';

const { Title } = Typography;

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const resultAction = await dispatch(registerUser(formData));
      if (registerUser.fulfilled.match(resultAction)) {
        navigate('/login');
      } else {
        const errorMessage = resultAction.payload?.message || 'Registration failed. Please try again.';
        setError(errorMessage);
        console.error('Registration failed:', resultAction.error);
      }
    } catch (error) {
      console.error('Failed to register:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '5rem',
      background: '#F5F5F5',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '800px',
        width: '100%',
        padding: '2rem',
        borderRadius: '8px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem', minWidth: '300px' }}>
          <img src="/logimg.png" alt="Register" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div style={{ flex: 1, padding: '1rem', minWidth: '300px' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem', color: '#97644e' }}>Register</Title>
          {error && <Alert message={error} type="error" style={{ marginBottom: '1rem' }} />}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label>Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label>Password</label>
              <Input.Password
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>
            <Button type="primary" htmlType="submit" style={{ width: '100%', background: '#97644e', border: 'none', marginTop: '1rem' }}>
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
