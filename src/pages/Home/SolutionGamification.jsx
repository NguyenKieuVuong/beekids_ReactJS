function SolutionGamification() {
  return (
    <section id="solution-gamification" className="">
      <div className="container -wide">
        <div className="block-title">
          <div className="title-header">GIẢI PHÁP</div>
          <h4 className="title-title">Nền tảng Gamification</h4>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 wow fadeInDown">
            <div className="row justify-content-center">
              <div className="col-6 wow fadeInDown">
                <div className="gamification-item">
                  <div className="gamification-item__image">
                    <img
                      src={require("../../assets/images/icon-gamification-1.png")}
                      alt=""
                    />
                  </div>
                  <div className="gamification-item__title">
                    Nền tảng Gamification
                  </div>
                  <div className="gamification-item__summary">
                    Chuyển đổi các chương trình phát triển tư duy dưới dạng tài
                    liệu, sách hoặc video thành các trò chơi tương tác giúp trẻ
                    thích luyện tập với bạn bè, gia đình, giáo viên, online or
                    offline.
                  </div>
                </div>
              </div>
              <div className="col-6 wow fadeInDown">
                <div className="gamification-item">
                  <div className="gamification-item__image">
                    <img
                      src={require("../../assets/images/icon-gamification-2.png")}
                      alt=""
                    />
                  </div>
                  <div className="gamification-item__title">
                    Tập trung phát triển tư duy
                  </div>
                  <div className="gamification-item__summary">
                    Quan sát, Ghi nhớ, Suy luận, Biện luận, Logic, Số học Tạo
                    thói quen chủ động luyện tập hàng tuần.
                  </div>
                </div>
              </div>
              <div className="col-6 wow fadeInDown">
                <div className="gamification-item">
                  <div className="gamification-item__image">
                    <img
                      src={require("../../assets/images/icon-gamification-3.png")}
                      alt=""
                    />
                  </div>
                  <div className="gamification-item__title">Sự đồng hành</div>
                  <div className="gamification-item__summary">
                    Gắn kết gia đình qua các trải nghiệm trên ứng dụng Bkids.
                    Tạo ra các chương trình hỗ trợ Giáo Viên tương tác với Trẻ
                    hiệu quả hơn
                  </div>
                </div>
              </div>
              <div className="col-6 wow fadeInDown">
                <div className="gamification-item">
                  <div className="gamification-item__image">
                    <img
                      src={require("../../assets/images/icon-gamification-4.png")}
                      alt=""
                    />
                  </div>
                  <div className="gamification-item__title">
                    Tăng hứng thú học tập
                  </div>
                  <div className="gamification-item__summary">
                    Học tập thông qua các trò chơi tương tác. Trẻ kết nối với
                    Bạn bè để cùng nhau rèn luyện kỹ năng và tham gia các cuộc
                    thi tiêu chuẩn quốc tế.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInLeft animated"
            data-wow-delay="0.5s"
          >
            <div className="text-center">
              <img
                src={require("../../assets/images/right-content-3.png")}
                alt=""
              />
            </div>
            <h3 className="title-header-download">
              Khám phá ngay ứng dụng BKIDS
            </h3>
            <div className="list-download">
              <div className="block-download">
                <div className="text">
                  <img
                    src={require("../../assets/images/store-android.png")}
                    alt=""
                  />
                  CH Play
                </div>
                <img src={require("../../assets/images/ma-qr-ch.png")} alt="" />
              </div>
              <div className="block-download">
                <div className="text">
                  <img
                    src={require("../../assets/images/store-apple.png")}
                    alt=""
                  />
                  App Store
                </div>
                <img
                  src={require("../../assets/images/ma-qr-app.png")}
                  alt=""
                />
              </div>
              <div className="block-download">
                <div className="text">
                  <img
                    src={require("../../assets/images/app-website.png")}
                    alt=""
                  />
                  Website
                </div>
                <img
                  src={require("../../assets/images/ma-qr-web.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionGamification;
