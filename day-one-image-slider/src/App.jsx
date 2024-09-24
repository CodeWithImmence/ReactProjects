import { useState } from "react";
import "./App.css";
import Items from "./components/Items";

function App() {
  const [count, setCount] = useState(0);

  return <Items />;
}

export default App;
