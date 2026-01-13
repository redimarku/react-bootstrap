import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from './Components/Header';
import About from './Pages/About'
import Home from "./Pages/Home";
import Team from './Components/Team';
import Company from './Components/Company';
import HomeFooter from './Components/Footer';
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
     <Router>
      <Header />
            <Routes>
                    <Route path="/" element={<Home />} />
                    
                    <Route
                        path="/about"
                        element={<About />}
                    >
                        <Route
                            path="team"
                            element={<Team />}
                        />
                        <Route
                            path="company"
                            element={<Company />}
                        />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <HomeFooter />
            </Router>
    </div>
  );
}

export default App;
