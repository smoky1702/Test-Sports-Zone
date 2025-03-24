import React from 'react';
import './EventGrid.css';
import event1 from '../../assets/images/event1.jpg';
import event2 from '../../assets/images/event2.jpg';

const EventGrid = () => {
  const events = [
    {
      id: 1,
      image: event1,
      title: 'Hội thao văn phòng đặc biệt',
      description: 'Tạo cơ hội giao lưu cho CBNV các văn phòng, xây dựng tinh thần đoàn kết và văn hóa doanh nghiệp.'
    },
    {
      id: 2,
      image: event2,
      title: 'Giải bóng đá mini',
      description: 'Nâng cao tinh thần đồng đội, giao lưu thể thao giữa các đơn vị, doanh nghiệp.'
    }
  ];

  return (
    <section className="event-grid">
      <div className="container">
        <div className="grid-container">
          {events.map(event => (
            <div key={event.id} className="grid-item">
              <div className="grid-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="grid-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <button className="grid-button">Xem chi tiết</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGrid;