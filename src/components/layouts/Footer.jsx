import React from 'react'
import {AiFillYoutube,AiFillLinkedin,AiFillGithub,AiFillInstagram} from "react-icons/ai"
export const Footer = () => {
  return (
    <footer>
     <div>
        <h2>Khopadi Resto</h2>
        <em>We give attention to genuine feedback</em>
        <br/>
        <strong>All right reserved @KhopadiResto</strong>
     </div>
     <aside>
        <h4>Follow One of Our Khopadi</h4>
        <a href='https://youtube.com' ><AiFillYoutube /></a>
        <a href='https://linkedin.com/in/krishan-kumar-630483245'><AiFillLinkedin /></a>
        <a href='https://instagram.com/krishnaaa_kumawat'><AiFillInstagram /></a>
        <a href='https://github.com/'><AiFillGithub /></a>
     </aside>
    </footer>
  )
}
