import React from 'react'
import styles from '../style'
import content from '../assets/content.svg'
import branding from '../assets/branding.svg'
import design from '../assets/design.svg'
import marketing from '../assets/marketing.svg'
import strategy from '../assets/strategy.svg'
import technology from '../assets/technology.svg'

const Buisness = () =>(
    <div className="flex flex-wrap justify-center ">
  <div className="w-full sm:w-1/2 md:w-1/3  p-4 ">
  
  <div className="border p-4 rounded-[20px]  text-center flex flex-col items-center justify-center h-full aspect-w-1 aspect-h-1  feature-card">
  
  <img src={strategy} alt=''className='w-16 h-16 mb-5'/>
   <h6 className='text-xl text-poppins text-white font-bold '>STRATEGY</h6>
   <p className={`${styles.paragraph} mt-5`}>Research<br/>Analysis<br/>Positioning<br/>Purpose<br/>Market Strategy</p>
  </div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3  p-4 ">
  <div className="border p-4 rounded-[20px] text-center flex flex-col items-center justify-center h-full aspect-w-1 aspect-h-1  feature-card">
  <img src={branding} alt='' className='w-16 h-16 mb-5'/>
   <h6 className='text-xl text-poppins text-white font-bold '>BRANDING</h6>
   <p className={`${styles.paragraph} mt-5`}>Identity<br/>Voice<br/>Positioning<br/>Customer Journey<br/>Brand Guidelines</p>
  </div>
    
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3  p-4 ">
  <div className="border p-4 rounded-[20px] text-center flex flex-col items-center justify-center h-full aspect-w-1 aspect-h-1  feature-card">
    <img src={content} alt='' className='w-16 h-16 mb-5'/>
   <h6 className='text-xl text-poppins text-white font-bold '>CONTENT</h6>
   <p className={`${styles.paragraph} mt-5`}>Video<br/>Photography<br/>Animations<br/>CopyWriting<br/>Social Content</p>
  </div>

  </div>
  <div className="w-full sm:w-1/2 md:w-1/3  p-4 ">
  <div className="border p-4 rounded-[20px] text-center flex flex-col items-center justify-center h-full aspect-w-1 aspect-h-1  feature-card">
  <img src={design} alt='' className='w-16 h-16 mb-5'/>
   <h6 className='text-xl text-poppins text-white font-bold '>DESIGN</h6>
   <p className={`${styles.paragraph} mt-5`}> App Design<br/>Website Design<br/>Traditional Design<br/>Experience Design<br/>Market Strategy</p>
  </div>
    
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3  p-4 ">
  
  <div className="border p-4 rounded-[20px] text-center flex flex-col items-center justify-center h-full aspect-w-1 aspect-h-1  feature-card">
  <img src={marketing} alt='' className='w-16 h-16 mb-5'/>
   <h6 className='text-xl text-poppins text-white font-bold '>MARKETING</h6>
   <p className={`${styles.paragraph} mt-5`}>Banner Ads & Retargeting<br/>CRM<br/>Email Campaigns<br/>Social Campaigns<br/>Influencer Marketing</p>
  </div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3  p-4 ">
  <div className="border p-4 rounded-[20px] text-center flex flex-col items-center justify-center h-full aspect-w-1 aspect-h-1 feature-card">
  <img src={technology} alt='' className='w-16 h-16 mb-5'/>
   <h6 className='text-xl text-poppins text-white font-bold '>TECHNOLOGY</h6>
   <p className={`${styles.paragraph} mt-5`}>Content Management Systems<br/>Website Development<br/>App Development<br/>E-Commerce<br/>Market Strategy</p>
  </div>

  </div>
</div>
  )


export default Buisness
