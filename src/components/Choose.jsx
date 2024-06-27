import React from 'react'
import styles from '../style'

const Choose = () => {
  return (
    <div className='mt-20 '>
      <h2 className={`${styles.heading2} text-center`}>
        Why Choose Us?
      </h2>
      
      <p className={`${styles.paragraph} max-w mt-5 text-center mr-5 ml-5`}>
      At HyperWave, we are committed to delivering exceptional results through our expertise in creative, social, search, media, and technology.
      </p>
      <div className='grid gap-5 mt-10 sm:grid-cols-2 md:grid-cols-4'>
        <div className='border p-4 rounded-[20px] text-center  mr-4 mb-5 feature-card '>
          <h3 className={`${styles.heading3} text-[#33FFFF] font-bold`}>
          Innovative Strategies
          </h3>
          <p className={`${styles.paragraph}`}>
          Crafting cutting-edge marketing strategies tailored to your brand's unique needs.
          </p>
          
        </div>
        <div className='border p-4 rounded-[20px] text-center mr-4 mb-5 feature-card '>
          <h3 className={`${styles.heading3} text-[#33FFFF] font-bold`}>
          Engaging content
          </h3>
          <p className={`${styles.paragraph}`}>
          Creating captivating content that resonates with your target audience.
          </p>
        </div>
        <div className='border p-4 rounded-[20px] text-center mr-4 mb-5 feature-card'>
          <h3 className={`${styles.heading3} text-[#33FFFF] font-bold`}>
            Data-Driven Decisions
          </h3>
          <p className={`${styles.paragraph}`}>
          Utilizing advanced analytics to drive awareness, engagement, and conversions.
          </p>
        </div>
        <div className='border p-4 rounded-[20px] text-center feature-card mr-4 mb-5 '>
          <h3 className={`${styles.heading3} text-[#33FFFF] font-bold`}>
          Personalized Service
          </h3>
          <p className={`${styles.paragraph}`}>
          Offering dedicated support and personalized solutions to help your brand succeed.
          </p>
          
        </div>


      </div>
      
    </div>
  )
}

export default Choose
