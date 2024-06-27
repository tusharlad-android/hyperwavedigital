import React from 'react'
import styles from '../style'

const Stats = () => 
 (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      <div key="stats-1" className='{`flex-1 flex justify-start items-center flex-row m-3'>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>50+</h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase'>Creative Brains</p>

      </div>
      <div key="stats-2" className='{`flex-1 flex justify-start items-center flex-row m-3'>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>250+</h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase'>Clients Served</p>

      </div>
      <div key="stats-3" className='{`flex-1 flex justify-start items-center flex-row m-3'>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>35+ </h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase'>Content Creators</p>

      </div>

      
    </section>
  )


export default Stats
