import "./App.css";
import Layout from "../HOC/Layout/Layout";
import Home from "../Components/Pages/Home/Home";
import Men from "../Components/Pages/Men";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/men" element={<Men/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
