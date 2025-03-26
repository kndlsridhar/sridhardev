
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle, faLink, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from './Urls';


const Works = () => {

    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3001/Projects/')
            .then(res => {
                setProject(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(true);
            });
    }, []);
    return (
        <>
            <section className="showcase">
                <div className="container">
                    <h2 className="text-white mb-3"><FontAwesomeIcon icon={faSuitcase} /> Creative Design Showcase</h2>
                    <div className="row justify-content-center">
                        {/* <div className="col-xl-4 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-12 col-12">
                                            <div className='image'>
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/GSWS-Login.jpg`} className="img-fluid" alt="name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-12">
                                            <h3>Name <span><FontAwesomeIcon icon={faLink}/> code.com</span></h3>
                                            <div className="details d-flex justify-content-between align-items-center">
                                                <h5>Sport</h5>
                                                <FontAwesomeIcon icon={faCircle}/>
                                                <h5>10 Pages</h5>
                                                <FontAwesomeIcon icon={faCircle}/>
                                                <h5>Standard</h5>
                                            </div>
                                            <p>Showcasing expertise, passion, and innovation in the realm of development.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {loading ? (
                            <div className="col-12 text-center">
                                <p>Loading...</p>
                            </div>
                        ) : (

                            project.map((p, i) => (

                                <div className="col-xl-4 col-12 d-flex align-items-stretch">
                                    <div className="card w-100">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-xl-12 col-12">
                                                    <div className='image'>
                                                        <img src={`${baseURL}/${p.img}`} className="img-fluid" alt="name"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-12">
                                                    <h3>{p.title} <span><a href={p.url}><FontAwesomeIcon icon={faLink} /></a></span></h3>
                                                    <div className="details d-flex justify-content-between align-items-center">
                                                        <h5>{p.category}</h5>
                                                        <FontAwesomeIcon icon={faCircle} />
                                                        <h5>10 Pages</h5>
                                                        <FontAwesomeIcon icon={faCircle} />
                                                        <h5>{p.type}</h5>
                                                    </div>
                                                    <p>{p.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )


                            ))
                        }

                        <div className="col-xl-12 col-12">
                            <button className="btn btn-dark rounded-4 d-block w-100">Show More <FontAwesomeIcon icon={faArrowRight} /> </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Works;



// const projects = [
//     // { id: 1, name: 'AP Tribes', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text' },
//     // { id: 2, name: 'Chandranna Pelli Kanuka', category: 'Canada',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
//     // { id: 3, name: 'Giribhumi', category: 'UK',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
//     // { id: 1, name: 'Giripragati', category: 'USA',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
//     // { id: 2, name: 'Chandranna Pelli Kanuka', category: 'Canada',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
//     // { id: 3, name: 'Giribhumi', category: 'UK',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
//     { name: 'Giripragati (ITDA)', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'Giribhumi', category: 'USA',img:require('../assets/img/Giribhumi.png'),description:'Test text'},
//     { name: 'Chandranna Pelli Kanuka (CPK)', category: 'USA',img:require('../assets/img/Chandranna-Pelli-kanuka.png'),description:'Test text'},
//     { name: 'Content Management System (CMS)', category: 'USA',img:require('../assets/img/Content-Management-System.png'),description:'Test text'},
//     //{ name: 'Issue Tracker', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'Sand Sale Management and Monitoring System', category: 'USA',img:require('../assets/img/AP-SAND.jpg'),description:'Test text'},
//     { name: 'Tribal GIS Dashboard', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     //{ name: 'Spandana', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'GSWS Portal and Dashboard', category: 'USA',img:require('../assets/img/GSWS-Login.jpg'),description:'Test text'},
//     { name: 'Certificate design for GSWS', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'Andhra Pradesh Dairy Development Cooperative Federation Limited', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'Girivikasam', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'AP Warehouse', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'Andhra Sand', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'AP Markfed (Landing)', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'CMAPP', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'CMAID', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'Markray (E-auction)', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'Apolis', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'CONSUMER PRICE APPLICATION (CPA)', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'EMRS', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'Ap Tourism', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'},
//     { name: 'Aadudam Andhra', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text'}
//   ];