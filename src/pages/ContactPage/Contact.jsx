import PizzaLeft from "../../assets/pizzaLeft.jpg";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact">
      <section className="contact-content">
        <div
          className="contact-left"
          style={{ backgroundImage: `url(${PizzaLeft})` }}
        ></div>
        <div className="contact-right">
          <h1>Contact Us</h1>
          <form id="contact-form" method="post">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              placeholder="John Doe..."
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              placeholder="Enter your message..."
              required
            ></textarea>

            <button className="btn" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
