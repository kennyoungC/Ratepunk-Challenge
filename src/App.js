import Advert from "./components/Advert/Advert"
import Footer from "./components/Footer/Footer"
import Mainpage from "./components/Main_Page/Mainpage"
import NavBar from "./components/Navbar/NavBar"

function App() {
  return (
    <>
      <NavBar />
      <hr className="line"></hr>
      <Mainpage />
      <Advert />
      <Footer />
    </>
  )
}

export default App
