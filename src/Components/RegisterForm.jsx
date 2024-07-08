// RegisterPage.js

import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    mobile: '',
    address: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    mobile: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };
// form valiation to validate the form filed
  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        errorMessage = value.length < 3 ? 'Name must be at least 3 characters long' : '';
        break;
      case 'age':
        errorMessage = !/^\d+$/.test(value) ? 'Age must be a number' : '';
        break;
      case 'gender':
        errorMessage = value === '' ? 'Please select a gender' : '';
        break;
      case 'mobile':
        errorMessage = !/^\d{10}$/.test(value) ? 'Mobile number must be 10 digits' : '';
        break;
      case 'address':
        errorMessage = value.length < 10 ? 'Address must be at least 10 characters long' : '';
        break;
      default:
        break;
    }

    setFormErrors({ ...formErrors, [name]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in formData) {
      validateField(key, formData[key]);
    }

    if (Object.values(formErrors).every(error => error === '')) {
      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        mobile: '',
        address: ''
      });
      console.log(formData) // printed the from data in a console
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">REGISTER</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    className={`form-control ${formErrors.age ? 'is-invalid' : ''}`}
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.age && <div className="invalid-feedback">{formErrors.age}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    className={`form-control ${formErrors.gender ? 'is-invalid' : ''}`}
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {formErrors.gender && <div className="invalid-feedback">{formErrors.gender}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
                    className={`form-control ${formErrors.mobile ? 'is-invalid' : ''}`}
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.mobile && <div className="invalid-feedback">{formErrors.mobile}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea
                    className={`form-control ${formErrors.address ? 'is-invalid' : ''}`}
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.address && <div className="invalid-feedback">{formErrors.address}</div>}
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
