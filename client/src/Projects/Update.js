import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export const Update = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState(null);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [url, setUrl] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://portfolio-zaj5.onrender.com/getProjects/' + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setDesc(res.data.desc);
                setImg(res.data.img);
                setCategory(res.data.category);
                setType(res.data.type);
                setUrl(res.data.url);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('img', img);
        formData.append('category', category);
        formData.append('type', type);
        formData.append('url', url);

        axios.put('https://portfolio-zaj5.onrender.com/updateProjects/' + id, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res);
                alert('Updated Successfully!');
                navigate('/projects/list');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4 className="card-title d-flex justify-content-between">
                                    Update <Link to="/projects/list" className="btn btn-dark">Back</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={handleUpdate}>
                                    <div className='row justify-content-center'>
                                        <div className="col-md-4">
                                            <div className='row'>
                                                <div className="col-md-12">
                                                    <label className="form-label">Project Name</label>
                                                    <input type="text" className="form-control" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                                                </div>

                                                <div className="col-md-12">
                                                    <label className="form-label">Category</label>
                                                    <input type="text" className="form-control" name="category" value={category} onChange={e => setCategory(e.target.value)} />
                                                </div>

                                                <div className="col-md-12">
                                                    <label className="form-label">Type</label>
                                                    <input type="text" className="form-control" name="type" value={type} onChange={e => setType(e.target.value)} />
                                                </div>

                                                <div className="col-md-12">
                                                    <label className="form-label">URL</label>
                                                    <input type="text" className="form-control" name="url" value={url} onChange={e => setUrl(e.target.value)} />
                                                </div>

                                                <div className="col-md-12">
                                                    <label className="form-label">Project Image</label>
                                                    <input type="file" className="form-control" name="img" onChange={e => setImg(e.target.files[0])} />
                                                    {img && <img src={`https://portfolio-zaj5.onrender.com/${img}`} alt='img' className='img-fluid w-25' />}
                                                </div>

                                                <div className="col-md-12">
                                                    <label className="form-label">Description</label>
                                                    <textarea type="text" className="form-control" name="desc" value={desc} onChange={e => setDesc(e.target.value)}></textarea>
                                                </div>

                                                <div className="col-md-12">
                                                    <button className='btn btn-success' type='submit'>Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <Link to='/projects/list' className="btn btn-dark">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
