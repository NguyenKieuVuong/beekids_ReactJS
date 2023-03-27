function SolutionForChild() {
  return (
    <section id="solution-for-child" className="-bg-img-15">
      <div className="container -wide">
        <div className="block-title text-center">
          <div className="title-header text-uppercase">Giới thiệu</div>
          <h4 className="title-title">Nền tảng Giáo dục dành cho trẻ</h4>
        </div>
        <div className="row align-items-center">
          <div
            className="col-lg-6 animate__animated animate__fadeInLeft"
            data-wow-delay="0.5s"
          >
            <div
              className="text-center mb-5 mb-lg-0 wow fadeInRight animated"
              data-wow-delay="0.25s"
            >
              <img
                src={require("../../../assets/images/img-solution-for-child.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <div className="solution-content">
              <div className="solution-content__title">
                Tập trung vào phát triển tư duy và những kỹ năng thế kỉ 21:
                Toán, Lập Trình, Tài Chính:
              </div>
              <div className="solution-content__item">
                <div className="-icon">
                  <img
                    src={require("../../../assets/images/ico-stick.png")}
                    alt="Nền tảng Giáo dục dành cho trẻ"
                  />
                </div>
                <div className="-text">
                  <label>Chuyên gia, giáo viên:</label>
                  <ul>
                    <li>
                      Tạo các khóa học (bài học, bài tập, bài kiểm tra) và các
                      cuộc thi
                    </li>
                    <li>Đồng hành và hỗ trợ</li>
                  </ul>
                </div>
              </div>
              <div className="solution-content__item">
                <div className="-icon">
                  <img
                    src={require("../../../assets/images/ico-stick.png")}
                    alt="Nền tảng Giáo dục dành cho trẻ"
                  />
                </div>
                <div className="-text">
                  <label>Chuyên gia, giáo viên:</label>
                  <ul>
                    <li>Theo dõi và đánh giá quá trình học tập của Con</li>
                    <li>Chơi với Con</li>
                  </ul>
                </div>
              </div>
              <div className="solution-content__item">
                <div className="-icon">
                  <img
                    src={require("../../../assets/images/ico-stick.png")}
                    alt="Nền tảng Giáo dục dành cho trẻ"
                  />
                </div>
                <div className="-text">
                  <label>Chuyên gia, giáo viên:</label>
                  <ul>
                    <li>Kết nối, học hỏi và thử thách cùng Bạn bè QUỐC TẾ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 wow fadeInDown">
            <div className="logo-list">
              <div className="logo-list__image">
                <img
                  src={require("../../../assets/images/icon-logo-solution-1.png")}
                  alt="Nền tảng Giáo dục dành cho trẻ"
                />
              </div>
              <div className="logo-list__image">
                <img
                  src={require("../../../assets/images/icon-logo-solution-2.png")}
                  alt="Nền tảng Giáo dục dành cho trẻ"
                />
              </div>
              <div className="logo-list__image">
                <img
                  src={require("../../../assets/images/icon-logo-solution-3.png")}
                  alt="Nền tảng Giáo dục dành cho trẻ"
                />
              </div>
              <div className="logo-list__image">
                <img
                  src={require("../../../assets/images/icon-logo-solution-4.png")}
                  alt="Nền tảng Giáo dục dành cho trẻ"
                />
              </div>
              <div className="logo-list__image">
                <img
                  src={require("../../../assets/images/icon-logo-solution-5.png")}
                  alt="Nền tảng Giáo dục dành cho trẻ"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionForChild;
