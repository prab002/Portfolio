import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { DeadEnd } from "./DeadEnd/DeadEnd";
import GlobalStyles from "./Fonts/Font.styled";

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<DeadEnd />} />
      </Routes>
    </div>
  );
}

export default App;
