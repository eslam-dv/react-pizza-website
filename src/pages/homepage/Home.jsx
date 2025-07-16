import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="container">
          <h1>Eslam's Pizzaria</h1>
          <p>Pizza to fit any taste</p>
          <Link className="btn" to="">
            Order Now
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
