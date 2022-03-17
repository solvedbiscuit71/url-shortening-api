import Cards from "./components/Cards";
import Card from "./components/Cards/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shortener from "./components/Shortener";

function App(props) {
  return (
    <>
      <Header />

      {/* Hero section */}
      <section className="hero">
        <img src="assets/illustration-working.svg" alt="illustration working" className="hero__image" />
        
        <div className="hero__content">
          <h1>More than just shorter links</h1>
          <p>Build your brands recognition and get detailed insights on how your links are performing.</p>

          <button className="btn--primary">Get Started</button>
        </div>
      </section>

      <Shortener />

      {/* Statistics section */}
      <section className="statistics">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>

        <Cards />
      </section>

      {/* Boost section */}
      <section className="boost">
        <h2>Boost your links today</h2>
        <button className="btn--primary">Get Started</button>
      </section>

      <Footer />
    </>
  );
}

export default App;