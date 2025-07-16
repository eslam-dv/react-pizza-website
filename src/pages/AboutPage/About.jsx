import MultiplePizzas from "../../assets/multiplePizzas.jpeg";
import "./About.css";

function About() {
  return (
    <main className="about">
      <div
        className="about-top"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>

      <sction className="container">
        <div className="about-bottom">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            nisi voluptates quam mollitia minima repellat assumenda, saepe,
            libero obcaecati labore nobis esse fugit aperiam laudantium itaque
            odit! Quod culpa assumenda sed molestiae cumque odit magnam non.
            Maxime consequuntur, rerum debitis neque, at sit illo adipisci
            impedit eius placeat, dolor quasi voluptatem voluptates nulla
            voluptatum voluptate provident ex itaque architecto nemo error eum
            enim quia. Quam deserunt dignissimos cumque culpa a voluptatum
            repellat reiciendis at obcaecati atque consequuntur consequatur
            commodi eos saepe, rerum nam distinctio ipsa itaque officiis sequi
            natus quis reprehenderit consectetur! Suscipit, porro? Nemo
            consequuntur consectetur architecto fugiat obcaecati.
          </p>
        </div>
      </sction>
    </main>
  );
}

export default About;
