import PropTypes from 'prop-types'

import ProjectCard from '../ProjectCard'
import PrevBtn from '../../layout/assets/carouselPrev.png'
import NextBtn from '../../layout/assets/carouselNext.png'

import { useState } from 'react'



function Carousel({items}) {
  const [activeItem, setActiveItem] = useState(1)
  

  const nextItem = () => {
    setActiveItem(activeItem === 5 ? 1 : activeItem + 1)
  }

  const prevItem = () => {
    setActiveItem(activeItem === 1 ? 5 : activeItem - 1)
  }

  // const btnDisable = () => {
  //   if ((activeItem === 1) || ())
  // }
  

  return (
    <div className='carousel'>
      <div className='carouselInner'>
        {items.map((item) => (
          <div
            className={
              (item.id !== activeItem ? 'carouselItem' : 'carouselItemActive')
            }>
            <ProjectCard
              key={item.id}
              project={item}
            />
          </div>
        ))}
      </div>
      <button
        className='carouselPrev'
        onClick={prevItem}
      >
      
        <img
          src={PrevBtn}
          alt='previous'
        />
      </button>
      <button
        className='carouselNext'
        onClick={nextItem}
        >
        <img
          src={NextBtn}
          alt='next'
        />
      </button>
    </div>
  )
}

Carousel.propTypes = {}

export default Carousel
