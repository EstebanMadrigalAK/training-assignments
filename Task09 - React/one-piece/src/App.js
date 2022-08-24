import './App.css';
import './style/style.css';
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import MainSection from "./sections/MainSection";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainSection></MainSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
