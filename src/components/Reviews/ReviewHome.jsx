import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Ratio from "react-bootstrap/Ratio";
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
function ReviewHome() {
  return (
    <>
      <section id="section-comments" className="">
        <div className="container -wide">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="block-title text-center wow fadeInDown">
                <div className="title-header text-uppercase">Cảm nhận</div>
                <h4 className="title-title">
                  Xem các khách hàng của chúng tôi đã trải nghiệm như thế nào về
                  Beekids
                </h4>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div
                className="block-video mb-5 mb-lg-0 wow fadeInLeft"
                data-wow-delay="0.25s"
              >
                <Ratio aspectRatio="16x9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/pk56RWmXG2w"
                    title="Beekids - Nền tảng kết nối học tập và phát triển tư duy cho Trẻ trong độ tuổi vàng 3 - 12."
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </Ratio>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-7 wow fadeInRight"
              data-wow-delay="0.25s"
            >
              <OwlCarousel
                id="slide-comments"
                className="owl-theme"
                {...options}
              >
                <div className="item">
                  <div className="block-comment">
                    <div className="block-main">
                      <div className="block-row header">
                        <div className="title">
                          Beekids là 1 ứng dụng tuyệt vời!
                        </div>
                        <div className="star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="summary">
                          Mình để ý app Beekids vì các bạn xây dựng trò chơi có
                          lộ trình phát triển tư duy cho bé.
                        </div>
                      </div>
                      <div className="block-row customer">
                        <div className="image">
                          <img
                            src={require("../../assets/images/comment-MrHoang.jpg")}
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <div className="name">Anh Hoàng</div>
                          <div className="job">
                            Phụ Huynh bé Sóc và bé Teddy
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-comment">
                    <div className="block-main">
                      <div className="block-row header">
                        <div className="title">Ứng dụng Beekids rất tốt!</div>
                        <div className="star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="summary">
                          Kể từ ngày có Beekids, bé nhà mình không còn nghiện
                          TikTok nữa.
                        </div>
                      </div>
                      <div className="block-row customer">
                        <div className="image">
                          <img
                            src={require("../../assets/images/comment-MrTung.jpg")}
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <div className="name">Anh Tùng và chị Thùy</div>
                          <div className="job">Công ty Tuấn Thi Groups</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-comment">
                    <div className="block-main">
                      <div className="block-row header">
                        <div className="title">
                          Beekids là 1 ứng dụng tuyệt vời!
                        </div>
                        <div className="star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="summary">
                          Có những câu đố con cảm thấy rất khó, nhưng con đã nhờ
                          bố hướng dẫn. Con rất vui vì những câu hỏi sau đã
                          không thể làm khó con nữa.
                        </div>
                      </div>
                      <div className="block-row customer">
                        <div className="image">
                          <img
                            src={require("../../assets/images/comment-MrTung.jpg")}
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <div className="name">Bé Nguyễn Lê Thu Hà</div>
                          <div className="job">Học sinh lớp 5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-comment">
                    <div className="block-main">
                      <div className="block-row header">
                        <div className="title">
                          Beekids là 1 ứng dụng tuyệt vời!
                        </div>
                        <div className="star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="summary">
                          Beekids có sẵn các lộ trình rất hay, bé mình học mà
                          như chơi.
                        </div>
                      </div>
                      <div className="block-row customer">
                        <div className="image">
                          <img
                            src={require("../../assets/images/comment-MrQuyen.jpg")}
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <div className="name">Anh Quyền</div>
                          <div className="job">Gia đình bé Besi - Osi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-comment">
                    <div className="block-main">
                      <div className="block-row header">
                        <div className="title">
                          Beekids là 1 ứng dụng tuyệt vời!
                        </div>
                        <div className="star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="summary">
                          Con rất thích chơi những trò chơi trên app. Con chỉ
                          đợi đến đúng giờ để xin phép Bố Mẹ vào Beekids thôi.
                        </div>
                      </div>
                      <div className="block-row customer">
                        <div className="image">
                          <img
                            src={require("../../assets/images/comment-MrHoang.jpg")}
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <div className="name">Bé Lê Anh Tuấn</div>
                          <div className="job">Học sinh lớp 3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-comment">
                    <div className="block-main">
                      <div className="block-row header">
                        <div className="title">
                          Beekids là 1 ứng dụng tuyệt vời!
                        </div>
                        <div className="star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="summary">
                          Con rất thích chơi game, đặc biệt là những trò chơi
                          trí tuệ. Vì chúng sẽ giúp con rèn luyện được tư duy và
                          học hỏi được nhiều kiến thức hơn.
                        </div>
                      </div>
                      <div className="block-row customer">
                        <div className="image">
                          <img
                            src={require("../../assets/images/comment-MrHoang.jpg")}
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <div className="name">Bé Thái Quốc Bảo</div>
                          <div className="job">Học sinh lớp 3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="text-bottom text-center">
            Đã được hơn 1000 giáo viên, phụ huynh và khách hàng tin tưởng và sử
            dụng chất lượng Beekids trong quá trình dạy con
          </div>
          <div className="logo-list">
            <div className="row justify-content-center row-1">
              <div className="col-3">
                <div className="logo-item">
                  <div className="logo-item__image">
                    <img
                      className="img-thumb"
                      src={require("../../assets/images/list-logo-pomath.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="logo-item">
                  <div className="logo-item__image">
                    <img
                      className="img-thumb"
                      src={require("../../assets/images/list-logo-baophuc.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="logo-item">
                  <div className="logo-item__image">
                    <img
                      className="img-thumb"
                      src={require("../../assets/images/list-logo-iedv.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="logo-item">
                  <div className="logo-item__image">
                    <img
                      className="img-thumb"
                      src={require("../../assets/images/list-logo-upo.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-2 justify-content-center">
              <div className="col-4 col-lg-3">
                <div className="logo-item">
                  <div className="logo-item__image">
                    <img
                      className="img-thumb"
                      src={require("../../assets/images/list-logo-mnpedu.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg-3">
                <div className="logo-item">
                  <div className="logo-item__image">
                    <img
                      className="img-thumb"
                      src={require("../../assets/images/list-logo-sparta.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg-3">
                <div className="logo-item">
                  <div className="logo-item__image">
                    <img
                      className="img-thumb"
                      src={require("../../assets/images/list-logo-sieutrinho.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReviewHome;
