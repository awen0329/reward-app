import { Navigate } from "react-router-dom";
import Rewards from "./page/rewards";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/rewards" />,
  },
  {
    path: "/rewards",
    element: <Rewards />,
  },
];
