import Ratio from "react-bootstrap/Ratio";
import ReviewSlide from "./ReviewSlide";
function ReviewContestDetail() {
  return (
    <>
      <section id="section-comments" className="">
        <div className="container -wide">
          <div className="block-title text-center wow fadeInDown">
            <div className="title-header text-uppercase">Cảm nhận</div>
            <h4 className="title-title">
              Phụ huynh và học sinh nói gì về Cuộc thi và Khoá học
            </h4>
          </div>
          <div className="row align-items-center">
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
        </div>
      </section>
    </>
  );
}

export default ReviewContestDetail;
