import {MainPage} from "./pages";
import {Outlet} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from "./components/Navbar.jsx";

function App() {

  return (
    <>
      <div>
          <Navbar/>
          <Outlet/>
      </div>
    </>
  )
}

export default App
