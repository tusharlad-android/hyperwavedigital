import React from 'react'

import styles from '../style'
import Logo from './Logo'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
        <div className='flex-1 flex flex-col justify-start mr-10 text-white'>
        <Logo/>
        <p className={`${styles.paragraph} mt-4 ml-5 max-w-[310px]`}>Your Success, Our Strategy</p>
        </div>
        
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          <div key="useful" className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              Useful Links
            </h4>
            <ul className='list-none mt-4'>
              <li key="aboutLink" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4'>
                About us
              </li>
              <li key="servicesLink" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4'>
                Services
              </li>
              <li key="portfolioLink" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4'>
                Portfolio
              </li>

              <li key="exploreLink" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>
                Explore
              </li>
            </ul>

          </div>
          <div key="community" className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              Community
            </h4>
            <ul className='list-none mt-4'>
              <li key="helpLink" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4'>
                Help Center
              </li>
              <li key="partnersLink" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4'>
                Partners
              </li>
              <li key="SuggestionsLink" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4'>
                Suggestions
              </li>

              <li key="blogLink" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>
                Blog
              </li>
            </ul>

          </div>
          <div key="partner" className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              Partner
            </h4>
            <ul className='list-none mt-4' >
              <li key="ourLink" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4'>
                Our Partner
              </li>
              <li key="becomeLink" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4'>
                Become a Partner
              </li>
              
            </ul>

          </div>

        </div>
        
        

      </div>

      <div className='flex sm:flex-row flex-col mb-10 mt-10 justify-between ml-5 w-full'>
  <div>
    <h2 className={`${styles.heading4}`}>
      Contact No :
    </h2>
    <p className={`${styles.paragraph}`}>
      +91-99672 73547    
    </p>
    <p className={`${styles.paragraph}`}>
      +91-9221874960  
    </p>
  </div>
  
  <div className='xs:ml-0 lg:ml-10'>
    <h2 className={`${styles.heading4}`}>
      Email id :
    </h2>
    <p className={`${styles.paragraph}`}>
      hyperwavedigi@gmail.com
    </p>
  </div>
</div>


      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-poppins text-white text-center text-[18px] leading-[27px] '>
          2024 | All Rights Reserved by HyperWave 
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          <a href=' https://www.instagram.com/digitalhyperwave1?igsh=MWU2OXFmcm5lNWdocw==' target="_blank" rel="noopener noreferrer">
          <img key="social-media-1" src={instagram} alt="social-media-1" className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}/>

          </a>
          <a href=' https://www.facebook.com/share/NNzRwyB7H3bzvF2Y/?mibextid=qi2Omg' target="_blank" rel="noopener noreferrer">
          <img key="social-media-2" src={facebook} alt="social-media-2" className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}/>
            
          </a>
          <a href='https://x.com/hyperwavedigi?t=5rW-0GDywRk30eQzOVesAQ&s=08' target="_blank" rel="noopener noreferrer">
          <img key="social-media-3" src={twitter} alt="social-media-3" className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}/>
            
          </a>
          
          <a href=' https://www.linkedin.com/in/hyperwave-digital-862397314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer">
          <img key="social-media-4" src={linkedin} alt="social-media-4" className={`w-[21px] h-[21px] object-contain cursor-pointer `}/>
            
          </a>

        </div>
      </div>
      
       
    </section>
  )
}

export default Footer
