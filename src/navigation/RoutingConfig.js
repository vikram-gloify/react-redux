import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProductDetail from '../components/ProductDetail/ProductDetail';

// Style
import '../common/Style/Navbar.css';
import '../common/Style/Footer.css';
import '../common/Style/Home.css';
import Home from '../pages/Home/Home';

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home/>}/>
        <Route path="/product/:productId" exact element={<ProductDetail />} />
        <Route>404 Not Found!</Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
