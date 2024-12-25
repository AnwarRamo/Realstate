import React from 'react'
import {Work, SearchBar, Costomer,  Discover,PropertyList, DownloadApp, CityList,Footer } from '../components';
function Home() {
  return (
    <div>
      <SearchBar />
      <CityList />
      <Work /> 
      <PropertyList />
      <Discover />
      <DownloadApp />
      <Costomer />
      <Footer />
    </div>
  )
}

export default Home
