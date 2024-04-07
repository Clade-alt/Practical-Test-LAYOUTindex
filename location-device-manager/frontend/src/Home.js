import React from 'react';

function Home() {
    return (
        <div>
            <header>
                {/* Header Section */}
                <h1>Welcome to Location Device Manager</h1>
                {/* Navigation Links */}
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/locations">Locations</a></li>
                        <li><a href="/add-device">Devices</a></li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h2>Manage Locations and Devices Effortlessly</h2>
                    <p>Streamline your workflow with our powerful location and device management system.</p>
                    <a href="/add-location" className="cta-button">Get Started</a>
                </div>
                {/* Hero Image */}
                <img src="/hero-image.jpg" alt="Location Device Manager" className="hero-image" />
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Key Features</h2>
                <div className="feature">
                    <img src="/feature-icon1.svg" alt="Feature Icon" />
                    <h3>Easy Location Management</h3>
                    <p>Effortlessly add, edit, and delete locations with our intuitive interface.</p>
                </div>
                <div className="feature">
                    <img src="/feature-icon2.svg" alt="Feature Icon" />
                    <h3>Device Tracking</h3>
                    <p>Track the status and location of devices in real-time for better management.</p>
                </div>
                {/* Add more features as needed */}
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Users Say</h2>
                <div className="testimonial">
                    <blockquote>
                        "Location Device Manager has revolutionized how we manage our devices. Highly recommended!"
                    </blockquote>
                    <cite>- John Doe, CEO</cite>
                </div>
                {/* Add more testimonials as needed */}
            </section>

            {/* Footer Section */}
            <footer>
                <p>&copy; 2024 Location Device Manager. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;