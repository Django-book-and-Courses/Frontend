import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "./assets/styles.css"

// Components
import EBookFinder from "./pages/EBookFinder.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter([{ path: "/", element: <EBookFinder /> }])} />
  </React.StrictMode>
)
