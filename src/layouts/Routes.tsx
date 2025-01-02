import LoginPage from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const uniqueRoutes = [
  {
    path: "/",
    component: <Dashboard />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
];

export default uniqueRoutes;
