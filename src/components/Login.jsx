import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate=useNavigate()

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform custom validation if needed
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
      // Submit form or handle login logic here
      const data=new FormData()
      data.append('email',email)
      data.append('password',password)
      axios.post("https://amittodquest.pythonanywhere.com/user-api/userlogin/", data)
      .then(response => {
        if (response.statusText === 'OK') {
          Cookies.set('token', response.data.access);
          Cookies.set('user_type', response.data.user_type);
          Cookies.set('islogin', true);
          navigate('/dashboard');
        }
      })
      .catch(err => {
        // Display alert using JavaScript, not JSX, because this is plain JS
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger alert-dismissible fade show d-flex align-items-start';
        alertDiv.role = 'alert';
        alertDiv.innerHTML = `
          <strong>Invalid!</strong> Email or Password.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        document.body.appendChild(alertDiv);
        
        // Optional: Automatically hide the alert after a few seconds
        setTimeout(() => {
          alertDiv.classList.remove('show');
          alertDiv.classList.add('fade');
        }, 5000);
      });
      
      console.log('Form submitted:', { email, password });
    }
  };

  // Email validation function
  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <section className="py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white text-center">
                <h2 className="mb-0">Login</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                    {emailError && <div className="text-danger mt-2">{emailError}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      placeholder="Enter your password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center">
                <p className="mb-0">Don't have an account? <a href="/register" className="btn btn-link">Register</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;

