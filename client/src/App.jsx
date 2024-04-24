import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
// import HomePage from "./pages/home/Home";
import "./App.css";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
    loader: () => {
      if (localStorage.token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.token) {
        return redirect("/");
      }
      return null;
    },
  },
  // {
  //   path: "/",
  //   element: <HomePage />,
  //   // loader: () => {
  //   //     if (!localStorage.token) {
  //   //         return redirect("/login");
  //   //     }
  //   //     return null;
  //   // },
  // },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
