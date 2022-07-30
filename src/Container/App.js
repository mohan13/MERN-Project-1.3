import "./App.css";
import Layout from "../HOC/Layout/Layout";
import Home from "../Components/Pages/Home/Home";
import Men from "../Components/Pages/Men";
import LoginForm from "../Components/Pages/loginForm";
import ShopCart from '../Components/Page-Components/CartComponents/Cart'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/men" element={<Men/>} />
            <Route path="/women" element={<Men/>} />
            <Route path="/shop" element={<ShopCart/>} />
            <Route path="/contact" element={<LoginForm/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
