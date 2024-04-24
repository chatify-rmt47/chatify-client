import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { SocketContextProvider } from "./contexts/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <Provider store={store}>
        <AuthContextProvider>
            <SocketContextProvider>
                <App />
            </SocketContextProvider>
        </AuthContextProvider>
    </Provider>
    // </React.StrictMode>
);
