import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Book Professional Services</h1>
          <p>
            AI • Cloud • Web Development • UI/UX • Digital Marketing
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">
              Explore Services
            </Link>

            <Link to="/register" className="btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <h2>Find Your Perfect Service</h2>

        <input
          type="text"
          placeholder="Search Web Development, AI, Cloud..."
        />
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Service Categories</h2>

        <div className="category-grid">

          <div className="category-card">
            <h3>💻 Web Development</h3>
            <p>Modern websites and applications.</p>
          </div>

          <div className="category-card">
            <h3>🤖 AI Solutions</h3>
            <p>AI tools, chatbots and automation.</p>
          </div>

          <div className="category-card">
            <h3>☁ Cloud Services</h3>
            <p>AWS, Azure and deployment services.</p>
          </div>

          <div className="category-card">
            <h3>🎨 UI/UX Design</h3>
            <p>Beautiful user experiences.</p>
          </div>

          <div className="category-card">
            <h3>📈 Digital Marketing</h3>
            <p>Grow your business online.</p>
          </div>

        </div>
      </section>

      {/* Featured Services */}
      <section className="featured">
        <h2>Featured Services</h2>

        <div className="service-grid">

          <div className="service-card">
            <h3>Website Development</h3>
            <p>Professional business websites.</p>
            <span>₹4999</span>
          </div>

          <div className="service-card">
            <h3>AI Chatbot</h3>
            <p>Custom intelligent chatbot.</p>
            <span>₹6999</span>
          </div>

          <div className="service-card">
            <h3>Cloud Deployment</h3>
            <p>AWS deployment & management.</p>
            <span>₹3999</span>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="stats">

        <div className="stat-card">
          <h1>500+</h1>
          <p>Clients</p>
        </div>

        <div className="stat-card">
          <h1>1200+</h1>
          <p>Bookings</p>
        </div>

        <div className="stat-card">
          <h1>98%</h1>
          <p>Satisfaction</p>
        </div>

      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Clients Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              "Excellent service and fast delivery."
            </p>
            <h4>- Rahul</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Professional AI solutions for our startup."
            </p>
            <h4>- Priya</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Amazing support and quality work."
            </p>
            <h4>- Naveen</h4>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>SkillConnect Pro</h3>
        <p>Connecting Clients with Top Professionals</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </div>
      </footer>

    </div>
  );
}

export default Home;