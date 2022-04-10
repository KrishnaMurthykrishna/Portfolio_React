import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avartar:AVTR1,
    name: 'lilly',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Dicta deserunt minus repellendus. Accusantium quis'
  },
  {
    avartar:AVTR2,
    name: 'lilly',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Dicta deserunt minus repellendus. Accusantium quis'
  },
  {
    avartar:AVTR3,
    name: 'lilly',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Dicta deserunt minus repellendus. Accusantium quis'
  },
  {
    avartar:AVTR4,
    name: 'lilly',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Dicta deserunt minus repellendus. Accusantium quis'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From clients      </h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
         >
        {
          data.map(({avartar, name, review}, index)=>{
              return(
                <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avartar}/>
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}
                </small>
              </SwiperSlide>

              )
        })
      }
        
      </Swiper>
    </section>
  )
}

export default Testimonials