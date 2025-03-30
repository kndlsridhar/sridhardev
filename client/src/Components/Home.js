import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link} from "react-router-dom"
import {faArrowRight, faCircle,faLink,faSuitcase} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope,faFilePdf} from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () =>{
    const [project,setProjects] = useState([]);


    useEffect(()=>{
        axios.get('https://portfolio-zaj5.onrender.com/Projects/')
        .then(response => setProjects(response.data))
        .catch(error => console.log('Not Loading'+ error))
    },[])

    return(
        <>
            <section className="herosection">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-4">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/sridhar-khandavalli-profile.jpg`} alt="company logo" className="img-fluid profile" />
                        </div>
                        <div className="col-xl-8 col-8">
                            <h6>Hello I Am</h6>
                            <h2>Sridhar khandavalli</h2>
                            <p>
                            Experienced UI Developer with 11+ years of building visually engaging, user-friendly websites and web applications. Combining creativity with technical expertise, I deliver seamless, responsive interfaces that enhance user experience and meet business objectives.
                            </p>
                            <div className="buttons d-flex">
                                <button className="btn btn-dark me-2"><FontAwesomeIcon icon={faEnvelope} /> Email Me</button>
                                <button className="btn btn-dark"><FontAwesomeIcon icon={faFilePdf} /> Download CV</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills'>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/html5-original-wordmark.svg`} className="img-fluid" alt="html5" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/css3-original-wordmark.svg`} className="img-fluid" alt="css3" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/javascript-original.svg`} className="img-fluid" alt="javascript" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/angular.svg`} className="img-fluid" alt="angular" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/bootstrap-plain-wordmark.svg`} className="img-fluid" alt="bootstrap" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/react-original-wordmark.svg`} className="img-fluid" alt="react" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/photoshop-line.svg`} className="img-fluid" alt="photoshop" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/adobe_illustrator-icon.svg`} className="img-fluid" alt="illustrator" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/nodejs-original-wordmark.svg`} className="img-fluid" alt="nodejs" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/figma-icon.svg`} className="img-fluid" alt="figma" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/tailwindcss-icon.svg`} className="img-fluid" alt="tailwindcss" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/typescript-original.svg`} className="img-fluid" alt="typescript" /></div>
                    <div className='item'><img src={`${process.env.PUBLIC_URL}/assets/images/skills/materialize.svg`} className="img-fluid" alt="materialize" /></div>
                </div>
            </section>

            <section className="client">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-12">
                            <div className="scroll">
                                <ul>
                                    <li><img src={`${process.env.PUBLIC_URL}/assets/images/skills/html5-original-wordmark.svg`} className="img-fluid" alt="html5" /></li>
                                    <li><img src={`${process.env.PUBLIC_URL}/assets/images/skills/css3-original-wordmark.svg`} className="img-fluid" alt="css3" /></li>
                                    <li><img src={`${process.env.PUBLIC_URL}/assets/images/skills/javascript-original.svg`} className="img-fluid" alt="javascript" /></li>
                                    <li><img src={`${process.env.PUBLIC_URL}/assets/images/skills/bootstrap-plain-wordmark.svg`} className="img-fluid" alt="bootstrap" /></li>
                                    <li><img src={`${process.env.PUBLIC_URL}/assets/images/skills/angular.svg`} className="img-fluid" alt="angular" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="countes">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-2 col-12">
                            <h1>11+</h1>
                            <p>Years of Experience</p>
                        </div>
                        <div className="col-xl-2 col-12">
                            <h1>100+</h1>
                            <p>Happy Clients</p>
                        </div>
                        <div className="col-xl-2 col-12">
                            <h1>150+</h1>
                            <p>Completed Projects</p>
                        </div>
                        <div className="col-xl-2 col-12">
                            <h1>1</h1>
                            <p>Awards Received</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="experience">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-12">
                    <h2 className="text-white mb-3"><FontAwesomeIcon icon={faSuitcase} /> My Experience</h2>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-6 col-6">
                                            <div className="company">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/ct-logo-2.png`} alt="company logo" width='70px' height='70px'/>
                                                <div className="names">
                                                    <h2>Code Tree <span className="badge">Software Solutions</span></h2>
                                                    <p><a href="https://codetree.in" target='_blank' rel='noreferrer'>codetree.in</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <h3 className="text-white mb-0 text-end">2018 - Present</h3>
                                        </div>
                                    </div>
                                    <div className="row content text-start">
                                        <div className="col-xl-12 col-12">
                                            <h4 className="text-white">Web Designer (UI Developer)</h4>
                                            <ul>
                                                <li><p>Develop responsive and interactive web applications using HTML5, CSS3, JavaScript, and modern frameworks like Angular, React</p></li>
                                                <li><p>Build reusable code and libraries to ensure consistency across web applications.Implement cross-browser compatibility to ensure the UI works seamlessly on different browsers.</p></li>
                                                <li><p>Ensure applications are fully responsive across mobile, tablet, and desktop devices.</p></li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-6 col-6">
                                            <div className="company">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/ct-logo-1.png`} alt="company logo" width='70px' height='70px'/>
                                                <div className="names">
                                                    <h2>Creators Touch <span className="badge">Software Solutions</span></h2>
                                                    <p><a href="https://creatorstouchglobal.com" target='_blank' rel='noreferrer'>creatorstouchglobal.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <h3 className="text-white mb-0 text-end">2013 - 2018</h3>
                                        </div>
                                    </div>
                                    <div className="row content text-start">
                                        <div className="col-xl-12 col-12">
                                            <h4 className="text-white">Web Designer (UI Developer)</h4>
                                            <ul>
                                                <li><p>Lead the design and redesign of over 100 client websites, creating responsive, user-friendly, and visually appealing websites.</p></li>
                                                <li><p>Designed and developed responsive websites for small businesses and startups, ensuring a seamless user experience across devices.</p></li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className="showcase">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-12">
                            <h2 className="text-white mb-3"><FontAwesomeIcon icon={faSuitcase} /> Creative Design Showcase</h2>

                            {project.reverse().slice(0,2).map((p,i)=>(

                            <div className="card" key={i}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-5 col-5">
                                            <img src={`https://portfolio-zaj5.onrender.com/${p.img}`} className="img-fluid" alt="name"/>
                                        </div>
                                        <div className="col-xl-7 col-7">
                                            <h3>{p.title} <span><FontAwesomeIcon icon={faLink}/> {p.url}</span></h3>
                                            <div className="details d-flex justify-content-between align-items-center">
                                                <h5>{p.category}</h5>
                                                <FontAwesomeIcon icon={faCircle}/>
                                                <h5>{p.title}</h5>
                                                <FontAwesomeIcon icon={faCircle}/>
                                                <h5>{p.type}</h5>
                                            </div>
                                            <p>{p.desc.slice(0,25)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}


                            {/* <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-5 col-5">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/GSWS-Login.jpg`} className="img-fluid" alt="name"/>
                                        </div>
                                        <div className="col-xl-7 col-7">
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
                            </div> */}


                            <Link className="btn btn-dark rounded-4 d-block w-100" to='/Works'>Show More <FontAwesomeIcon icon={faArrowRight}/> </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;