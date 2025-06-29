import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [user, setUser] = useState(null);
  const [businessInfo, setBusinessInfo] = useState({
    name: '',
    type: '',
    collected: false
  });
  const [scrolled, setScrolled] = useState(false);

  const services = [
    
    {
      id: 1,
      title: "E-Commerce Solutions",
      description: "Launch your online store with powerful e-commerce tools and seamless payment integrations.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "SEO Optimization",
      description: "Built-in SEO tools to help your website rank higher on search engines and attract more visitors.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Hosting & Security",
      description: "Reliable hosting with enterprise-grade security to keep your website fast and protected.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "Custom Templates",
      description: "Choose from hundreds of professionally designed templates for any industry.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const businessTypes = [
    "E-Commerce",
    "Portfolio",
    "Blog",
    "Business Website",
    "Restaurant",
    "Non-Profit",
    "Educational",
    "Other"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Animation on scroll
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    // Count animation
    const animateCount = () => {
      const countElements = document.querySelectorAll('.animate-count');
      countElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            clearInterval(timer);
            count = target;
          }
          element.textContent = Math.floor(count);
        }, 16);
      });
    };

    // Initialize animations
    handleScroll();
    animateCount();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPopup = (title, description) => {
    setPopupContent({ title, description });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 3 : prev - 1));
  };

  const handleBusinessInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const info = Object.fromEntries(formData.entries());

    setBusinessInfo({
      name: info.businessName,
      type: info.businessType,
      collected: true
    });
  };

  const logout = () => {
    setUser(null);
    setBusinessInfo({ name: '', type: '', collected: false });
  };

  return (
    <div className="App">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">Eezix</div>
        <nav className="nav">
          {user ? (
            <div className="user-info">
              <span>Welcome, {user.name}</span>
              {businessInfo.collected && (
                <span className="business-info">
                  {businessInfo.name} ({businessInfo.type})
                </span>
              )}
              <button onClick={logout} className="logout-btn">
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="auth-btn login-btn">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
              <Link to="/signup" className="auth-btn signup-btn">
                <i className="fas fa-user-plus"></i> Sign Up
              </Link>
            </div>
          )}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-fadeIn">Build Your Dream Website</h1>
          <p className="hero-subtitle animate-fadeIn animate-delay-1">No coding needed. Just drag, drop, and launch!</p>
          <div className="hero-buttons animate-fadeIn animate-delay-2">
            <Link to="/build" className="hero-btn primary">
              <i className="fas fa-rocket"></i> Build Yours Now
            </Link>
            <button className="hero-btn secondary" onClick={() => {
              window.scrollTo({
                top: document.querySelector('.container').offsetTop - 100,
                behavior: 'smooth'
              });
            }}>
              <i className="fas fa-search"></i> Explore Features
            </button>
          </div>
        </div>
        <div className="hero-image animate-float">
          <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Website Builder" />
        </div>
      </section>

      <div className="container animate-on-scroll">
        {user && !businessInfo.collected && (
          <div className="business-info-popup">
            <div className="business-info-form">
              <h2>Tell Us About Your Business</h2>
              <p>This helps us customize your experience and recommend the best features for your needs.</p>
              <form onSubmit={handleBusinessInfoSubmit}>
                <div className="form-group">
                  <label><i className="fas fa-building"></i> Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Enter your business name"
                    required
                    value={businessInfo.name}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label><i className="fas fa-briefcase"></i> Business Type</label>
                  <select
                    name="businessType"
                    required
                    value={businessInfo.type}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, type: e.target.value })}
                  >
                    <option value="">Select your business type</option>
                    {businessTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="submit-btn">
                  <i className="fas fa-arrow-right"></i> Continue
                </button>
              </form>
            </div>
          </div>
        )}

        <h1 className="main-title">Eezix Website Builder</h1>

        <div className="services-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="carousel-track">
            {services.slice(currentSlide, currentSlide + 3).map((service, index) => (
              <div className={`card animate-card-${index}`} key={service.id}>
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="buttons">
                  <button
                    className="read-more"
                    onClick={() => openPopup(service.title, service.description)}
                  >
                    <i className="fas fa-info-circle"></i> Learn More
                  </button>
                  <button className="book-now" onClick={() => window.location.href = '/build'}>
                    <i className="fas fa-play"></i> Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="about animate-on-scroll">
          <h2>About Eezix</h2>
          <p className="about-desc">
            Eezix is revolutionizing website creation with our powerful yet simple platform. Founded in 2020, we've helped over 50,000 businesses establish their online presence.
          </p>
          <div className="stats">
            <div className="stat-item">
              <div className="stat-number animate-count" data-target="9000">0</div>
              <div className="stat-label">Happy Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number animate-count" data-target="800">0</div>
              <div className="stat-label">Templates</div>
            </div>
            <div className="stat-item">
              <div className="stat-number animate-count" data-target="24">0</div>
              <div className="stat-label">Employees</div>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@eezix.ai-freewebsitebuilder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="youtube-btn">
              <i className="fab fa-youtube"></i> Watch Demo
            </button>
          </a>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <span className="close" onClick={closePopup}>×</span>
            <h2>{popupContent.title}</h2>
            <p>{popupContent.description}</p>
          </div>
        </div>
      )}

      <footer className="footer animate-on-scroll">
        <div className="footer-content">
          <div className="footer-logo">Eezix</div>
          <div className="footer-links">
            <Link to="#"><i className="fas fa-star"></i> Features</Link>
            <Link to="#"><i className="fas fa-tag"></i> Pricing</Link>
            <Link to="#"><i className="fas fa-palette"></i> Templates</Link>
            <Link to="#"><i className="fas fa-headset"></i> Support</Link>
          </div>
          <div className="footer-social">
            <Link to="#"><i className="fab fa-facebook"></i></Link>
            <Link to="#"><i className="fab fa-twitter"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
            <Link to="#"><i className="fab fa-linkedin"></i></Link>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Eezix. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;