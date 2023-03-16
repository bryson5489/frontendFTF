import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      return (
      <div className="App">
        <Router>
          {/* <Header /> */}
          <Routes>
            {/* <Route path="/" element={<Main />} />
  <Route path="/gifs/favorites" element={<Favorites />} />
         <Route path="/gifs/:id" element={<Details />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
      );
    </div>
  );
};

export default App;
