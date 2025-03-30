import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const CreateUser = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [age,setAge] = useState([]);

    const [users,setUsers] = useState([]);

    const Submit = (e) =>{
        e.preventDefault();
        axios.post('https://portfolio-zaj5.onrender.com/createUser',{name,email,age})
        .then(result => {
            console.log(result);
            alert('Succefull Created User !')
            window.location.reload();
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        axios.get('https://portfolio-zaj5.onrender.com/Users/')
        .then(result => setUsers(result.data))
        .catch(error => console.log(error))
    },[])

  return (
    <>
    <div className='container'>
              <div className='row justify-content-center'>
                  <div className="col-md-10">

                  <div class="table-responsive">
                        <table class="table table-striped table-bordered">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">#action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    users.map((user,i)=>(
                                    <tr class="" key={i}>
                                    <td>{++i}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <div  className='d-flex'>
                                        <Link className='btn btn-success me-1'>Read</Link>
                                        <Link className='btn btn-info me-1 text-white'>Update</Link>
                                        <Link className='btn btn-danger'>Delete</Link></div>
                                    </td>
                                </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                  </div>
              </div>
    <form onSubmit={Submit}>
                                  <div className='row justify-content-center'>
                                      <div className="col-md-4">
                                          <div className='row'>
                                              <div className="col-md-12">
                                                  <label  className="form-label">Name</label>
                                                <input type="text" className="form-control" name="name" onChange={(e) => setName(e.target.value)}/>
                                              </div>

                                              <div className="col-md-12">
                                                  <label  className="form-label">Email</label>
                                                  <input type="text" className="form-control" name="email" onChange={(e) => setEmail(e.target.value)}/>
                                              </div>

                                              <div className="col-md-12">
                                                  <label  className="form-label">Age</label>
                                                  <input type="text" className="form-control" name="age" onChange={(e) => setAge(e.target.value)}/>
                                              </div>


                                              <div className="col-md-12">
                                                <button className='btn btn-success' type='submit'>Create</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                            </form>
    </div>
    </>
  )
}
