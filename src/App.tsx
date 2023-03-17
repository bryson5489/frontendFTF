import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";

import Post from "./components/Post";
import Main from "./components/Main";
import Maps from "./components/Maps";
import LoginPage from "./components/LoginPage";
import Farm from "./model/Farm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/map" element={<Maps />} />
          <Route
            path="/post"
            element={
              <Post
                newFarmProp={function (newFarm: Farm): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
