import Navbar from "./components/Navbar/Navbar";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import linkdin from "./images/linkdin.png";
import "./App.css";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes,Link,Route } from "react-router-dom";
import Home from "./components/Home/Home"
import About from "./components/About/About";
function App() {
 
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div>
        <ul className="social">
          {/* <li><a href=""><img src={facebook} alt="" /></a></li> */}
          <li>
            <a href="https://www.instagram.com/blitzpath.innovations/?utm_medium=copy_link">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/blitzpath-innovations/">
              <img src={linkdin} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <Routes>
        <Route  path="/g" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
