import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Ready from "./Components/Home/Ready";
import Testimation from "./Components/Testimation/Testimation";
import Footer from "./Components/Footer/Footer";
import Middle from "./Components/Home/Middle";
import Timeline from "./Components/Home/Timeline";
import useLocalStorage from "use-local-storage";
import UserProfile from "./Components/UserProfile/UserProfile";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import Popular from "./Components/Popular/Popular";
import About from "./Components/About/About";
import Loader from "./Components/Loader/Loader";
import Trip from "./Components/Trip/Trip";
import AdDetails from "./Components/Bages_route/AdDetails";
import AddAdvertisement from "./Components/Bages_route/AddAdvertisement";
import Advertisements from "./Components/Bages_route/Advertisements";
import EditAdvertisement from "./Components/Bages_route/EditAdvertisement";
import Companyp from "./Components/Company/Companyp";
import Companies from "./Components/Company/Companies";
import AddReviews from "./Components/Bages_route/reviews/AddReviews";
import ShowReviews from "./Components/Bages_route/reviews/ShowReviews";

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

  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/registration";

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  // Let's create an async method to fetch fake data
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="App" data-theme={theme}>
      <div className="top-to-btm">
        {showTopBtn && (
          <MdOutlineKeyboardDoubleArrowUp
            className="icon-position icon-style"
            onClick={goToTop}
          />
        )}
      </div>

      {!hideNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Popular />
              {/* <Timeline /> */}
              <Trip />
              <Ready />
              <Middle />
              <Testimation />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advertisements" element={<Advertisements />} />
        <Route path="/advertisements/add" element={<AddAdvertisement />} />
        <Route
          path="/advertisements/:advertisementId"
          element={<AdDetails />}
        />
        <Route
          path="/advertisements/:advertisementId/edit"
          element={<EditAdvertisement />}
        />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="Company" element={<Companies />} />
        <Route path="Company/:companyID" element={<Companyp />} />
        {/* <Route path="/addReview" element={<AddReviews />} /> */}
      </Routes>
    </div>
  );
}

export default App;
