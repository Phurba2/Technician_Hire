import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hire Verified Workers in Minutes</h1>
          <p>Post your job and connect with skilled workers near you — fast, easy, and free.</p>
          <form className="lead-form">
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <button type="submit">Start Hiring</button>
          </form>
        </div>
        <div className="hero-image" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '470px' }}>
            <img src="/vaccum.jpeg" alt="Hiring 1" style={{ width: '220px', height: '170px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="/ac.jpeg" alt="Hiring 2" style={{ width: '220px', height: '170px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="/fridge.jpeg" alt="Hiring 3" style={{ width: '220px', height: '170px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="/wm.jpg" alt="Hiring 4" style={{ width: '220px', height: '170px', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
