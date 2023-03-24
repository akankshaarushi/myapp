import React from 'react'
import SideBar from '../Component/SideBar';
import '../Style/post.css'
import { Transfer } from '../Component/Context';

const Post = () => {

  const TransferData = Transfer()
  console.log(TransferData)
  return (
    <div className='post_sections'>
    <div className='sectional_divison'>
      <div className="sections1">
      <SideBar/>
      </div>
      <div className="sections2">
      <div className="profile_picture_name">
         <h3 className='header_profile_status'>Post</h3>
         <div className="profile_header_section">
         <img src="" alt="" className='picture_div'/>
          <h3>name</h3>
         </div>
        </div>
      </div>
  </div>
  <div className="comming_soon">
          <h1>Comming Soon</h1>
         </div>
    </div>
  )
}

export default Post