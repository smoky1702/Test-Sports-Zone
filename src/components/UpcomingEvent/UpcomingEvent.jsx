import React from 'react';
import './UpcomingEvent.css';
import eventBanner from '../../assets/images/event-banner.jpg';

const UpcomingEvent = () => {
  return (
    <section className="upcoming-event">
      <div className="container">
        <h2 className="section-heading">SỰ KIỆN SẮP DIỄN RA</h2>
        <div className="event-banner">
          <div className="event-details">
            <h3>GIẢI VIỆT DÃ VỀ NGUỒN</h3>
            <p>Sự kiện chạy việt dã lớn nhất năm với nhiều phần thưởng hấp dẫn, quy tụ các vận động viên hàng đầu và những người đam mê thể thao trên cả nước.</p>
            <button className="event-button">Tham gia ngay</button>
          </div>
          <div className="event-image">
            <img src={eventBanner} alt="Giải Việt Dã Về Nguồn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;