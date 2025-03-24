import React from 'react';
import './News.css';
import news1 from '../../assets/images/news1.jpg';
import news2 from '../../assets/images/news2.jpg';
import news3 from '../../assets/images/news3.jpg';

const News = () => {
  const newsItems = [
    {
      id: 1,
      image: news1,
      title: 'Giải bóng đá CBCNV MHĐ 2',
      date: '10/05/2023',
      excerpt: 'Giải đấu đã diễn ra thành công với sự tham gia của hơn 200 cầu thủ đến từ các đơn vị.'
    },
    {
      id: 2,
      image: news2,
      title: 'Giải bóng đá CBCNV MHĐ 2',
      date: '05/05/2023',
      excerpt: 'Giải đấu đã diễn ra thành công với sự tham gia của hơn 200 cầu thủ đến từ các đơn vị.'
    },
    {
      id: 3,
      image: news3,
      title: 'Giải bóng đá CBCNV MHĐ 2',
      date: '01/05/2023',
      excerpt: 'Giải đấu đã diễn ra thành công với sự tham gia của hơn 200 cầu thủ đến từ các đơn vị.'
    }
  ];

  return (
    <section className="news">
      <div className="container">
        <h2 className="section-heading">TIN TỨC</h2>
        <div className="news-container">
          {newsItems.map(item => (
            <div key={item.id} className="news-item">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-content">
                <span className="news-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <a href={`/news/${item.id}`} className="news-link">Xem thêm</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;