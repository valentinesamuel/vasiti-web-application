import React from 'react'
import couple from "../assets/images/hero-couple.svg"
import coupleBackdrop from "../assets/images/couple-backdrop.svg"

const Hero = () => {
      return (
            <section className='hero'>
                  <div className='text'>
                        <h1 className='heading'>Amazing Experiences from Our Wonderful Customers</h1>
                        <p className='tagline'>Here is what customers and vendors are saying about us, you can share your stories with us too. </p>
                  </div>
                  <div className='image'>
                        <img className="couple" src={couple} alt="couple" />
                        <img className="couple-backdrop" src={coupleBackdrop} alt="couple=backdrop" /></div>
            </section>
      )
}

export default Hero