import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Cảm ơn bạn đã liên hệ với chúng tôi!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-heading">LIÊN HỆ VỚI CHÚNG TÔI</h2>
        <p className="contact-description">
          Tổ chức các giải đấu thể thao sự kiện chuyên nghiệp và sáng tạo, liên hệ với chúng tôi để được hỗ trợ tư vấn.
        </p>
        
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Họ tên" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Tin nhắn" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-button">Gửi tin nhắn</button>
          </form>
        </div>
        
        {/* <div className="contact-chat">
          <div className="contact-chat-icon">
            <FaEnvelope />
          </div>
          <p>Đang có hơn <span className="highlight">20</span> người liên hệ</p>
        </div> */}
      </div>  
    </section>
  );
};

export default Contact;