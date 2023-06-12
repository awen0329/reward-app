import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

export { router };

function App() {
  return <RouterProvider router={router} />;
}

export default App;
