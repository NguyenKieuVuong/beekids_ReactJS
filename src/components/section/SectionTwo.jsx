import React from "react";

const SectionTwo = () => {
  return (
    <section id="section-video" className="-bg-img-1">
      <div className="container -wide">
        <div className="row ">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <div className="block-title text-center">
              <div className="title-header">VỚI GIÁO VIÊN</div>
              <h4 className="title-title">
                Beekids mang lại công cụ thiết kế Bài Học và Cuộc Thi trực quan.
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div id="video-tabs" className="tabs-vertical">
              <div className="card-view">
                <div className="card-header" id="">
                  <button
                    type="button"
                    className="tabs-click"
                    data-toggle="collapse"
                    onclick="viewdiv('#showvideo-1','.img-video-show')"
                    data-target="#tabsvideo-1"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    1. Thiết kế Bài Học nhanh chóng
                  </button>
                </div>

                <div
                  id="tabsvideo-1"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#video-tabs"
                >
                  <div className="card-body">
                    <p>
                      Giúp giáo viên không chuyên công nghệ thiết kế giảng dạy
                      và tương tác với Học viên hiệu quả tại Trường hoặc online
                      tại Nhà.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-view">
                <div className="card-header" id="">
                  <button
                    type="button"
                    className="tabs-click collapsed"
                    onclick="viewdiv('#showvideo-2','.img-video-show')"
                    data-toggle="collapse"
                    data-target="#tabsvideo-2"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    2. Hướng dẫn Online hiệu quả
                  </button>
                </div>
                <div
                  id="tabsvideo-2"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#video-tabs"
                >
                  <div className="card-body">
                    <p>
                      Chương trình học tập dài hạn 12 tháng hay 24 tháng dễ dàng
                      được Trẻ hấp thu hiệu quả chỉ với 20 phút tương tác mỗi
                      ngày.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-view">
                <div className="card-header" id="">
                  <button
                    type="button"
                    className="tabs-click collapsed"
                    onclick="viewdiv('#showvideo-3','.img-video-show')"
                    data-toggle="collapse"
                    data-target="#tabsvideo-3"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    3. Tạo các Cuộc Thi hấp dẫn
                  </button>
                </div>
                <div
                  id="tabsvideo-3"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#video-tabs"
                >
                  <div className="card-body">
                    <p>
                      Xây dựng nội dung cuộc thi và chia sẻ đến học viên cùng
                      đăng ký tham gia, tổng kết và trao giải ngay.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-view">
                <div className="card-header" id="">
                  <button
                    type="button"
                    className="tabs-click collapsed"
                    onclick="viewdiv('#showvideo-4','.img-video-show')"
                    data-toggle="collapse"
                    data-target="#tabsvideo-4"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    4. Kết nối và chia sẻ đến Phụ Huynh
                  </button>
                </div>
                <div
                  id="tabsvideo-4"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#video-tabs"
                >
                  <div className="card-body">
                    <p>
                      Chia sẻ tình hình học tập và hướng dẫn Phụ Huynh giúp Trẻ
                      rèn luyện thêm tại nhà thông qua chương trình bài học và
                      bài tập được sắp xếp sẵn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="background-img-video">
              <div id="showvideo-1" className="img-video-show">
                <video
                  width="100%"
                  height="auto"
                  className="videoAnimation"
                  controls="controls"
                  data-statustype="on-track"
                  poster="/images/banner-game.png"
                  data-src="/video/Beekids-LoTrinh.mp4"
                  muted=""
                  playsinline=""
                  autoPlay=""
                  loop=""
                  src="/video/Beekids-LoTrinh.mp4"
                ></video>
              </div>
              <div
                id="showvideo-2"
                className="img-video-show"
                style={{ display: "none" }}
              >
                <img className="" alt="rules" src="/images/img-video-2.png" />
              </div>
              <div
                id="showvideo-3"
                className="img-video-show"
                style={{ display: "none" }}
              >
                <video
                  width="100%"
                  height="auto"
                  className="videoAnimation"
                  controls="controls"
                  data-statustype="on-track"
                  poster="/images/banner-game.png"
                  data-src="/video/Beekids-GiaiCuuDo.mp4"
                  muted=""
                  playsinline=""
                  autoPlay=""
                  loop=""
                  src="/video/Beekids-GiaiCuuDo.mp4"
                ></video>
              </div>
              <div
                id="showvideo-4"
                className="img-video-show"
                style={{ display: "none" }}
              >
                <img className="" alt="rules" src="/images/img-video-4.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
