import './App.css';
import Layout from '../HOC/Layout/Layout';
import Home from '../Components/Pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
