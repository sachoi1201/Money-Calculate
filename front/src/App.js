import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "./site/information";
import Result from "./site/result";
import Header from "./site/header";
import Main from "./site/main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/info" element={<UserInfo />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
