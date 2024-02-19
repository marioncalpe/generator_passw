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
    element: (
      <div>
        <nav>
          <Link to="/PasswordGenerator">PasswordGenerator</Link>
          <Link to="/PasswordSave">PasswordSave</Link>
        </nav>
        <Login />
      </div>
    ),
  },
  {
    path: "/PasswordGenerator",
    element: (
      <div>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/PasswordSave">PasswordSave</Link>
        </nav>
        <PasswordGenerator />
      </div>
    ),
  },
  {
    path: "/PasswordSave",
    element: (
      <div>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/PasswordGenerator">PasswordGenerator</Link>
        </nav>
        <PasswordSave />
      </div>
    ),
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

const root = createRoot(document.body);
root.render(<App />);
