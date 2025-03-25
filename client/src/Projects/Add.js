import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Add = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    image: null
  });


  const [submittedData, setSubmittedData] = useState([]); // Store submitted data
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], // Store the image file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('image', formData.image);

    // Send the form data to the Express server
    const response = await fetch('http://localhost:5001/upload', {
      method: 'POST',
      body: data,
    });

    const result = await response.json();
    console.log(result);

    setSubmittedData((prevData) => [...prevData, result]);
  };
  

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12'>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title d-flex justify-content-between">Create <Link to="/projects/list" className="btn btn-dark">Back</Link></h4>

                            <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <img src={data.imageUrl} alt="Uploaded" width="100" height="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>


                            <form onSubmit={handleSubmit}>
                                  <div className='row justify-content-center'>
                                      <div className="col-md-4">
                                          <div className='row'>
                                              <div className="col-md-12">
                                                  <label  className="form-label">Project Name</label>
                                                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange}/>
                                              </div>

                                              <div className="col-md-12">
                                                  <label  className="form-label">Category</label>
                                                  <input type="text" className="form-control" name="email" value={formData.email} onChange={handleInputChange}/>
                                              </div>

                                              <div className="col-md-12">
                                                  <label  className="form-label">Type</label>
                                                  <input type="text" className="form-control" name="type" value={formData.type} onChange={handleInputChange}/>
                                              </div>

                                              <div className="col-md-12">
                                                  <label  className="form-label">URL</label>
                                                  <input type="text" className="form-control" name="url" value={formData.url} onChange={handleInputChange}/>
                                              </div>

                                              <div className="col-md-12">
                                                  <label  className="form-label">Project Image</label>
                                                  <input type="file" className="form-control" name="img" accept="image/*" value={formData.img} onChange={handleFileChange}/>
                                              </div>

                                              <div className="col-md-12">
                                                  <label  className="form-label">Description</label>
                                                  <textarea type="text" className="form-control" name="desc" value={formData.desc} onChange={handleInputChange}></textarea>
                                              </div>
                                              

                                              <div className="col-md-12">
                                                <button className='btn btn-success' type='submit'>Create</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                            </form>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
