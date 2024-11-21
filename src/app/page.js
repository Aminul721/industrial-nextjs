import React from 'react'
import Banner from '@/components/landingPage/banner'
import Demos from '@/components/landingPage/demos'
import Header from '@/components/landingPage/header'
import Footer from '@/components/sections/footer'

const Home = () => {
  return (
    <main>
      <Header />
      <Banner />
      <Demos />
      <Footer />
    </main>
  )
}

export default Home