import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CourseFavorite() {
  var SlideCourse = {
    centerMode: true,
    arrows: false,
    centerPadding: "20%",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 520,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "15%",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="course-favorite">
      <div className="container -wide">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <div className="block-title text-center">
              <div className="title-header text-uppercase">Khóa học</div>
              <h4 className="title-title">
                CÁC KHÓA HỌC HÀNG ĐẦU DÀNH CHO TRẺ
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div id="slide-course">
        <Slider {...SlideCourse}>
          <div className="image">
            <img src={require("../../assets/images/course-1.png")} alt="" />
          </div>
          <div className="image">
            <img src={require("../../assets/images/course-2.png")} alt="" />
          </div>
          <div className="image">
            <img src={require("../../assets/images/course-3.png")} alt="" />
          </div>
          <div className="image">
            <img src={require("../../assets/images/course-4.png")} alt="" />
          </div>
        </Slider>
      </div>

      <div className="text-center mt-5 wow fadeInDown">
        <button type="button" className="btn btn-bigsize btn-beekids">
          Khám phá ngay
        </button>
      </div>
    </section>
  );
}

export default CourseFavorite;
