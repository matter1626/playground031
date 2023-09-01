import './App.css';
import Land from './components/land';
import Generator from './components/questionGenerator';
import {BrowserRouter as Router, Route, Routes, NavLink, useNavigate} from 'react-router-dom';
import Protected from './components/proctected';
import Cookies from 'js-cookie';
import Home from './components/home';
import { useState } from 'react';

function App() {

  const logout = () => {
    Cookies.remove('user');
    window.location.reload(false);
  }

  let[test, setTest] = useState(false)

  return (
    <div className="App">

    {/* <Route  element={<Protected
          cookie={Cookies.get('user')}/>}></Route> */}

    {/* <button
      onClick={()=>console.log(Cookies.get('user'))}
      >app cookie</button> */}

    {test === true ? <button
    onClick={()=>logout()}
    >log out</button>:<div></div>}

    {/* <button
    onClick={()=>console.log(test)}
    >?</button> */}

    <br></br>
    
    <NavLink to='/home'>home.</NavLink>
    {/* <NavLink to='/login'>.login.</NavLink> */}
    <NavLink to='/game'>.game.</NavLink>
  
    <Routes>
      
      <Route    element={<Protected/>}>

        <Route  path='/home'
                element={<Home/>}/>

        <Route  path='/game'
                element={<Generator/>}/>

      </Route>

      <Route 
        path='/login'
        element={<Land control={setTest}/>}/>

      <Route 
        path='/home'
        element={<Home/>}/>



    </Routes>

        {/* 
        <Route element={<Protected
                      cookie={Cookies.get('user')}/>}>

            <Route    path='admin' 
                      element={<NewStudent 
                      newUser={newUser}/>}/>

            <Route    path='test' 
                      element={<Questions
                      ansMouse={ans} 
                      reset={reset} 
                      uploader={uploadMatrix}/>}/>

            <Route    path='results' 
                      element={<Results 
                      avgMatrix={avgMatrix} 
                      lastMatrix={lastMatrix}/>}/>

          </Route> 
          */}
      
    </div>
  );
}

export default App;
