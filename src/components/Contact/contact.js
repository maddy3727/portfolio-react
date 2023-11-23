import React,{ useRef }from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Mircosoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nafa0p1', 'template_pwho5xb', form.current, 'lE1PBAkppiXQb07pF')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  }; 
  return (
    <section id='contactPage'>
      <div id="clients">
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>
          I have had the opportunity to work with a diversegroup of companies.
          Some of the notable companiesI have worked with includes
        </p>
        <div classname="clientImgs">
          <img src={Walmart} alt="Client" className='clientImg'/>
          <img src={Adobe} alt="Client" className='clientImg'/>
          <img src={Mircosoft} alt="Client" className='clientImg'/>
          <img src={Facebook} alt="Client" className='clientImg'/>
        </div>
      </div>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='your_name'/>
          <input type='email' className='email' placeholder='Your Email' name='your_email'/>
          <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className='submitBtn'>submit</button>
          <div className='links'>
            <a href='https://www.facebook.com/madhav.agarwals'><img src={FacebookIcon} alt='Facebook' className='link'/></a>
            <a href='https://twitter.com/MadhavAgar99078'><img src={TwitterIcon} alt='twitter' className='link'/></a>
            <a href='https://www.youtube.com/channel/UCerWKAdASlklKvsTwgpe8aw'><img src={YoutubeIcon} alt='Youtube' className='link'/></a>
            <a href='https://www.instagram.com/_madhav____agarwal__/'><img src={InstagramIcon} alt='instagram' className='link'/></a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact