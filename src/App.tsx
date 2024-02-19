import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { PasswordGenerator } from "./pages/PasswordGenerator";
import { PasswordSave } from "./pages/PasswordSave";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/PasswordGenerator",
    element: <PasswordGenerator />,
  },
  {
    path: "/PasswordSave",
    element: <PasswordSave />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

const root = createRoot(document.body);
root.render(<App />);
