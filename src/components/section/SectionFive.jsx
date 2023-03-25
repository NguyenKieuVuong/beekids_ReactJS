import React from "react";

const SectionFive = () => {
  return (
    <section id="section-2" className="-bg-img-1">
      <div className="container -wide">
        <div className="block-title text-center">
          <div className="title-header">QUẢN LÝ CHUYÊN BIỆT</div>
          <h4 className="title-title">Beekids là Nền tảng giáo dục mở</h4>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-5 offset-lg-0">
            <p className="text-sumary font-weight-bold">
              Với sự tham gia của Trung Tâm, Nhà Trường cùng mục tiêu tạo sân
              chơi trí tuệ và hiệu quả cao cho Trẻ.
            </p>
            <div id="accordion" className="tabs-vertical">
              <div className="card-view">
                <div className="card-header" id="">
                  <button
                    type="button"
                    className="tabs-click"
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Quản lý và phân quyền sử dụng cho từng bộ phận
                  </button>
                </div>

                <div
                  id="collapse1"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Giúp kiểm soát được tình trạng thừa thiếu nhân sự ở mỗi vị
                      trí và bảng lương tại mọi thời điểm của năm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-view">
                <div className="card-header" id="">
                  <button
                    type="button"
                    className="tabs-click collapsed"
                    data-toggle="collapse"
                    data-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Quản lý lịch dạy và tương tác đến Phụ Huynh
                  </button>
                </div>
                <div
                  id="collapse3"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Giáo viên đơn giản để kết nối, tương tác và báo cáo kết
                      quả đến Phụ Huynh thông qua ứng dụng "Sổ liên lạc online"
                      trên điện thoại di động.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-view">
                <div className="card-header" id="">
                  <button
                    type="button"
                    className="tabs-click collapsed"
                    data-toggle="collapse"
                    data-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Thu chi rõ ràng và dòng tiền minh bạch hàng tháng
                  </button>
                </div>
                <div
                  id="collapse4"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Tự động hóa hệ thống kiểm kê, tính toán giúp hạn chế sai
                      sót và giảm thiểu nhân lực cho các đơn vị.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-view">
                <div className="card-header" id="">
                  <button
                    type="button"
                    className="tabs-click collapsed"
                    data-toggle="collapse"
                    data-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Biểu đồ thống kê trực quan
                  </button>
                </div>
                <div
                  id="collapse5"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Báo cáo các số liệu thông qua biểu đồ định kỳ. Giúp các
                      Trung tâm, Trường mầm non dễ dàng so sánh một cách trực
                      quan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-12 col-lg-6 col-xl-7">
            <div className="media-slide">
              <video
                width="100%"
                height="auto"
                className="videoAnimation"
                controls="controls"
                data-statustype="on-track"
                poster="/images/banner-game.png"
                data-src="/video/Beekids-HeThongQuanLyNoiBo.mp4"
                muted=""
                playsinline=""
                autoPlay=""
                loop=""
                src="/video/Beekids-HeThongQuanLyNoiBo.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
