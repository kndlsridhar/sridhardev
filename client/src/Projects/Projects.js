import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

export const Projects = () => {
    const [projects,setProjects]=useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://portfolio-zaj5.onrender.com/Projects/')
        .then(res => setProjects(res.data))
        .catch(err => console.log(err))
    }, []);

    const handleDelete=(id)=>{
        const confirm = window.confirm('Are you sure want to delete?')
        if (confirm) {
            axios.delete('https://portfolio-zaj5.onrender.com/deleteProjects/' + id)
                .then(res => {
                    navigate('/projects/list/');
                    window.location.reload();
                })
                .catch(err => {
                    alert(err+'Not Deleted')
                })
        }
    }

    // useEffect(()=>{
    //     axios.get('https://portfolio-zaj5.onrender.com')
    //     .then(result => setUsers(result.data))
    //     .catch(error => console.log(error))
    // },[])

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12'>

                    <h1>Test</h1>
                <Link to="/projects/create" className="btn btn-dark">create</Link>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">img</th>
                                    {/* <th scope="col">desc</th> */}
                                    <th scope="col">category</th>
                                    <th scope="col">type</th>
                                    <th scope="col">url</th>
                                    <th scope="col">#action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projects.map((d,i)=>(
                                        <tr class="" key={i}>
                                            <td>{i + 1}</td>
                                            <td nowrap>{d.title}</td>
                                            <td><img src={`https://portfolio-zaj5.onrender.com/${d.img}`} alt='img' className='w-25' /></td>
                                            {/* <td>{d.desc}</td> */}
                                            <td>{d.category}</td>
                                            <td>{d.type}</td>
                                            <td>{d.url}</td>
                                            <td>
                                                <div className='d-flex'>
                                                    <Link to={`/projects/read/${d._id}`} className='btn btn-success me-1'>Read</Link>
                                                    <Link to={`/projects/update/${d._id}`} className='btn btn-info me-1'>Update</Link>
                                                    <Link onClick={e => handleDelete(d._id)} className='btn btn-danger'>Delete</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
