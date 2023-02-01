import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagarm from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Pratyush Singh</span>
                <span>Frontend Developer with high level of experince in web designing and devlopment
                    , producting the Quality work
                </span>
            </div>
            <button className=' button i-button'>Hire me</button>
            <div className='i-icons'>
                <a href='https://www.google.co.in/'> <img src={Github} alt="Github Logo" /></a>
               <a href=''> <img src={LinkedIn} alt="Linkedin Logo" /></a>
               <a href=''>     <img src={Instagarm} alt="Instagram Logo" /></a>
           
            </div>
        </div>
        <div className="i-right">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={boy} alt="" />
            <img src={thumbup} alt="" />
            <img src={crown} alt="" />
            <img src={glassesimoji} alt="" />
        </div>
    </div>
  )
}

export default Intro