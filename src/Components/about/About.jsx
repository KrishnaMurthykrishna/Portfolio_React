import React from 'react'
import './about.css'
import Me from '../../assets/about1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About me</h2>
      <div className='container about_container'>
        <div className='about-me'>
          <div className='about_me-image'>
            <img  src={Me} alt='About_Image'/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
             <article className='about_card'>
               <FaAward className='about_icons'/>
               <h5>Experience</h5>
               <small>1+ Years Working</small>
             </article>
             <article className='about_card'>
               <FiUsers className='about_icons'/>
               <h5>Languages</h5>
               <small>5+ WorldWide</small>
             </article>
             <article className='about_card'>
               <VscFolderLibrary className='about_icons'/>
               <h5>Projects</h5>
               <small>5+ Project</small>
             </article>

          </div>
          <p>. My experience as junior software developer enhanced my abilities in designing, implementing and
upgrading software. One of my objectives is to keep updated with the latest IT trends and technologies. I am
confident that if given the opportunity, I can be a useful talent to the company.
</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    
        </div>
      </div>
    </section>
  )

}

export default About