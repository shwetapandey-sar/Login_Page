import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });
  const navigate = useNavigate();

  // Sample user and admin credentials
  const credentials = {
    user: { username: 'user@gmail.com', password: 'user123' },
    admin: { username: 'admin@gmail.com', password: 'admin123' }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    };

    // Basic form validation
    if (!actualData.email || !actualData.password) {
      setError({ status: true, msg: "All Fields are Required", type: 'error' });
      return;
    }

    try {
      // Check if the entered credentials match with sample data
      if (
        credentials.user.username === actualData.email &&
        credentials.user.password === actualData.password
      ) {
        // If user authentication successful, navigate to user dashboard
        navigate('/home');
      } else if (
        credentials.admin.username === actualData.email &&
        credentials.admin.password === actualData.password
      ) {
        // If admin authentication successful, navigate to admin dashboard
        navigate('/home');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      setError({ status: true, msg: error.message || "An error occurred", type: 'error' });
    }
  };

  return (
    <>
      <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
        <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
        <Box textAlign='center'>
          <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
        </Box>
        <NavLink to='/sendpasswordresetemail'>Forgot Password ?</NavLink>
        {error.status && <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert>}
      </Box>
    </>
  );
};

export default UserLogin;

