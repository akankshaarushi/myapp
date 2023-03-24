import React, { useEffect, useState } from 'react';
import '../Style/landingPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  const [users, setUsers] = useState([]);

useEffect (()=>{
     axios.get("https://panorbit.in/api/users.json")
     .then(response=>setUsers(response.data.users));
},[]);


  return (
    <div className='main_div'>
       <div className="container">
              <h1>Select an account</h1>
              <div className="main_container">
              {
                            users.map(user=>(
                                          <Link to={`/profilePage/${user.id}`} key={user.id} className="user_container">
                                                        <div className="image_container">
                                                        <img src={user.profilepicture} alt={user.name} className="image_div"/>
                                                        </div>
                                                        <p className='user_names'>{user.name}</p>
                                          </Link>
                                          
                            ))
              }

              </div>
             
              </div>       
    </div>
  )
}

export default LandingPage