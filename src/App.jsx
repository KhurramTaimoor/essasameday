import { useState, useEffect, useRef } from "react";

const contactDetails = {
  email: "contact@essasameday.com",
  phone: "+44 7777 577738",
};

const services = [
  {
    title: "Residential Removals",
    text: "Professional home moving service for flats, houses, rooms, and apartments with safe handling from pickup to delivery.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",
    icon: "🏠",
  },
  {
    title: "Office Removals",
    text: "Smooth office relocation with careful planning, loading, transport, and delivery support for businesses.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgFWmDgpNwVa8jAQIT9xTrbq8KKXsE2bTzDA&s?auto=format&fit=crop&w=1000&q=80",
    icon: "🏢",
  },
  {
    title: "Same Day Delivery",
    text: "Fast same-day delivery service for parcels, furniture, business goods, and urgent transport requirements.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80",
    icon: "🚚",
  },
  {
    title: "Packing Service",
    text: "Secure packing and unpacking support to protect your belongings during the complete moving process.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpj1vciLiFaS8RVEiDTn2qmJOZ93gNUJlp2Q&s?auto=format&fit=crop&w=1000&q=80",
    icon: "📦",
  },
];

const steps = [
  {
    number: "01",
    title: "Get a Quote",
    text: "Share your moving details and our team will prepare a clear quote.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Book Your Move",
    text: "Choose your date, vehicle size, and required moving service.",
    icon: "📅",
  },
  {
    number: "03",
    title: "Safe Collection",
    text: "Our team arrives on time and loads everything carefully.",
    icon: "🔒",
  },
  {
    number: "04",
    title: "Fast Delivery",
    text: "Your items are delivered safely at the destination.",
    icon: "✅",
  },
];

const reviews = [
  {
    name: "Michael R.",
    location: "London",
    text: "Very professional service. The movers arrived on time and handled everything carefully. Highly recommend!",
  },
  {
    name: "Sarah L.",
    location: "Manchester",
    text: "Excellent communication and reliable delivery. The team was friendly and efficient throughout.",
  },
  {
    name: "David K.",
    location: "Birmingham",
    text: "Fast same-day delivery service. Smooth process from booking to delivery — couldn't ask for more.",
  },
];

