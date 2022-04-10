import React from 'react'
import './services.css'
import { BsCheck } from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Standalone Software Vb.net</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Planing</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Design</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Coding</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Testing</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Maintaining</p>
            </li>
          </ul>
        </article>

        {/*end of Ui*/}

        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
          <li>
              <BsCheck className='service_list-icon' />
              <p>HTML 5</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>CSS 3</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>BOOTSTRAP</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>JAVASRIPCT</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>WEBHOSTING</p>
            </li>

          </ul>
        </article>

        {/*end of Web development*/}


        <article className='service'>
          <div className='service_head'>
            <h3>Webpage Using Eclipse</h3>
          </div>
          <ul className='service_list'>
          <li>
              <BsCheck className='service_list-icon' />
              <p>HTML 5</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>CSS 3</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>BOOTSTRAP</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>JAVASRIPCT</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>BACKEND CONNECTION</p>
            </li>
          </ul>
        </article>

        {/*end of Content Creation*/}


      </div>

    </section>
  )
}

export default Services