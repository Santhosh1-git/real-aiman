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
          <ul className='header_info' >
            <li>
          <a><i className="fa-solid fa-phone">  </i>   96 2974 6444</a>
            </li>
            <li>
            <a><i className="fa-solid fa-envelope"> </i>  principal@aimancollege.edu.in</a>          
            </li>
            <li>
            <a><i className="fa-brands fa-facebook px-2 "></i> <i className="fa-brands fa-instagram px-2  "></i> <i className="fa-brands fa-youtube px-1  "></i></a>
            </li>
            <li>
            <a> <i class="fa-regular fa-file"></i> NAAC - Appeal</a>
            </li>
            <li>
            <a> <i class="fa-regular fa-file"></i>  IQAC</a>
            </li>
            <li>
            <a> <i class="fa-regular fa-file"></i>  NACC</a>
            </li>
            <li>
            <a> <i className="fa-solid fa-book"></i> ICT </a>
            </li>
            <li>
            <a> <i className="fa-solid fa-user"></i>  IIC</a>
            </li>
            <li>
            <a> <i className="fa-solid fa-lock"></i>  RTI</a>
            </li>
            <li className='login'>
            <span  >  <i className="fa-regular fa-user"></i> ERP login</span>
            </li>
          </ul>
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
      {/* <div  >
        <Container fluid >
        <Row>
          <Col>
            <ul className="link_header" >
              <li><a className='main_link' > home </a></li>
              <li><a className='main_link' > about us </a></li>
              <li><a className='main_link' > addmissions</a></li>
              <li><a className='main_link' > department </a></li>
              <li><a className='main_link' >library </a></li>
              <li><a className='main_link' >academics</a></li>
              <li><a className='main_link' > campus life</a></li>
            </ul>
          </Col>
        </Row>
        </Container>
      </div> */}

      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">about us</a>
        </li>
        <li class="nav-item ">
        <a class="nav-link" href="#">addmissions</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">department</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">library</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">campus life</a>
        </li>
      </ul>
    </div>
  {/* </div> */}
</nav>
    </>
  )
}

export default Header
