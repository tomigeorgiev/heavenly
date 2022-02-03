import Index from './Components/Index'
import Cart from './Components/Cart'

import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
