//ARCHIVO PARA GENERAR RUTAS
import {
    BrowserRouter as Router,
    Route,
    Routes, 
    Navegate
} from "react-router-dom";

import Login from "./Components/Login/Login";
import Home from './Components/Home/Home';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/home" element={<Home/>}/>

            </Routes>
        </Router>
    )
}

export default AppRoutes;