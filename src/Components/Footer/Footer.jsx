import React from 'react'
import './footer.css'
import Logo1 from './Assets/logo1.png'
import Logo2 from './Assets/logo 2.png'


function Footer() {
  return (
    
      <>

  <footer className="footer-distributed">
    <div className="footer-left">
      
      <img src={Logo2} className= "Mtc-logo" alt="logo" />
      
      <p className="footer-links">
        <a href="#" className="link-1">
          Home
        </a>
        <a href="#">Teams</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </p>
     
    </div>
    <div className="footer-center">
      <div>
        <p>
          <span>UPES Bidholi,
          </span> Dehradun 248007
          <span>Uttarakhand</span>
        </p>
      </div>

      <div>
  
  <br />
        <p>+91-99108 10462</p>
      </div>
      <div>
  
        <p>
          <a href="mailto:upesmtc@gmail.com">upesmtc@gmail.com</a>
        </p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>About Us</span>
      <b>  Technology is making people's lives easier.
We, here at MTC are, constantly Innovating, Inventing and Improvising.</b>
      </p>
      <div className="footer-icons">
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa fa-github" />
        </a>
      </div>
    </div>
  </footer>
</>


  )
}

export default Footer
