import { Route,Routes,BrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home";
import {NewRoom} from "./pages/NewRoom";
//import {NewRoom} from "./pages/NewRoom";

function App() {
  return (
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom/>} />
    </Routes>
      </BrowserRouter>
  );
}

export default App;
