import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from "./componenets/MainNavbar/MainNavbar";
import MainFooter from "./componenets/MainFooter/MainFooter";
import Content from "./componenets/Content/Content";
import '../src/global.css';

function App() {
  return (
    <>
      <div>
        <MainNavbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Content />} />
          </Routes>
        </BrowserRouter>
        <MainFooter />
      </div>
    </>
  );
}

export default App;
