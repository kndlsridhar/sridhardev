//import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TestCompt=()=>{

    const name='Sridhar';
    const [count,setCount] = useState(0);
    const [content,setContent] = useState([])

    const [seconds,setSeconds] =useState(0)

    useEffect(()=>{
        
        // axios.get('https://jsonplaceholder.typicode.com/todos')
        // .then(res => setData(res.data))
        // .catch(err => console.log(err))
        getContent();

        console.log('Component Mount');

        return()=>{
            console.log('Component Unmount')
        }


    },[])


    useEffect(()=>{
        console.log('Count Updated')
    },[count])


    useEffect(()=>{
        
        const interval = setInterval(()=>{
            setSeconds(prevSec => prevSec + 1)
        },1000)

        return() => clearInterval(interval);
        
    },[])

    async function getContent(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json()

        setContent(result)
    }

    // Ternary operators
    const [login,setLogin] = useState(false);

    const status = 'loading';



    return(
        <>
        <button className='btn btn-primary' onClick={() =>setCount( count + 1)}>{count}</button>

        {/* <ul>
        {content ? JSON.stringify(content) :'loading'}
        </ul> */}


        {
            content.map((item)=>(
                <li>{item.name}</li>
            ))
        }


        <h1>{login ? 'Welcome':'Please Login'}</h1>

        <button onClick={() =>setLogin(!login)}>
            {login ? 'Log Out':'Log In'}
        </button>

        {
            status ==='loading' ?(
            <p>Loading</p>
        )
            : status === 'error' ? (<p>Error</p>)
            : (<p>Data Loading</p>)
            
        }

{seconds}
        <Child name={name}/>

<h1>Hooks</h1>

<Hooks/>
        </>
    )
}


function Child({name}){
    return(

    <h1>Hi {name}</h1>)
}

function Hooks(){
    return(
        <>
        
        </>
    )
}

export default TestCompt