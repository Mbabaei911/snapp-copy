import React from 'react'
import FirstSectionComponent from './firstSectionComponent'
import SecondSectionComponent from './secondSectionComponent'
import SwiperComponent from './swiperComponent'
import AnswerToNeedsComponent from './answerToNeedsComponent'
import DriversSection from './driversSection'
function HomePage() {
  return (
    <div className=' '>
      <FirstSectionComponent/>
      <SecondSectionComponent/>
      <SwiperComponent/>
      <AnswerToNeedsComponent/>
      <DriversSection/>
    </div>
  )
}

export default HomePage