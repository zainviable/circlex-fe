import LoginPage from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const routes = [
  {
    path: "/",
    component: <Dashboard />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
];

export default routes;
