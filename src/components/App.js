import "../blocks/App.css";
import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";
import About from "./About";
import Footer from "./Footer";

import { defaultPublicFurniture } from "../utils/defaultPublicFurniture";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Hero />
        <Main cards={defaultPublicFurniture} />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
