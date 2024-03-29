import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
      <h2>Welcome to Our Store</h2>
        <p>Discover amazing products at great prices!</p>
        <nav>
          <ul>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <footer className="footer">
        <p>&copy; 2024 Shopping Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

