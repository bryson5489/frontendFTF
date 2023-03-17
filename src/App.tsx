import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";

import Main from "./components/Main";
import Maps from "./components/Maps";
import LoginPage from "./components/LoginPage";
import MyFarms from "./components/MyFarms";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/map" element={<Maps />} />
          <Route path="/farms" element={<MyFarms />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
