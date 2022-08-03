import "./App.css";
import Layout from "../HOC/Layout/Layout";
import Home from "../Components/Pages/Home/Home";
import Men from "../Components/Pages/Men";
import LoginForm1 from "../Components/Pages/loginForm";
import ShopCart from '../Components/Page-Components/CartComponents/Cart'
import { BrowserRouter as Router, Route } from "react-router-dom";
import CstmSwtch from "../Components/Custome Switch/cstmSwtch";
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <CstmSwtch>
            <Route path="/" element={<Home/>} />
            <Route path="/men" element={<Men/>} />
            <Route path="/women" element={<Men/>} />
            <Route path="/shop" element={<ShopCart/>} />
            <Route path="/form1" element={<LoginForm1/>} />
          </CstmSwtch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
