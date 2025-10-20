import React from "react";

export default function Features() {
  return (
    <section className="features" id="why">
      <div className="container">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>100% Verified Profiles</h3>
            <p>All candidates go through a thorough verification process.</p>
          </div>
          <div className="feature">
            <h3>Instant Hiring</h3>
            <p>Find and connect with workers within minutes of posting.</p>
          </div>
          <div className="feature">
            <h3>Wide Categories</h3>
            <p>From delivery to housekeeping, find all types of workers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