const stats = [
  { value: "5000+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "UK Wide", label: "Coverage" },
  { value: "24/7", label: "Support" },
];

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

function RevealDiv({ children, className, delay = 0, style = {} }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const cleanPhone = contactDetails.phone.replace(/\s/g, "");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="site">
      {/* HEADER */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container navContainer">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logoIcon">E</span>
            <span className="logoText">
              essa<span>sameday</span>
            </span>
          </a>

          <button
            className="menuBtn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={`navLinks ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About Us
            </a>
            <a href="#services" onClick={closeMenu}>
              Our Services
            </a>
            <a href="#quote" className="quoteBtn" onClick={closeMenu}>
              Free Quote
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="heroBg">
            <div className="heroBgCircle c1" />
            <div className="heroBgCircle c2" />
            <div className="heroBgCircle c3" />
          </div>

          <div className="container heroGrid">
            <div className="heroContent">
              <p className="eyebrow">Fast • Safe • Professional</p>

              <h1>
                Reliable same-day transport across the{" "}
                <span className="heroHighlight">UK</span>
              </h1>

              <p>
                essasameday provides professional moving, removals, and urgent
                delivery services for homes, offices, and businesses. We make
                every move simple, safe, and stress-free.
              </p>

              <div className="heroButtons">
                <a href="#quote" className="primaryBtn">
                  Get Free Quote
                </a>
                <a href="#services" className="outlineBtn">
                  View Services
                </a>
              </div>

              <div className="heroStats">
                {stats.map((s) => (
                  <div key={s.label} className="heroStat">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="heroImageWrap">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
                alt="Same day moving truck"
              />

              <div className="heroBadge topBadge">
                <span>✓</span>
                Insured Handling
              </div>

              <div className="heroBadge bottomBadge">
                <span>★</span>
                Trusted Movers
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section aboutSection">
          <div className="container aboutGrid">
            <RevealDiv className="aboutImage">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80"
                alt="Warehouse and logistics"
              />

              <div className="aboutFloat">
                <strong>Reliable</strong>
                <span>Moving & delivery support</span>
              </div>

              <div className="aboutBadge2">
                <strong>10+</strong>
                <span>Years of service</span>
              </div>
            </RevealDiv>

            <div className="aboutText">
              <RevealDiv delay={0.1}>
                <p className="sectionLabel">Why Choose Us?</p>

                <h2>Moving made simple with trusted professionals</h2>

                <p>
                  We focus on punctuality, safe handling, clear communication,
                  and reliable delivery. Whether you need a small delivery or a
                  full house move, our team is ready to help.
                </p>

                <div className="featuresGrid">
                  {[
                    "Experienced moving team",
                    "Safe loading and unloading",
                    "Transparent pricing",
                    "Flexible booking options",
                    "UK-wide coverage",
                    "24/7 customer support",
                  ].map((f) => (
                    <div key={f} className="featureItem">
                      <span className="featureCheck">✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                <a href="#quote" className="primaryBtn small">
                  Request a Quote
                </a>
              </RevealDiv>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section servicesSection">
          <div className="container">
            <RevealDiv className="sectionHeader">
              <p className="sectionLabel">Our Services</p>
              <h2>Professional moving and delivery services</h2>
              <p>
                Choose from flexible transport services designed for homes,
                offices, and businesses.
              </p>
            </RevealDiv>

            <div className="servicesGrid">
              {services.map((service, i) => (
                <RevealDiv
                  key={service.title}
                  className="serviceCard"
                  delay={i * 0.1}
                >
                  <div className="serviceImage">
                    <img src={service.image} alt={service.title} />
                    <div className="serviceIcon">{service.icon}</div>
                  </div>

                  <div className="serviceBody">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>

                    <a href="#quote" className="serviceLink">
                      Book Service <span className="arrow">→</span>
                    </a>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="ctaStrip">
          <div className="container ctaStripContent">
            <RevealDiv>
              <p>Need urgent transport?</p>
              <h2>Book your same-day moving service today</h2>
            </RevealDiv>

            <RevealDiv delay={0.15}>
              <a href="#quote" className="whiteBtn">
                Get Free Quote
              </a>
            </RevealDiv>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section processSection">
          <div className="container">
            <RevealDiv className="sectionHeader">
              <p className="sectionLabel">Work Process</p>
              <h2>Simple and easy process</h2>
            </RevealDiv>

            <div className="processGrid">
              {steps.map((step, i) => (
                <RevealDiv
                  key={step.number}
                  className="processCard"
                  delay={i * 0.12}
                >
                  <div className="processNumber">{step.number}</div>
                  <div className="processEmoji">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>

                  {i < steps.length - 1 && (
                    <div className="processArrow">→</div>
                  )}
                </RevealDiv>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section reviewSection">
          <div className="container">
            <RevealDiv className="sectionHeader">
              <p className="sectionLabel">Client Reviews</p>
              <h2>What our customers say</h2>
            </RevealDiv>

            <div className="reviewsGrid">
              {reviews.map((review, i) => (
                <RevealDiv
                  key={review.name}
                  className="reviewCard"
                  delay={i * 0.12}
                >
                  <div className="reviewQuote">"</div>
                  <div className="stars">★★★★★</div>

                  <p>"{review.text}"</p>

                  <div className="reviewerInfo">
                    <div className="reviewerAvatar">{review.name[0]}</div>
                    <div>
                      <h4>{review.name}</h4>
                      <span>{review.location}</span>
                    </div>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE / CONTACT FORM */}
        <section id="quote" className="quoteSection">
          <div className="container quoteGrid">
            <RevealDiv className="quoteText">
              <p className="sectionLabel light">Free Quote</p>

              <h2>Request your moving quote</h2>

              <p>
                Send us your moving details and our team will contact you with a
                suitable quote. Fast response guaranteed.
              </p>

              {/* Contact details only here with form */}
              <div className="quoteContact">
                <a href={`tel:${cleanPhone}`} className="quoteContactItem">
                  <div className="quoteContactIcon">📞</div>
                  <div>
                    <span>Call Us</span>
                    <strong>{contactDetails.phone}</strong>
                  </div>
                </a>

                <a
                  href={`mailto:${contactDetails.email}`}
                  className="quoteContactItem"
                >
                  <div className="quoteContactIcon">✉️</div>
                  <div>
                    <span>Email Us</span>
                    <strong>{contactDetails.email}</strong>
                  </div>
                </a>
              </div>
            </RevealDiv>

            <RevealDiv delay={0.15}>
              <div className="quoteForm">
                {submitted ? (
                  <div className="formSuccess">
                    <div className="successIcon">✓</div>
                    <h3>Request Sent!</h3>
                    <p>We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="formTitle">Get Your Free Quote</h3>

                    <div className="formRow">
                      <input type="text" placeholder="Your Name *" required />
                      <input
                        type="email"
                        placeholder="Your Email *"
                        required
                      />
                    </div>

                    <input type="tel" placeholder="Phone Number" />

                    <select defaultValue="">
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option>Residential Removals</option>
                      <option>Office Removals</option>
                      <option>Same Day Delivery</option>
                      <option>Packing Service</option>
                    </select>

                    <textarea
                      rows="4"
                      placeholder="Your Message *"
                      required
                    />

                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="submitBtn"
                    >
                      Submit Request <span>→</span>
                    </button>
                  </>
                )}
              </div>
            </RevealDiv>
          </div>
        </section>
      </main>

      {/* FOOTER - contact details removed */}
      <footer className="footer">
        <div className="footerTopStrip">
          <div className="container footerTopContent">
            <div className="footerTopLeft">
              <h3>Ready to move? Let's talk!</h3>
              <p>
                Fast, reliable, and professional moving services across the UK.
              </p>
            </div>

            <div className="footerTopRight">
              <a href="#quote" className="whiteBtn">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        <div className="footerMain">
          <div className="container footerGrid">
            <div className="footerBrand">
              <a href="#home" className="logo footerLogo">
                <span className="logoIcon">E</span>
                <span className="logoText">
                  essa<span>sameday</span>
                </span>
              </a>

              <p>
                Fast, reliable, and professional same-day moving and delivery
                services across the UK. Your trusted moving partner.
              </p>

              <div className="footerSocials">
                {["f", "in", "tw", "ig"].map((s) => (
                  <a key={s} href="#" className="socialBtn">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="footerCol">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#quote">Free Quote</a>
            </div>

            <div className="footerCol">
              <h4>Services</h4>
              <a href="#services">Home Removals</a>
              <a href="#services">Office Removals</a>
              <a href="#services">Same Day Delivery</a>
              <a href="#services">Packing Service</a>
            </div>

            <div className="footerCol">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Our Services</a>
              <a href="#quote">Request Quote</a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container copyrightInner">
            <span>
              © {new Date().getFullYear()} essasameday. All rights reserved.
            </span>

            <div className="copyrightLinks">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}