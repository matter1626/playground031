import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';

function Protected() {

    let[checcer,setCheccer] = useState(null)

    useEffect(()=>{
        let checcer = Cookies.get('user')
        console.log('checking route')
        console.log(checcer)
        setCheccer(checcer);
    },[])


    if(checcer === null){
            return <div>Loading...</div>
        } else if(checcer === '123'){
            console.log('sending outlet')
            return <Outlet/>
        } else {return <Navigate to='login'/>}

}

export default Protected;

// useEffect(() => {
//     axios.post('http://localhost:3004/auth', token)
// .then(res => {
//     console.log(res.data); // Axios automatically parses JSON response
//     console.log(res.data.msg);
//     setAuth(res.data.msg)
// })
// .catch(error => {
//     console.error('An error occurred:', error);
// });
// }, [props.cookie])

// if(auth === null){
//     return <div>Loading...</div>}

// else if(auth === true){
//     return <Outlet/>}

// else{return <Navigate to="/login"/>}