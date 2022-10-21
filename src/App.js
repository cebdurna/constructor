import { CssBaseline } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main Page</div>,
  },
  {
    path: "/*",
    element: <div>Not Main Page</div>,
  },
  {
    path: "/about",
    element: <div>AboutPage</div>,
  },
]);

function App() {
  return (
    <CssBaseline>
      <Header />
      <RouterProvider router={router} />
    </CssBaseline>
  );
}

export default App;
