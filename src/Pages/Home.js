import CarouselBootstrap from "../Components/Carousel";
import Shop from '../Components/Body';




const Home = () => {
    return (
        <div>
            
        <h1 className="text-center mt-5 text-info">This is home page</h1>
        
        <CarouselBootstrap />  
        <Shop />
        

        </div>
    );
}

export default Home;