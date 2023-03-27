import Ratio from "react-bootstrap/Ratio";
import ReviewSlide from "./ReviewSlide";
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
              <ReviewSlide />
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
