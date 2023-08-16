import "./App.css";

// Import components
import Navbar from "./components/Navbar/Navbar";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import PagesRutes from "./components/PagesRutes";
import Footer from "./components/Footer/Footer";
// Import router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  // Scroll Services
  const handleClickScroll = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Router>
        <Navbar handleClickScroll={handleClickScroll} />
        <Whatsapp />
        <PagesRutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
