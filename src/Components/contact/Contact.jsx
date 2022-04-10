import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine} from  'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'TZYZNmTrq3tyL6C0I')
    };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>Krishna@gmail.com</h5>
            <a href='mailto:krishnamurthyjustin@gmail.com'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messager</h4>
            <h5>Krishna.krupa</h5>
            <a href='https://www.facebook.com/krishna.krupa.16718'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp  className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8845413131</h5>
            <a href='https://api.whatsapp.com/send?886778920'>Send a Message</a>
          </article>
        </div>
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows={7} placeholder='Your Mesage' required/>
          <button tyupe="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact