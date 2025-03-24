import React from 'react';
import './EventOrganization.css';
import { FaUsers, FaClipboardCheck, FaBullhorn, FaCheck } from 'react-icons/fa';
import eventCorporate from '../../assets/images/event-corporate.jpg';
import eventCommunity from '../../assets/images/event-community.jpg';
import eventCultural from '../../assets/images/event-cultural.jpg';

const EventOrganization = () => {
  return (
    <section className="event-organization">
      <div className="container">
        <h2 className="section-heading">TỔ CHỨC SỰ KIỆN THỂ THAO CHUYÊN NGHIỆP</h2>
        
        <div className="event-types">
          <div className="event-type">
            <div className="event-type-image">
              <img src={eventCorporate} alt="Sự kiện khu vực & cấp độ cơ sở" />
            </div>
            <div className="event-type-content">
              <h3>SỰ KIỆN KHU VỰC & CẤP ĐỘ CƠ SỞ</h3>
              <p>Giải đấu, hội thao cho một đơn vị nhỏ hoặc tập hợp vài tổ chức, khu vực.</p>
            </div>
          </div>
          
          <div className="event-type">
            <div className="event-type-image">
              <img src={eventCommunity} alt="Sự kiện thể thao cộng đồng" />
            </div>
            <div className="event-type-content">
              <h3>SỰ KIỆN THỂ THAO CỘNG ĐỒNG</h3>
              <p>Khuyến khích lối sống lành mạnh, gắn kết mọi người dân và nâng cao sức khỏe cộng đồng.</p>
            </div>
          </div>
          
          <div className="event-type">
            <div className="event-type-image">
              <img src={eventCultural} alt="Sự kiện thể thao, văn hóa khác" />
            </div>
            <div className="event-type-content">
              <h3>SỰ KIỆN THỂ THAO, VĂN HÓA KHÁC</h3>
              <p>Tổ chức các sự kiện thể thao, giải đấu, hội thao, sự kiện thi đố trí nhớ cho mọi đối tượng.</p>
            </div>
          </div>
        </div>
        
        <div className="organization-process">
          <h3 className="process-heading">QUY TRÌNH TỔ CHỨC</h3>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon">
                <FaUsers />
              </div>
              <div className="step-content">
                <h4>Lập kế hoạch tổ chức (PLAN)</h4>
                <p>Xác định mục tiêu, thời gian, địa điểm, đối tượng tham gia, kinh phí cần có. Lên kịch bản tổ chức chi tiết cho từng giai đoạn.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <FaClipboardCheck />
              </div>
              <div className="step-content">
                <h4>Điều phối nhân sự và triển khai, vận hành (DO)</h4>
                <p>Phân công nhiệm vụ cho các đối tác và nhân sự, triển khai các công việc đã lập kế hoạch, duy trì tiến độ và điều chỉnh kịp thời.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <FaBullhorn />
              </div>
              <div className="step-content">
                <h4>Truyền thông sự kiện (PR)</h4>
                <p>Xây dựng chiến lược truyền thông đa kênh, phát hành thông cáo báo chí, tương tác với người hâm mộ, đưa tin về sự kiện đang diễn ra.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <FaCheck />
              </div>
              <div className="step-content">
                <h4>Hậu sự kiện & đánh giá (CHECK & ACT)</h4>
                <p>Tổng kết và đánh giá thành công và hạn chế, đúc kết kinh nghiệm, soạn thảo báo cáo tổng kết.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOrganization;