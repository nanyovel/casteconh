import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import MasterRoutes from "./routes/MasterRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MasterRoutes />
    </>
  );
}

export default App;
