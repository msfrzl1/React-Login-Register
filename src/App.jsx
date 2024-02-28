import { useRoutes } from "react-router-dom";
import { routelist } from "./components/Routes/routes";

function App() {
  const element = useRoutes(routelist);
  return element;
}

export default App;
