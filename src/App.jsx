import Footer from './layouts/Footer/Footer'
import Header from './layouts/Header/Header'
import Home from "./page/Home/Home"
import "./App.scss"

function App() {

  return (
    <>
      <div id="main" className="main_page">
        <Header/>
        <Home/>
        <Footer/>
      </div>     
    </>
  )
}

export default App
