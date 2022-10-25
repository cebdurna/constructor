import LoginForm from "../components/LoginForm";

const routes = [
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
  {
    path: "/login",
    element: <LoginForm />,
  },
];
export default routes;
