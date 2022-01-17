import logo from './logo.svg';
import './App.css';


import Login from "./Components/Login/Login";
import Home from './Components/Home/Home';

import AppRoutes from './AppRouter';

function App() {
  return (
    <div className="App">
         <AppRoutes/>
    </div>
  );
}

export default App;
