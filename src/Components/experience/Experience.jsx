import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5> what skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Java Script</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Eclipse IDE</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/** End Of Front End */}

        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Mqsql</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Oracle</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Ms Access</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Mango Db</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Oracle 10g</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>RDBMS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience