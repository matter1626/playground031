import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Navigate, redirect } from 'react-router-dom'

function Land(props) {

    let[guest,setGuest] = useState({})

    let[log, setLog] = useState(false)

    const onChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        guest[name] = value
        setGuest(guest);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(guest);
        setCookie();
        log = true
        setLog(log)
        props.control(true)
    }

    const setCookie = () => {
        Cookies.set('user',guest.password)
    }

    if(log === true){
        console.log('welcome');
        return <Navigate to='/game'/>
    }
    if(log === false){
        console.log('access denied')   
        return (

        <div>

            {/* <button
            onClick={()=>console.log(Cookies.get('user'))}
            >cookie</button> */}

            <form
                onSubmit={onSubmit}>
                
                <input
                onChange={onChange}
                placeholder='username'
                name='username'
                ></input>

                <br></br>

                <input
                onChange={onChange}
                placeholder='password'
                type='password'
                name='password'
                ></input>

                <br></br>

                <input
                type='submit'
                ></input>
            </form>


        </div>
    );

    }
}

export default Land;