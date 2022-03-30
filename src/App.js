import "./App.css";
import Inicio from "./components/pages/Inicio";
import Navigation from './components/common/Navigation'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/pages/Login";
import Footer from "./components/common/Footer";
import Error404 from "./components/pages/Error404";
import AcercaDeNosotros from './components/pages/AcercaDeNosotros'

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/login' element={<Login></Login>}></Route>
      <Route exact path='/acerca-de-nosotros' element={<AcercaDeNosotros></AcercaDeNosotros>}></Route>
      <Route exact path='/*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
