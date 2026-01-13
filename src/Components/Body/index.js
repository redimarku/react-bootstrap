
import {Container, Row, Col, Button} from 'react-bootstrap/';

const IconBox = () => {
  return (
    <Container className='text-center m-5 mx-auto bg-danger'>
      
      <Row className='p-5'>
        <h3 className='mb-5'>We’re solving the biggest problems in furniture</h3>
        <Col xs={12} md={4}>
        
          <img src={require('../../images/worldwide.png')}  alt='worldwide logo' className='w-25 mb-3' />
            <h6>Fast & free shipping</h6>
            <p>Every single order ships for free. No minimums,
no tiers, no fine print whatsoever.</p>
        
        </Col>
        <Col xs={12} md={4}>
          
          <img src={require('../../images/worldwide.png')}  alt='worldwide logo' className='w-25 mb-3' />
            <h6>Fast & free shipping</h6>
            <p>Every single order ships for free. No minimums,
no tiers, no fine print whatsoever.</p>
         
        </Col>
        <Col xs={12} md={4}>
          <div className='iconbox'>
          <img src={require('../../images/worldwide.png')}  alt='worldwide logo' className='w-25 mb-3' />
            <h6>Fast & free shipping</h6>
            <p>Every single order ships for free. No minimums,
no tiers, no fine print whatsoever.</p>
        </div> 
        </Col>
      </Row>

   </Container>



  );
}

const Shop = () => {
  return (
    <div>
      <IconBox />

      <Container className='mb-5'>
      
      <Row>
        <Col xs={8} md={6} className='my-auto lh-lg'>
          <h6 className='mb-4'>GET THE GROW-HOW</h6>
          <h1>Ultimate Guide to <br />
Summer Plant Care</h1>
          <p>Keep your plants healthy and thriving this summer! Get pro tips from our expert Grow-How® Team.</p>
           <Button variant="outline-danger">Try me</Button> 
        </Col>
        <Col xs={4} md={6}>
          <img src={require('../../images/collection-plant.jpg')}  alt='collection-plant' className='w-100 h-100'/>
            
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Shop;





