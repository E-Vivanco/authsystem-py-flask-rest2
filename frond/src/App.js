//import RegisterForm from './auth/registerform';
import {BrowserRouter,Route,Routes,} from 'react-router-dom';
import './App.css';
import injectContext from './store/appContext';
import Navbarfrom from './components/Navbarfrom';
import Home from './views/home';
import Login from './views/login';
import Profile from './views/profile';
import Not_Found from './views/not_found';

function App() {
        <BrowserRouter>
            <Navbarfrom />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route element={Not_Found} />
            </Routes>
        </BrowserRouter>
  
}

export default injectContext(App);



