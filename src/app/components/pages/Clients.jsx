import React, { useEffect } from 'react'
import SectionHome1Testimonials from '../../sections/home/home1/section-home1-testimonials'
import { loadScript } from '../../../globals/constants';

export const Clients = () => {
    useEffect(() => {
        loadScript("js/custom.js");
      });
  return (
    <>
    
      {/* Testimonials */}
      <SectionHome1Testimonials />
    </>
  )
}
