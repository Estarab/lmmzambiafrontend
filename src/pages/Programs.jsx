import React from 'react'
import ProgramsComponent from '../components/ProgramsComponent'
//import ProgramsSlider from '../components/ProgramsSlider'
import SliderContainer from '../components/SliderContainer';

function Programs() {
  return (
    <div className='bg-slate-100'>
      <SliderContainer/>
      {/* <ProgramsSlider/> */}
      <ProgramsComponent/>
    </div>
  )
}

export default Programs

