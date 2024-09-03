import React, { useState } from 'react';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    linkedIn: '',
    jobTitle: '',
    department: '',
    highestDegree: '',
    institutionName: '',
    fieldOfStudy: '',
    currentEmployer: '',
    positionTitle: '',
    yearsOfExperience: '',
    keyResponsibilities: '',
    previousEmployment: '',
    relevantSkills: '',
    certifications: '',
    coverLetter: '',
    resume: null,
    howHeard: '',
    availability: '',
    salaryExpectations: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="section-full">
      <div className="container">
        <div className="section-head">
          <h2>Career Application Form</h2>
          <div className="mt-separator-outer m-b30">
            <div className="mt-separator site-bg-primary" />
          </div>
        </div>
        <div className="section-content m-b50">
          <div className="mt-box">
            <div className="p-a30 bg-gray radius-10 cons-contact-form-wrap">
              <form
                className="cons-contact-form contact-style-1"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="fullName"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        required
                        className="form-control"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="form-control"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="address"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="jobTitle"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Position Applied For"
                        value={formData.jobTitle}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        name="department"
                        className="form-control"
                        value={formData.department}
                        onChange={handleChange}
                    
                      >
                        <option value="" selected disabled>Desiered Role</option>
                        <option value="">Entry Level</option>
                        <option value="">Intermidate Level</option>
                        <option value="">Advance Level</option>
                       
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="coverLetter"
                        rows={5}
                        className="form-control"
                        required
                        placeholder="Cover Letter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 p-b30">
                    <label>Resume/CV:</label>
                    <input
                      type="file"
                      name="resume"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                 
                  
                  <div className="col-md-12">
                    <button
                      type="reset"
                      className="site-button m-r10"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="site-button-secondry"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
