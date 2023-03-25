function Reality() {
  return (
    <section id="reality" className="">
      <div className="container -wide">
        <div className="row justify-content-center">
          <div className="col-lg-6 wow fadeInDown">
            <div className="block-title">
              <div className="title-header text-uppercase">Thực trạng</div>
              <h4 className="title-title">
                Trẻ trong giai đoạn từ 4 - 10 tuổi
              </h4>
            </div>
            <div className="reality-child-list">
              <div className="reality-child">
                <div className="reality-child__image">
                  <img
                    src={require("../../assets/images/icon-reality-1.png")}
                    alt="Dễ chán, khó tập trung, khó hình thành thói quen rèn luyện tại nhà"
                  />
                </div>
                <div className="reality-child__text">
                  <span>Dễ chán, khó tập trung, </span>khó hình thành thói quen
                  rèn luyện <span>tại nhà</span>
                </div>
              </div>
              <div className="reality-child">
                <div className="reality-child__image">
                  <img
                    src={require("../../assets/images/icon-reality-2.png")}
                    alt="Không có hệ thống để học tập, rèn luyện và khám phá cùng nhau"
                  />
                </div>
                <div className="reality-child__text">
                  <span>Không có hệ thống</span> để học tập, rèn luyện và khám
                  phá cùng nhau
                </div>
              </div>
              <div className="reality-child">
                <div className="reality-child__image">
                  <img
                    src={require("../../assets/images/icon-reality-3.png")}
                    alt="Dễ chán, khó tập trung, khó hình thành thói quen rèn luyện tại nhà"
                  />
                </div>
                <div className="reality-child__text">
                  Không có nền tảng toàn diện, chuyên sâu
                  <span>phát triển tư duy</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInLeft animated"
            data-wow-delay="0.5s"
          >
            <div
              className="text-center mt-5 mt-lg-3 wow fadeInRight animated"
              data-wow-delay="0.25s"
            >
              <img
                src={require("../../assets/images/img-reality.png")}
                alt="Thực trạng trẻ trong giai đoạn từ 4 - 10 tuổi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reality;
