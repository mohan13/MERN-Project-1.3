import React from 'react'
import Latest from '../../Page-Components/ComponentsHome/Latest/latest'
import Banner from '../../Page-Components/ComponentsHome/Banner'
import Service from '../../Page-Components/ComponentsHome/Service/service'
import Moto from '../../Page-Components/ComponentsHome/moto/Moto'
import Trend from '../../Page-Components/ComponentsHome/Trending/Trend'
import CustomerFeedback from '../../Page-Components/ComponentsHome/CustomerFeedback/CustomerFeedback'
const Home = () => {
  return (
    <div>
      <Banner/>
      <Moto/>
      <Trend/>
      <CustomerFeedback/>
      <Trend/>
      <Latest/>
      <Service/>
    </div>
  )
}

export default Home