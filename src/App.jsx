import Footer from "./components/Footer";
import Header from "./components/Header";

function App(props) {
  return (
    <>
      <Header />

      {/* Hero section */}
      <section className="hero">
        <img src="assets/illustration-working.svg" alt="illustration working" className="hero__image" />
        
        <h1>More than just shorter links</h1>
        <p>Build your brands recognition and get detailed insights on how your links are performing.</p>

        <button className="btn--primary">Get Started</button>
      </section>

      <Footer />
    </>
  );
}

export default App;