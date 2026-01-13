import {Col, Row, Nav,Form, Button} from 'react-bootstrap';
import './index.css';
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeFooter = () =>{
    return(
          <footer className="footer bg-success">
            <Row className='p-5'>
        <Col xs={6} md={3}>
           <h5>Section</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                Features
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                Pricing
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                FAQs
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                About
              </Nav.Link>
            </Nav>
        </Col>
        <Col xs={6} md={3}>
          <h5>Section</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                Features
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                Pricing
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                FAQs
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                
              </Nav.Link>
            </Nav>
        </Col>
        <Col xs={6} md={3}>
          <h5>Section</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                Features
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                Pricing
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                FAQs
              </Nav.Link>
              <Nav.Link href="#" className="p-0 mb-2 text-body-secondary">
                <ul className='social-icon'>
                 <li>
      <a href="https://instagram.com">
        <FaInstagram size={32} />
      </a>
    </li>

              <li>
      <a href="https://www.facebook.com/">
        <FaFacebook size={32} />
      </a>
    </li>

    <li>
      <a href="https://linkedin.com">
        <FaLinkedin size={32} />
      </a>
    </li>
                </ul>
                
              </Nav.Link  >
            </Nav>
        </Col>
        <Col xs={6} md={3}>
        <h4>Sign Up for Email</h4>
        <p>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
         <Form>
      <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlInput1">
        
        <Form.Control type="email" placeholder="Enter your email..." />
         <Button variant="success" className='submit-button'>
      Subscribe
    </Button>
      </Form.Group>
     
    </Form>
        </Col>
        <hr/>
         <div className='footer-last'>
        <span>© 2025 Ecomus Store. All Rights Reserved</span>
        <ul className='payment-method'>
            <li><img src={require('../../images/visa.png')}  alt='' /></li>
            <li><img src={require('../../images/visa.png')}  alt='' /></li>
            <li><img src={require('../../images/visa.png')}  alt='' /></li>
            <li><img src={require('../../images/visa.png')}  alt='' /></li>
            <li><img src={require('../../images/paypal.png')}  alt='' /></li>
        </ul>
         
        
      </div>
      </Row>
      <hr/>
            
        </footer>
    )
}

export default HomeFooter;