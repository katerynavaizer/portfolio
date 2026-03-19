import "./Contact.css";

function Contact() {
  return (
    <section className="contact-container" id="contact">
      <h2>Let's Connect</h2>
      <p>I am currently open to new full-stack development opportunities.</p>

      <div className="contact-links">
        <a href="mailto:kateryna.vaizer@gmail.com" className="contact-btn">
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="contact-btn outline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="contact-btn outline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
