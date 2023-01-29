import "../blocks/App.css";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
