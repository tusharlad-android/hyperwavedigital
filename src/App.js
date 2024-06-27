import React from 'react'
import styles from './style'

import {Navbar,
  About,
  Choose,
 
  Hero,
  Stats,
  Footer} from './components';
import Buisness from './components/Buisness';

const App = () => {
  
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section id="home">

          <Hero/>
          </section>

        </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          
          <Stats/>
          <section id="services">

          <Buisness/>
          </section>
          <Choose/>
          <section id="about">
          <About/>

          </section>
          <section id="contacts">

          <Footer/>
          </section>

        </div>

      </div>
    </div>
    
  )
}

export default App
