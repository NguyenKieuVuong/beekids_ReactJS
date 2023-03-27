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
    <div id="slide-comments_ambassador">
      <OwlCarousel className="owl-theme" {...options}>
        <ItemComments
          title="Beekids là một ứng dụng thú vị."
          summary="Con rất mong tới giờ học của cô. Ngoài bài học và làm
                          các bài tập trên lớp, cô còn cho chúng con chơi các
                          trò chơi rất thú vị. Con thường xuyên đạt điểm cao và
                          được cô khen ngợi."
          image={require("../../assets/images/comment-MrHoang.jpg")}
          name="Hồ Thị Trúc Linh"
          job="Học sinh lớp 4, trường Tiểu học Gia Quất"
        />

        <ItemComments
          title="Beekids là một ứng dụng vừa học vừa chơi hiệu quả."
          summary="Con đã được tham gia buổi huấn luyện kỹ năng thoát
                          hiểm của Thầy vào buổi chào cờ. Cả con và các bạn đều
                          rất hào hứng khi nghe về những bài học thoát hiểm vô
                          cùng thú vị trong ngày hôm đó."
          image={require("../../assets/images/avatar-review-ambassador-2.png")}
          name="Phan Gia Bảo"
          job="Học sinh lớp 3, trường Tiểu học Lê Hồng Phong"
        />
        <ItemComments
          title=" Beekids là một ứng dụng đa chức năng."
          summary=" Con cảm thấy chương trình học lớp 5 khá khó so với bản
                          thân. Nhưng nhờ sự giúp đỡ của cô thì con đã cố gắng
                          và đạt điểm khá. Gần đây, con còn nhận được giải
                          thưởng một cuộc thi Toán tư duy trên Bkids do cô giới
                          thiệu nữa. Bố mẹ và con đều cảm thấy rất vui."
          image={require("../../assets/images/avatar-review-ambassador-3.png")}
          name="Nguyễn Minh Khôi"
          job="Học sinh lớp 5, trường Tiểu học Kim Liên"
        />
        <ItemComments
          title=" Beekids là một ứng dụng hấp dẫn."
          summary="Mỗi khi con gặp bài tập khó thì cô giáo hướng dẫn con
                          rất tận tình. Con cảm thấy vui khi mình có thể làm tốt
                          bài tập về nhà và còn có thời gian để tham gia các
                          cuộc thi tương tác với bạn bè trên lớp."
          image={require("../../assets/images/avatar-review-ambassador-4.png")}
          name="Đào Nguyễn Lan Anh"
          job="Học sinh lớp 3, trường Tiểu học Trưng Vương"
        />
      </OwlCarousel>
    </div>
  );
}

function ReviewAmbassador() {
  return (
    <>
      <section id="section-comments-ambassador" class="">
        <div class="container -wide">
          <div class="block-title text-center wow fadeInDown">
            <div class="title-header text-uppercase">Cảm nhận</div>
            <h4 class="title-title">Học sinh nói gì về Đại sứ của chúng tôi</h4>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-xl-5">
              <div
                class="block-images wow fadeInLeft animated"
                data-wow-delay="0.25s"
              >
                <img
                  src={require("../../assets/images/Review-Ambassador.png")}
                  alt=""
                  class="mt-4 mt-lg-0 mb-4 mb-lg-0"
                />
              </div>
            </div>
            <div
              class="col-lg-6 col-xl-7 wow fadeInRight"
              data-wow-delay="0.25s"
            >
              <ReviewSlide />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReviewAmbassador;
