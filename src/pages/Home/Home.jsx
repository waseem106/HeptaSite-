import React from 'react'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import Experience from '../../components/Experience/Experience'
import InternationalTour from '../../components/InternationTour/InternationalTour'
import Slider from '../../components/Slider/Slider'
import Blogger from '../../components/Blogger/Blogger'
import Customers from '../../components/Customers/Customers'
import TopDestination from '../../components/TopDestination/TopDestination'
import Welcome from '../../components/Welcome/Welcome'
import './Home.css'

const Home = () => {
  return (
    <div className='homepage'>
      <Header/>
      <Welcome/>
      <Experience/>
      <InternationalTour/>
      <Slider/>
      <Blogger/>
      <Customers/>
      <TopDestination/>
      <Footer/>
    </div>
  )
}

export default Home
