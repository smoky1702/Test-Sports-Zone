import React from 'react';
import './Footer.css';
import footerLogo from '../../assets/images/sports-zone-logo-white.png';
import { FaFacebook, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-column">
            <div className="footer-logo">
              <img src={footerLogo} alt="Sports Zone Logo" />
            </div>
            <p className="footer-description">
              Chuyên tổ chức các giải đấu thể thao, sự kiện, hội thao văn phòng, team building cho doanh nghiệp.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>SPORTS ZONE</h4>
            <ul className="footer-links">
              <li><a href="/gioi-thieu">Giới thiệu</a></li>
              <li><a href="/su-kien">Sự kiện</a></li>
              <li><a href="/tin-tuc">Tin tức</a></li>
              <li><a href="/lien-he">Liên hệ</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>DỊCH VỤ</h4>
            <ul className="footer-links">
              <li><a href="/to-chuc-giai-dau">Tổ chức giải đấu</a></li>
              <li><a href="/to-chuc-hoi-thao">Tổ chức hội thao</a></li>
              <li><a href="/team-building">Team building</a></li>
              <li><a href="/chuyen-de-the-thao">Chuyên đề thể thao</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>LIÊN HỆ</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>123 Nguyễn Sáng, Tây Thạnh, Tân Phú, TP. Hồ Chí Minh</span>
              </li>
              <li>
                <FaPhoneAlt />
                <span>0123 456 789</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@sportszone.vn</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Sports Zone (PMH). Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;