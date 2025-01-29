import React from 'react'
import './Slider.css'
import 'react-slideshow-image/dist/styles.css'
import {Fade, Zoom,Slide} from 'react-slideshow-image'
import image1 from '../../../public/images/slider-1.jpg'
import image2 from '../../../public/images/slider-2.jpg'
import image3 from '../../../public/images/slider-3.jpg'
import image4 from '../../../public/images/slider-4.jpg'
import image5 from '../../../public/images/slider-5.jpg'
import image6 from '../../../public/images/slider-6.jpg'



const images=[image1,image2,image3,image4,image5,image6]


const Slider = () => {
  return (
    <>
    <div className='slider'>
      <Fade >
        {images.map((image,index)=>(
        <div key={index} >
          <div className='sliderstyle' style={
            {display:'flex',
            height:'100vh',
            width:'100%',
            backgroundImage:`url(${image})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
          }}>
            
          </div>
        
        </div>
        
        
  
        ))}
      </Fade>
     
     
        
    </div>
    <div className='styledborder'/> 

   
    </>
  )
}

export default Slider
