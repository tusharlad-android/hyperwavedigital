import React from 'react'
import about from '../assets/about.jpg'
import styles from '../style'

const About = () => {
  return (
    <div className='container mx-auto px-4 mt-10'>
      <div className="flex flex-col sm:flex-row md:flex-row items-center justify-center">
      <div className="sm:w-1/2 sm:pr-8 mb-4 sm:mb-0">
          <img src={about} alt="About Us" className="w-full rounded-lg" />
        </div>
        <div className="sm:w-1/2">
        <h2 className={`${styles.heading2} font-bold mb-4 leading-tight`}>Embrace innovation, witness success.</h2>
          <p className={`${styles.paragraph}`}>
         <div mb-5>
          Our diverse team of experts crafts unparalleled digital solutions for forward-thinking Indian and global brands. We're not just marketers; we're storytellers, architects of unforgettable brand experiences that resonate with audiences.</div> 
          <br/><div className='italic'>As the CEO of a boutique digital agency, I've unlocked the marketing strategies of industry giants and startups alike. Let's elevate your brand together.</div>


          </p>
          
        </div>

      </div>
      
    </div>
  )
}

export default About
