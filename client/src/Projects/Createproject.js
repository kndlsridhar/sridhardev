import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const CreateProject = () => {
    const [formData, setFormData] = useState({
      title: '',
      desc: '',
      img: null,
      category: '',
      type: '',
      url: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleFileChange = (e) => {
      setFormData({
        ...formData,
        img: e.target.files[0],
      });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append('title', formData.title);
      form.append('desc', formData.desc);
      form.append('img', formData.img);
      form.append('category', formData.category);
      form.append('type', formData.type);
      form.append('url', formData.url);

      try {
        const response = await axios.post('http://localhost:3001/createProject', form, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Item saved:', response.data);

        alert('success');
        navigate('/projects/list');
      } catch (error) {
        console.error('Error uploading the file:', error);
      }
    };

    return (

        <>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12'>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title d-flex justify-content-between">Create <Link to="/projects/list" className="btn btn-dark">Back</Link></h4>


                            <form onSubmit={handleSubmit}>
                                  <div className='row justify-content-center'>
                                      <div className="col-md-4">
                                          <div className='row'>
                                              <div className="col-md-12">
                                                  <label  className="form-label">Title</label>
                                                <input type="text" className="form-control" name="title" placeholder="Title" onChange={handleChange} required />
                                              </div>

                                              <div className="col-md-12">
                                                  <label  className="form-label">Description</label>
                                                  <input type="text" className="form-control" name="desc" placeholder="Description" onChange={handleChange} required />
                                              </div>

                                              <div className="col-md-12">
                                                  <label  className="form-label">Image</label>
                                                  <input type="file" className="form-control" name="img" onChange={handleFileChange} required/>
                                              </div>

                                              <div className="col-md-12">
                                                  <label  className="form-label">Category</label>
                                                  <input type="text" className="form-control" name="category" placeholder="Category" onChange={handleChange} required/>
                                              </div>

                                              <div className="col-md-12">
                                                  <label  className="form-label">Type</label>
                                                  <input type="text" className="form-control" name="type" placeholder="Type" onChange={handleChange} required/>
                                              </div>

<div className="col-md-12">
    <label  className="form-label">URL</label>
    <input type="text" className='form-control' name="url" placeholder="URL" onChange={handleChange} required/>
</div>


                                              <div className="col-md-12">
                                                <button className='btn btn-success' type='submit'>Create Project</button>
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

      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <input type="text" name="desc" placeholder="Description" onChange={handleChange} required />
        <input type="file" name="img" onChange={handleFileChange} required />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
        <input type="text" name="type" placeholder="Type" onChange={handleChange} required />
        <input type="text" name="url" placeholder="URL" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form> */}
      </>
    );
  };
