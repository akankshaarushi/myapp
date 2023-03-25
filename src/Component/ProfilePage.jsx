import React, {useState, useEffect} from 'react';
import '../Style/profilePage.css';
import '../Component/SideBar';
import { useParams } from 'react-router-dom';
import SideBar from '../Component/SideBar';
import { Transfer } from './Context';

const ProfilePage = () => {

  const TransferData = Transfer()

           const param = useParams();  
           console.log(param)

           const [userData, setUserData]= useState({});
       
           useEffect(() => {
             const variables = TransferData.content.filter((answer)=>{
              return answer.id==param.id
             })
             setUserData(variables[0])
           }, [])
           

  return (
    <div className="head_bar">
        
        <div className="profile_pic_name">
         <h3 className='header_status'>Profile</h3>
         <div className="profile_head_div">
         <img src={userData.profilepicture} alt="Image" className='pic_div'/>
          <h3>{userData.name}</h3>
         </div>
         
        </div>
              <div className="profile_div">
    <div className='profile_container'>
              <div className="section1">
                 <SideBar/>
              </div>

            <div className="section2">
           <img src={userData.profilepicture} alt="Image" className='image_pic'/>
            <h2 className='head_sec'>{userData.name}</h2>
            <div className="profile_information">
              <div className="profile_details">
              <label>Username:</label>
              <h4 className='profile_users'>{userData.username}</h4>
              </div>
              <div className="profile_details">
              <label>email:</label>
              <h4 className='profile_users'>{userData.email}</h4>
              </div>
              <div className="profile_details">
              <label>Phone:</label>
              <h4 className='profile_users'>{userData.phone}</h4>
              </div>
             <div className="profile_details">
             <label>website:</label>
              <h4 className='profile_users'>{userData.website}</h4>
             </div>
            </div>
            <div className="company_div">
              <h2 className='head_sec'>Company</h2>
              <div className="company_info">
              <label>Name:</label>
              <h4 className='company_name'>{userData.name}</h4>
              </div>
              <div className="company_info">
              <label>catchPhrase:</label>
              <h4 className='company_name'>{userData.name}</h4>

              </div>
              <div className="company_info">
              <label>bs:</label>
              <h4 className='company_name'>{userData.website}</h4>
              </div> 
            </div>
       </div>
       <div className="section3">
        <div className="address_bar">
            <h2 className='head_section'>Address :</h2></div>
            <div className="profile_address">
            <div className="address_content">
              <label>street:</label>
              <h4 className='address_user'>{userData.name}</h4>
            </div>
            <div className="address_content">
              <label>suite:</label>
              <h4 className='address_user'>{userData.website}</h4>
            </div>
            <div className="address_content">
              <label>city:</label>
              <h4 className='address_user'>{userData.name}</h4>
            </div>
            <div className="address_content">
              <label>zipcode:</label>
              <h4 className='address_user'>{userData.phone}</h4>
            </div>
           </div>
            <div className="geo_location">
              <img src="https://twilio-cms-prod.s3.amazonaws.com/images/image_30.width-800.png" alt="Map" className='map_location' />
            </div>
       </div>
    </div>
    </div>
    </div>
  )
}

export default ProfilePage