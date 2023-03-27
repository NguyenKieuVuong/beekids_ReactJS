import Ratio from "react-bootstrap/Ratio";
import ReviewSlide from "./ReviewSlide";

function ReviewCourse() {
  return (
    <>
      <section id="section-comments" class="-bg-img-8">
        <div class="container -wide">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="block-title text-center wow fadeInDown">
                <div class="title-header text-uppercase">CẢM NHẬN</div>
                <h4 class="title-title">
                  Xem các khách hàng của chúng tôi đã trải nghiệm như thế nào về
                  Beekids
                </h4>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-xl-5">
              <div
                class="block-video mb-5 mb-lg-0 wow fadeInLeft"
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

export default ReviewCourse;
