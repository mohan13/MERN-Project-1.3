import "./App.css";
import Layout from "../HOC/Layout/Layout";
import Home from "../Components/Pages/Home/Home";
import Men from "../Components/Pages/Men";
import LoginForm1 from "../Components/Pages/loginForm";
import SignUpForm from "../Components/Pages/SignUp/SignUp";
import Cart from '../Components/Page-Components/Cart/cart'
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
            <Route path="/shop" element={<Cart/>}/>
            <Route path="/form1" element={<LoginForm1/>} />
            <Route path="/form2" element={<SignUpForm/>} />

          </CstmSwtch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
