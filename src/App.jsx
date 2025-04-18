
import "./index.css";
import logo from "./assets/nara-logo.png";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <img src={logo} alt="NARA Logo" className="logo" />
        <nav>
          <a href="#products">Shop</a>
          <a href="#custom">Custom</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Modern Metal Art</h1>
          <p>Industrial beauty for your walls.</p>
          <button>Design Your Own</button>
        </section>
        <section id="products" className="products">
          <h2>Featured Pieces</h2>
          <div className="grid">
            <div className="card">
              <div className="placeholder">🖼️</div>
              <h3>Tree of Life</h3>
              <p>$120</p>
            </div>
            <div className="card">
              <div className="placeholder">🖼️</div>
              <h3>Abstract Face</h3>
              <p>$95</p>
            </div>
            <div className="card">
              <div className="placeholder">🖼️</div>
              <h3>Modern Mezuzah</h3>
              <p>$70</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2025 NARA Metal Art. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
