import React from 'react'
import './Blogger.css'
import image1 from '../../../public/images/slider-5.jpg'
import image2 from '../../../public/images/slider-6.jpg'
import image3 from '../../../public/images/img_4.jpg'



const cardData=[
  {image:image1,
    date:`February 26, 2018`,
    heading:`45 Best Places To Unwind`,
    paragraph:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts`,
  },
  {image:image2,
    date:`February 26, 2018`,
    heading:`45 Best Places To Unwind`,
    paragraph:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts`,
  },
  {image:image3,
    date:`February 26, 2018`,
    heading:`45 Best Places To Unwind`,
    paragraph:`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts`,
  },
  
]

const Blogger = () => {
  return (
    <div className='Blogger'>

      <div className="heading">
        <h1>Recent Blog Post</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
      </div>

      <div className="card">
        {cardData.map((card,index)=>(
            <div className="cardItem" key={index}>
            <img src={card.image} alt="" />
            <h3>{card.date}</h3>
            <h2>{card.heading}</h2>
            <p>{card.paragraph}</p>
          </div>
        ))}
      

      </div>

    </div>
  )
}

export default Blogger
