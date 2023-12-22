import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Doctors from "./components/Doctors"
import Blogs from "./components/Blogs"
import Footer from "./components/Footer"
function App() {
  return (
    <>
     <div>
     <Navbar/>
     </div>
     <div id="home">
      <Home/>
     </div>
     <div id="about">
      <About/>
     </div>
     <div id="services">
      <Services/>
     </div>
     <div id="doctors">
      <Doctors/>
     </div>
     <div id="blog">
      <Blogs/>
     </div>
     <div id="footer">
      <Footer/>
     </div>
    </>
  )
}

export default App
