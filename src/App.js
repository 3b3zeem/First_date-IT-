import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import Navbar from "./Components/NavBar/Navbar";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Ready from "./Components/Home/Ready";
import Testimation from "./Components/Testimation/Testimation";
import Footer from "./Components/Footer/Footer";
import Middle from "./Components/Home/Middle";
import Timeline from "./Components/Home/Timeline";
import Products from "./Components/Bages_route/Products";
import AddProduct from "./Components/Bages_route/AddProduct";
import ProductDetails from "./Components/Bages_route/ProductDetails";
import EditProduct from "./Components/Bages_route/EditProduct";
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Middle />
              <Timeline />
              <Ready />
              <Testimation />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products/:productId/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
