import { createBrowserRouter } from "react-router-dom"

// Components
import EbookList from "./pages/EbookList.jsx"
import EbookFinder from "./pages/EbookFinder.jsx"
import EbookPoster from "./pages/EbookPoster.jsx"

export const routing = createBrowserRouter([
  {
    path: "/ebooks",
    element: <EbookList />,
  },
  {
    path: "/ebooks/:eBookId",
    element: <EbookFinder />,
  },
  {
    path: "/ebooks/post",
    element: <EbookPoster />,
  },
])
