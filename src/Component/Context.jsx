import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';




const ContextApi = createContext();
export const Transfer =()=>useContext(ContextApi);


const Context = (props) => {

 const [content, setContent] = useState([]);

 useEffect (()=>{
              axios.get("https://panorbit.in/api/users.json")
              .then(response=>setContent(response.data.users));
         },[]);


  return (
   <ContextApi.Provider  value={{content}}>
              {props.children}
   </ContextApi.Provider>
  )
}

export default Context
