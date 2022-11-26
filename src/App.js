import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="mx-w-[1200px] mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
