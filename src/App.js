import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { DeadEnd } from "./DeadEnd/DeadEnd";
import GlobalStyles from "./Fonts/Font.styled";
import Header from "./NavBar";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<DeadEnd />} />
      </Routes>
    </div>
  );
}

export default App;
