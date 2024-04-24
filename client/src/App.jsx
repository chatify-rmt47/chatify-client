import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { useAuthContext } from "./contexts/AuthContext";

// const router = createBrowserRouter([
//   {
//     path: "/signup",
//     element: () => {
//       !authUser ? <Signup /> : <Home />;
//     },
//   },
//   {
//     path: "/login",
//     element: () => {
//       !authUser ? <Login /> : <Home />;
//     },
//   },
//   {
//     path: "/",
//     element: () => {
//       authUser ? <Home /> : <Login />;
//     },
//   },
// ]);

const App = () => {
  // const { authUser } = useAuthContext();
  // // console.log("🚀 ~ App ~ authUser:", authUser);

  // return <RouterProvider router={router} />;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
    </>
  );
};

export default App;
