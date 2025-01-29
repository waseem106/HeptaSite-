import React from 'react'
import './TopDestination.css'
import image1 from '../../../public/images/img_1.jpg'
import image2 from '../../../public/images/img_2.jpg'
import image3 from '../../../public/images/img_3.jpg'
import image4 from '../../../public/images/img_5.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'; // Regular star




const data=[
  {
    image:image1,
    name:`Food & Wines`,
    reviews:`3,239 reviews`
  },
  {
    image:image2,
    name:`Food & Wines`,
    reviews:`4,239 reviews`
  },
  {
    image:image3,
    name:`Food & Wines`,
    reviews:`6,239 reviews`
  },
  {
    image:image4,
    name:`Food & Wines`,
    reviews:`8,239 reviews`
  },

]
const stars = Array(4).fill(0); 

const TopDestination = () => {
  return (
    <div className='TopDestination'>

      <div className="details">
        <h1>Top Destination</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
      </div>

      <div className="cards">
        {data.map((data,index)=>(
            <div className="card-item" key={index}>
            <img src={data.image} alt="" />
            <h3>{data.name}</h3>
            <span className='starsdiv'>
            {stars.map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className='stars'/>
            ))}
            <FontAwesomeIcon icon={regularStar} className='empty-star'/>
            <p>{data.reviews}</p>
           </span>

          
          </div>
        ))}
      

        </div>
    </div>
  )
}

export default TopDestination
