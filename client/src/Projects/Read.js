import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const Read = () => {
    const [data, setProjects] = useState([]);
    const { id } = useParams();
    // useEffect(() => {
    //     axios.get('https://sridhardev.vercel.app/Projects/' + id)
    //         .then(res => setData(res.data))
    //         .catch(err => console.log(err))
    // }, [id]);

    useEffect(() => {
        axios.get('https://sridhardev.vercel.app/getProjects/' + id)
        .then(res => setProjects(res.data))
        .catch(err => console.log(err))
    }, [id]);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4 className="card-title d-flex justify-content-between">
                                    Read <Link to="/projects/list" className="btn btn-dark">Back</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                                <div class="row justify-content-center align-items-center g-2">
                                    <div class="col-xl-6">Name</div>
                                    <div class="col-xl-6">{data.title}</div>
                                </div>
                                <div class="row justify-content-center align-items-center g-2">
                                    <div class="col-xl-6">Image</div>
                                    <div class="col-xl-6"><img src={`https://sridhardev.vercel.app/${data.img}`} className='img-fluid' width="50px" height="50px" alt='img' /></div>
                                </div>
                                <div class="row justify-content-center align-items-center g-2">
                                    <div class="col-xl-6">Category</div>
                                    <div class="col-xl-6">{data.category}</div>
                                </div>
                                <div class="row justify-content-center align-items-center g-2">
                                    <div class="col-xl-6">Type</div>
                                    <div class="col-xl-6">{data.type}</div>
                                </div>
                                <div class="row justify-content-center align-items-center g-2">
                                    <div class="col-xl-6">Site URL</div>
                                    <div class="col-xl-6">{data.url}</div>
                                </div>

                                <Link to={`/projects/update/${id}`} className="btn btn-dark">Update</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
