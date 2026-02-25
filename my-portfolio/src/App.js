import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/naveBar";
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/contact'

function App(){
    return (
        <Router>
            <NavBar />
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/projects" element={<Projects/>}/>
        </Router>
    );
}

export default App;