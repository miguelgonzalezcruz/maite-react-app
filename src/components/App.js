import "../blocks/App.css";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Hero />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
