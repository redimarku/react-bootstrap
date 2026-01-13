import {Carousel, Button} from 'react-bootstrap';
import './index.css';
// import carousel_image1 from "../../images/carousel_image1.jpg";


const CarouselBootstrap = () => {
    return (

        <Carousel className='mt-5'>
            <Carousel.Item interval={1000} className='carousel-item'>
                <img src={require('../../images/carousel_image1.jpg')} text="First slide" alt='First slide' />
                <Carousel.Caption className='carousel-caption'>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button variant="outline-light">Try me</Button>
                </Carousel.Caption>
            </Carousel.Item>
             <Carousel.Item interval={500} className='carousel-item'> 
                <img src={require('../../images/carousel_image2.jpg')} text="Second slide" alt='Second slide' />
                <Carousel.Caption className='carousel-caption'>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
}

export default CarouselBootstrap;