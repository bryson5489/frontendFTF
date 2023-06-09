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
import MyFarms from "./components/MyFarm";
import DetailsPage from "./components/DetailsPage";
import Favorites from "./components/Favorites";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/map" element={<Maps />} />
          <Route path="/main" element={<Main />} />
          {/* <Route path="/farms" element={<MyFarms />} /> */}
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detailsPage/:place_id" element={<DetailsPage />} />
          <Route path="*" element={<Navigate to="/map" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
