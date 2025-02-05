import React from 'react';
import './AboutUs.css'; // Create a CSS file to style this page

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>No Code University</h1>
        <p className="tagline">Empowering You to Build Without Code</p>
      </div>

      <div className="about-us-content">
        <section className="intro">
          <h2>Welcome to No Code University!</h2>
          <p>
            At No Code University, we believe that everyone should be able to
            create, innovate, and bring their ideas to life, without the need to
            learn how to write a single line of code. Whether you're an aspiring
            entrepreneur, a business professional, or a creative mind, we provide
            the tools and resources to help you achieve your goals.
          </p>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: democratize technology and enable non-technical
            individuals to build and launch products. We focus on teaching our
            students to use no-code tools to create websites, apps, automations, and
            more—without needing coding knowledge. 
          </p>
        </section>

        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <ul>
            <li>Hands-on tutorials with the best no-code tools available</li>
            <li>Step-by-step guides to build web apps, automation workflows, and more</li>
            <li>Supportive community of learners and experts</li>
            <li>Free resources and premium courses for in-depth learning</li>
          </ul>
        </section>

        <section className="meet-the-team">
          <h2>Meet Our Team</h2>
          <p>
            Our team is composed of passionate educators, no-code enthusiasts, and
            experts in the field of digital innovation. We come together with a shared
            vision of helping others bring their ideas to life—without writing a single
            line of code.
          </p>
        </section>

        <section className="join-us">
          <h2>Join Us Today</h2>
          <p>
            Ready to start your no-code journey? Join No Code University and gain
            access to exclusive tutorials, templates, and a community of like-minded
            creators. Together, we'll bring your ideas to life!
          </p>
          <button className="cta-btn">Get Started</button>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
