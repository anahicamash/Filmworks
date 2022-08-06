import { Routes, Route } from "react-router-dom"
import App from "./App"
import Navbar from "./components/Navbar"
import SingleCardSerie from "./components/SingleCardSerie"
import InfoSeasons from "./components/infoSeasons"

export const Paths = () => {
  return (
    <section className="container">
        <Navbar />
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/series/:id" element={<SingleCardSerie />}/>
            {/* <Route path="/series/:id/seasons" element={<InfoSeasons />}/> */}
        </Routes>
        
    </section>
    
  )
}

export default Paths
