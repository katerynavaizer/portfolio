import "./Contact.css";

function Contact() {
  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-title">Let's Connect</h2>

      <div className="contact-links">
        <a href="mailto:kateryna.vaizer@gmail.com" className="contact-link">
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/vaizer"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/katerynavaizer"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
