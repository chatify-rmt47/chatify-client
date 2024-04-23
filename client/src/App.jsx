import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/Home";
import "./App.css";

const router = createBrowserRouter([
    // {
    //     path: "/register",
    //     element: <RegisterPage />,
    //     loader: () => {
    //         if (localStorage.token) {
    //             return redirect("/");
    //         }
    //         return null;
    //     },
    // },
    // {
    //     path: "/login",
    //     element: <LoginPage />,
    //     loader: () => {
    //         if (localStorage.token) {
    //             return redirect("/");
    //         }
    //         return null;
    //     },
    // },
    {
        path: "/",
        element: <HomePage />,
        // loader: () => {
        //     if (!localStorage.token) {
        //         return redirect("/login");
        //     }
        //     return null;
        // },
    },
]);

function App() {
    return (
        <>
            <div className="p-4 h-screen flex items-center justify-center">
                <RouterProvider router={router} />
            </div>
        </>
    );
}

export default App;
