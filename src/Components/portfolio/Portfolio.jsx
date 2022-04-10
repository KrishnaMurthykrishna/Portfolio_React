import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/New Project.jpg'
import IMG2 from '../../assets/New Project (1).jpg'
import IMG3 from '../../assets/New Project (2).jpg'
import IMG4 from '../../assets/New Project (3).jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const data = [
    {
      id: 1,
      image:IMG1,
      title:'Karle-Master',
      github:'https://github.com/KrishnaMurthykrishna/Karle-master',
    },
    {
      id: 2,
      image:IMG2,
      title:'Colmar_Project',
      github:'https://github.com/KrishnaMurthykrishna/Colmar_academy',
    },
    {
      id: 3,
      image:IMG3,
      title:'Musical App',
      github:'https://github.com/KrishnaMurthykrishna/MusicApp_React',
    },
    {
      id: 4,
      image:IMG4,
      title:'Weather',
      github:'https://github.com',
          }]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo})=>{
             return (
            <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
         
            <h3>{title}</h3>
            <div className='portfolio_item-cta'>
            <a href={github} className='btn' target={'_blank'}> Github</a>
          </div>
        </article>
             )
          })
            }
</div> 
        
    </section>
  )
}

export default Portfolio