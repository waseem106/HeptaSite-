import React from 'react'
import image1 from '../../../public/images/person_1.jpg'
import image2 from '../../../public/images/person_2.jpg'
import image3 from '../../../public/images/person_3.jpg'
import './Customers.css'

const data=[
  {
    image:image1,
    paragraph:`“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
    name:`— Clare Gupta`
  },
  {
    image:image2,
    paragraph:`“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
    name:`— Clare Gupta`
  },
  {
    image:image3,
    paragraph:`“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
    name:`— Clare Gupta`
  },
  
]

const Customers = () => {
  return (
    <div className='customers'>
      
      <h1>Happy Customers</h1>
      <div className="card">
        {data.map((data,index)=>(
           <div className="carditem" key={index}>
           <img src={data.image} alt="" />
           <p>{data.paragraph}</p>
           <h4>{data.name}</h4>
         </div>
        ))}
      </div>

    </div>
  )
}

export default Customers
