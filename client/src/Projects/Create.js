// import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export const Create = () => {
//     const [title,setTitle] = useState();
//     const [desc,setDesc] = useState();
//     const [img,setImg] = useState();
//     const [category,setCategory] = useState();
//     const [type,setType] = useState();
//     const [url,setUrl] = useState();


//     const navigate = useNavigate();
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         axios.post('https://sridhardev.vercel.app/createProject',{title,desc,img,category,type,url})
//         .then(result => {
//             console.log(result);
//             alert('Succefull Created Project !')
//                 navigate('/projects/list');
//             //window.location.reload();
//         })
//         .catch(error => console.log(error))
//     }

//   return (
//     <>
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-xl-12'>
//                     <div className="card">
//                         <div className="card-body">
//                             <h4 className="card-title d-flex justify-content-between">Create <Link to="/projects/list" className="btn btn-dark">Back</Link></h4>


//                             <form onSubmit={handleSubmit}>
//                                   <div className='row justify-content-center'>
//                                       <div className="col-md-4">
//                                           <div className='row'>
//                                               <div className="col-md-12">
//                                                   <label  className="form-label">Title</label>
//                                                 <input type="text" className="form-control" name="title" onChange={(e) => setTitle(e.target.value)}/>
//                                               </div>

//                                               <div className="col-md-12">
//                                                   <label  className="form-label">Description</label>
//                                                   <input type="text" className="form-control" name="desc" onChange={(e) => setDesc(e.target.value)}/>
//                                               </div>

//                                               <div className="col-md-12">
//                                                   <label  className="form-label">Image</label>
//                                                   <input type="text" className="form-control" name="img" onChange={(e) => setImg(e.target.value)}/>
//                                               </div>

//                                               <div className="col-md-12">
//                                                   <label  className="form-label">Category</label>
//                                                   <input type="text" className="form-control" name="category" onChange={(e) => setCategory(e.target.value)}/>
//                                               </div>

//                                               <div className="col-md-12">
//                                                   <label  className="form-label">Type</label>
//                                                   <input type="text" className="form-control" name="category" onChange={(e) => setType(e.target.value)}/>
//                                               </div>

// <div className="col-md-12">
//     <label  className="form-label">URl</label>
//     <input type="text" className="form-control" name="url" onChange={(e) => setUrl(e.target.value)}/>
// </div>


//                                               <div className="col-md-12">
//                                                 <button className='btn btn-success' type='submit'>Create Project</button>
//                                               </div>
//                                           </div>
//                                       </div>
//                                   </div>
//                             </form>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }
