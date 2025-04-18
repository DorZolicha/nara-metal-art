
import "./index.css";
import logo from "./assets/nara-logo.png";
import mockup from "./assets/mockup.png";

function App() {
  return (
    <div className="App dark-theme">
      <header className="navbar">
        <img src={logo} alt="NARA Logo" className="logo" />
        <nav>
          <a href="#shop">Shop</a>
          <a href="#custom">Custom</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Modern Metal Art</h1>
          <button className="shop-btn">SHOP NOW</button>
        </section>
        <section className="mockup-preview">
          <img src={mockup} alt="Product Preview" />
        </section>
      </main>
      <footer>
        <p>© 2025 NARA Metal Art. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
