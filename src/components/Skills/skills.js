import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import Appdesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am skilled and passinate web designer with experience in creating visually appealing and user-friendly website. I have a strong understanding of design and a keen eye for details.I am proficient in HTML, CSS, and JavaScript as well as DSA illustrator in C++.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>UI/UX Design </h2>
              <p>UX design involves managing the user journey as they interact with a product or service, while UI design focuses on the actual construction of that product or service's interface.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>Web Developer</h2>
              <p>A web developer is a programmer who develops World Wide Web applications using a client–server model.</p>
            </div>
          </div>
        <div className='skillBar'>
            <img src={Appdesign} alt="AppDesign" className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>App Design</h2>
              <p>App Designer is an interactive development environment for designing an app layout and programming its behavior.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills;