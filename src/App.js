import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// pages and components
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
        <Route 
          path='/'
          element={ user ? <Home /> : <Navigate to="/login/" /> }
          />
        <Route 
          path='/signup'
          element={ !user ? <Signup/> : <Navigate to="/" />  }
          />
        <Route 
          path='/login'
          element={ !user ? <Login/> : <Navigate to="/" /> }
          />
        <Route 
          path='/about'
          element={ <About /> }
          /> 
        </Routes>
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;