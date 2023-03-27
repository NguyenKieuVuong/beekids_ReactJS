import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
  loop: false,
  margin: 20,
  autoplay: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 1,
    },
    1200: {
      items: 2,
    },
  },
};
function ItemComments(props) {
  return (
    <div className="item">
      <div className="block-comment">
        <div className="block-main">
          <div className="block-row header">
            <div className="title">{props.title}</div>
            <div className="star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="summary">{props.summary}</div>
          </div>
          <div className="block-row customer">
            <div className="image">
              <img src={props.image} alt={props.title} />
            </div>
            <div className="info">
              <div className="name">{props.name}</div>
              <div className="job">{props.job}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewSlide() {
  return (
    <div id="slide-comments">
      <OwlCarousel id="slide-comments" className="owl-theme" {...options}>
        <ItemComments
          title="Beekids là 1 ứng dụng tuyệt vời!"
          summary="Mình để ý app Beekids vì các bạn xây dựng trò chơi có lộ trình
                  phát triển tư duy cho bé."
          image={require("../../assets/images/comment-MrHoang.jpg")}
          name="Anh Hoàng"
          job="Phụ Huynh bé Sóc và bé Teddy"
        />
        <ItemComments
          title="Ứng dụng Beekids rất tốt!"
          summary="Kể từ ngày có Beekids, bé nhà mình không còn nghiện TikTok
                  nữa."
          image={require("../../assets/images/comment-MrTung.jpg")}
          name="Anh Tùng và chị Thùy"
          job="Công ty Tuấn Thi Groups"
        />
        <ItemComments
          title="Beekids là 1 ứng dụng tuyệt vời!"
          summary="Có những câu đố con cảm thấy rất khó, nhưng con đã nhờ bố
                  hướng dẫn. Con rất vui vì những câu hỏi sau đã không thể làm
                  khó con nữa."
          image={require("../../assets/images/comment-MrTung.jpg")}
          name="Bé Nguyễn Lê Thu Hà"
          job="Học sinh lớp 5"
        />
        <ItemComments
          title="Beekids là 1 ứng dụng tuyệt vời!"
          summary="Beekids có sẵn các lộ trình rất hay, bé mình học mà như chơi."
          image={require("../../assets/images/comment-MrQuyen.jpg")}
          name="Anh Quyền"
          job="Gia đình bé Besi - Osi"
        />
        <ItemComments
          title="Beekids là 1 ứng dụng tuyệt vời!"
          summary="Con rất thích chơi những trò chơi trên app. Con chỉ đợi đến
                  đúng giờ để xin phép Bố Mẹ vào Beekids thôi."
          image={require("../../assets/images/comment-MrHoang.jpg")}
          name="Bé Lê Anh Tuấn"
          job="Học sinh lớp 3"
        />
        <ItemComments
          title="Beekids là 1 ứng dụng tuyệt vời!"
          summary="Con rất thích chơi game, đặc biệt là những trò chơi trí tuệ.
                  Vì chúng sẽ giúp con rèn luyện được tư duy và học hỏi được
                  nhiều kiến thức hơn."
          image={require("../../assets/images/comment-MrHoang.jpg")}
          name="Bé Thái Quốc Bảo"
          job="Học sinh lớp 3"
        />
      </OwlCarousel>
    </div>
  );
}

export default ReviewSlide;
