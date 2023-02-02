import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagarm from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

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
            <img src={glassesimoji} alt="" />
        <div style={{top:'-4%', left: '62%'}}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Devloper' />
        </div>
   
        <div style={{top:'18rem', left: '1rem'}}>
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
        </div>

        {/* blur divs */}
        <div className='blur' style={{background:'rgb(238 210 255)'}}></div>
    <div className='blur' 
    style={{
        background: '#C1F5FF',
        top: '17rem',
        width: '21rem',
        height: '11rem',
        left: '-9rem',
    }}
    ></div>
         </div>
    </div>

  )
}

export default Intro