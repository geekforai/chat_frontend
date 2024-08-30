import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signup() {
  // State hooks for form fields and errors
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate =useNavigate()
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validation
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.trim()) newErrors.email = 'Email is required.';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email format.';
    
    if (!userType) newErrors.userType = 'User type is required.';
    if (!password.trim()) newErrors.password = 'Password is required.';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Handle successful form submission
      const data=new FormData()
      data.append('name',name)
      data.append('email',email)
      data.append('user_type',userType)
      data.append('password',password)
      await axios.post('https://amittodquest.pythonanywhere.com/user-api/userlist/',data).then((res)=>{
        console.log(res)
            if(res.statusText=="Created"){
                navigate('/login')
            }
      }).catch((error)=>{

      })
      console.log('Form submitted:', { name, email, userType, password });
      // Clear form fields
      
    }
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <section className="py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white text-center">
                <h2 className="mb-0">Sign Up</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                  </div>
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
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="usertype" className="form-label">User Type</label>
                    <select
                      id="usertype"
                      className="form-select"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select your user type</option>
                      <option value="Seller">Seller</option>
                      <option value="Company">Company</option>
                    </select>
                    {errors.userType && <div className="text-danger">{errors.userType}</div>}
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
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center">
                <p className="mb-0">Already have an account? <a href="/login" className="btn btn-link">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
