import "./App.css";
import Layout from "../HOC/Layout/Layout";
import Home from '../Components/Pages/Home/Home'
import Men from "../Components/Pages/Men";
import LoginForm1 from "../Components/Pages/loginForm";
import SignUpForm from "../Components/Pages/SignUp/SignUp";
import ProductDetails from '../Components/Page-Components/ProductDetails/ProductDetails'
import Cart from "../Components/Page-Components/Cart/Cart";
import Contact from '../Components/Page-Components/Contact-Components/sendContact'
import { BrowserRouter as Router, Route} from "react-router-dom";
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
            <Route path="/shop" element={<ProductDetails />}/>
            <Route path="/cart" element={<Cart />}/>

            <Route path="/form1" element={<LoginForm1/>} />
            <Route path="/form2" element={<SignUpForm/>} />
            <Route path="/form2" element={<SignUpForm/>} />
            <Route path="/contact" element={<Contact/>} />

          </CstmSwtch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
