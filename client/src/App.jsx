import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { useAuthContext } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={'/login'} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
