import Homepage from "./Pages/Homepage";
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Profilepage from "./Pages/Profilepage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile" element={<Profilepage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
