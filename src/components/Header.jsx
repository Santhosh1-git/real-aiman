import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/Header.css'

import logo from '../assets/logo fd/logo.png'
function Header() {
  
  return (
    <>     
    {/* top header */}
    <Container fluid >  
        <Row id={'header_bg'} >
          <Col >
          <nav class="navbar navbar-expand-lg">
    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav  me-auto  ">
        <li class="nav-item">
        <a><i className="fa-solid fa-phone">  </i>   96 2974 6444</a>
        </li>
        <li class="nav-item">
        <a><i className="fa-solid fa-envelope"> </i>  principal@aimancollege.edu.in</a>          
        </li>
        <li class="nav-item ">
        <a><i className="fa-brands fa-facebook px-2 "></i> <i className="fa-brands fa-instagram px-2  "></i> <i className="fa-brands fa-youtube px-1  "></i></a>
        </li>
        <li class="nav-item">
        <a> <i class="fa-regular fa-file"></i> NAAC - Appeal</a>
        </li>
        <li class="nav-item">
        <a> <i class="fa-regular fa-file"></i>  IQAC</a>
        </li>
        <li class="nav-item">
        <a> <i class="fa-regular fa-file"></i>  NACC</a>
        </li>
        <li class="nav-item">
        <a> <i className="fa-solid fa-book"></i> ICT </a>
        </li>
        <li class="nav-item">
        <a> <i className="fa-solid fa-lock"></i>  RTI</a>
        </li>
        <li class="nav-item login">
        <span  >  <i className="fa-regular fa-user"></i> ERP login</span>
        </li>
      </ul>
    </div>
</nav>
          </Col>
        </Row>
      </Container>   
      {/* header line two */}
      <Container fluid>
        <Row>
          <Col lg={6}>
          <div>
          <img src={logo} alt="not found" className='logo' />
          </div>
          </Col>
          <Col lg={6}>
          <ul className='links_buttons' >
            <li className='hover-underline'><a className='pay-btn' >pay online  <i className="fa-solid fa-arrow-right"></i></a></li>
            <li><a className='adm-btn'>admissions <i className="fa-solid fa-arrow-right"></i></a></li>
            <li><a className='link' >quick links <i className="fa-solid fa-arrow-right"></i>  </a></li>
            <li><a className='link' ><i className="fa-solid fa-phone">  </i> contact us</a></li>
          </ul>
          </Col>
        </Row>
      </Container>
      <hr />
      {/* main header */}
     

      
    </>
  )
}

export default Header
