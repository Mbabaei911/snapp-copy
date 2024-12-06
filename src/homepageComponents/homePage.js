import React from 'react'


import FirstSectionComponent from '@homepageComponents/firstSectionComponent'

import SecondSectionComponent from '@homepageComponents/secondSectionComponent'
import SwiperComponent from '@homepageComponents/swiperComponent'
import AnswerToNeedsComponent from '@homepageComponents/answerToNeedsComponent'
import DriversSection from '@homepageComponents/driversSection'
import DownloadSection from '@homepageComponents/downloadSection'

function HomePage() {
  return (
    <div className=' '>
      <FirstSectionComponent/>
      <DownloadSection/>
      <SecondSectionComponent/>
      <SwiperComponent/>
      <AnswerToNeedsComponent/>
      <DriversSection/>
    </div>
  )
}

export default HomePage