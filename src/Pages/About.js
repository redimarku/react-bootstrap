import { Link, Outlet } from "react-router-dom";


// import Company from "./Company";

const About = () =>{
    return(
        <div className="text-center">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
    <nav>
        <Link className="me-3 " to="/about/team">Our team</Link>
        <Link to="/about/company">Our company</Link>
      </nav>
                
        <Outlet />       
                
            

      

        
  </div>

    );
}



export default About;