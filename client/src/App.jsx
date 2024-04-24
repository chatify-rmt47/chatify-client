import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { useAuthContext } from "./contexts/AuthContext";

const { authUser } = useAuthContext();
console.log("🚀 ~ App ~ authUser:", authUser);

const router = createBrowserRouter([
  {
    path: "/signup",
    element: () => {
      !authUser ? <Signup /> : <Home />;
    },
  },
  {
    path: "/login",
    element: () => {
      !authUser ? <Login /> : <Home />;
    },
  },
  {
    path: "/",
    element: () => {
      authUser ? <Home /> : <Login />;
    },
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
