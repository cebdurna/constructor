import { CssBaseline } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header";
import routes from "./config/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <CssBaseline>
      <Header />
      <RouterProvider router={router} />
    </CssBaseline>
  );
}

export default App;
