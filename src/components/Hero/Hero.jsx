import React from 'react';
import './Hero.css';
import heroBackground from '../../assets/images/hero-background.jpg';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="container">
        <div className="hero-content">
          <h1>SPORTS ZONE</h1>
          <p>Nơi những trải nghiệm thể thao đỉnh cao được tạo ra</p>
          <button className="hero-button">Tìm hiểu thêm</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;