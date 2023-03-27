import { Ratio } from "react-bootstrap";

function ContestDetail() {
  return (
    <>
      <section id="block-banner" className="-bg-img-18">
        <div className="container -wide">
          <div className="content-block wow fadeInDown" data-wow-delay="0.25s">
            <div className="logo">
              <img
                src={require("../../assets/images/Logo-Bkids-full.png")}
                alt=""
              />
              <img
                src={require("../../assets/images/logo-pomath.png")}
                alt=""
              />
            </div>
            <h4 className="text-1 text-uppercase">Cuộc thi</h4>
            <div className="img-txt">
              <img
                src={require("../../assets/images/text-course.png")}
                alt=""
              />
            </div>

            <div className="txt-register">
              Thời hạn đăng kí: <b>06/02/2023 - 18/03/2023</b>
              <br />
              Tổ chức ôn tập: <b>06/02/2023</b>
              <br />
              Thời gian thi chính thức: <b>19/02/2023 - 02/04/2023</b>
            </div>
            <div className="txt-info-more">
              <div className="summary">
                Hình thức tham gia: <b>Thi Online</b> miễn phí trên nền tảng
                <b>App BKIDS </b>
                <br />
                Độ tuổi/Cấp độ: Học sinh Mầm non, Lớp 1, Lớp 2
                <br />
                <b>Cuộc thi Tư duy Toán học BeeMath</b> được tổ chức miễn phí,
                với mục tiêu tạo ra một sân chơi giúp trẻ tiếp cận Toán bằng tự
                mình cảm nhận cái đẹp, trải nghiệm để có được những giá trị Toán
                học phù hợp, <b>POMath</b> và <b>Beekids</b> đã đồng tổ chức
                <b>Cuộc thi Tư duy Toán học BeeMath 2023</b>. Cuộc thi diễn ra
                trong 2 tháng và tiếp cận <b>1.000</b> trường học cùng hơn
                <b>20.000</b> học sinh tham gia.
              </div>
            </div>

            <div className="_button">
              <a
                href="#section-register"
                className="btn btn-beekids btn-bigsize"
              >
                THAM GIA NGAY
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="section-about" className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="block-title text-center wow fadeInDown">
                <div className="title-header">Về cuộc thi</div>
                <h4 className="title-title">Mô tả chi tiết về cuộc thi</h4>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.25s">
              <div className="block-image-banner mb-4 mb-lg-0">
                <img
                  src={require("../../assets/images/img-banner-about.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.25s">
              <div className="block-about">
                <div className="block-main">
                  <div className="block-row content">
                    <b>Cuộc thi Tư duy Toán học BeeMath 2023</b> là cuộc thi
                    online dành cho trẻ <b>Mầm non, Lớp 1</b> và <b>Lớp 2</b>{" "}
                    giúp trẻ có cơ hội được làm quen với các dạng toán tư duy và
                    các bài tập rèn luyện tư duy. Với mục tiêu tạo ra một sân
                    chơi giúp trẻ tiếp cận Toán bằng tự mình cảm nhận cái đẹp,
                    trải nghiệm để có được những giá trị Toán học phù hợp,
                    <b>POMath</b> và <b>Beekids</b> đã đồng tổ chức
                    <b>Cuộc thi Tư duy Toán học BeeMath 2023</b>. Đặc biệt, khi
                    tham gia cuộc thi trẻ có cơ hội cải thiện được những kỹ năng
                    <b className="txt-yellow">“Vàng”</b> trong quá trình phát
                    triển tư duy toàn diện.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 align-items-center justify-content-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.25s">
              <div className="block-about-download">
                <div className="block-main">
                  <div className="block-row header">
                    Tải ngay Ứng Dụng Bkids để tham gia thi
                  </div>
                  <div className="list-download">
                    <div className="block-download">
                      <div className="text">
                        <img
                          src={require("../../assets/images/store-android.png")}
                          alt=""
                        />
                        CH Play
                      </div>
                      <img
                        src={require("../../assets/images/ma-qr-ch.png")}
                        alt=""
                      />
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
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.25s">
              <div className="block-video mt-5 mt-lg-0">
                <Ratio aspectRatio="16x9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/ng6H9YDq254"
                    title="Beekids - Nền tảng kết nối học tập và phát triển tư duy cho Trẻ trong độ tuổi vàng 3 - 12."
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </Ratio>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-timeline" className="-bg-image-5">
        <div className="container -wide">
          <div className="block-title text-center wow fadeInDown">
            <div className="title-header">Thời gian</div>
            <h4 className="title-title text-center">
              Các mốc thời gian diễn ra cuộc thi
            </h4>
          </div>
          <div className="row align-items-center">
            <div
              className="col-lg-5 order-lg-2 wow fadeInLeft"
              data-wow-delay="0.25s"
            >
              <div className="block-image-banner text-center mb-5 mb-lg-0">
                <img
                  src={require("../../assets/images/img-timeline.png")}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-7 order-lg-1 wow fadeInRight"
              data-wow-delay="0.25s"
            >
              <div className="block-timeline">
                <div className="block-main">
                  <div className="block-col left">
                    <img
                      src={require("../../assets/images/img-timeline-1.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-col right">
                    <div className="title">VÒNG THI THỬ (19/02/2023)</div>
                    <div className="summary">
                      Học sinh luyện tập để làm quen với đề. Được làm lại nhiều
                      lần và không tính kết quả vào cuộc thi
                    </div>
                  </div>
                </div>
                <div className="block-main">
                  <div className="block-col left">
                    <img
                      src={require("../../assets/images/img-timeline-2.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-col right">
                    <div className="title">VÒNG THI SƠ LOẠI (19/03/2023)</div>
                    <div className="summary">
                      Chỉ được làm bài 1 lần và Lấy top 500 học sinh đứng đầu
                      mỗi khối để thi tiếp vòng Chung kết.
                    </div>
                  </div>
                </div>
                <div className="block-main">
                  <div className="block-col left">
                    <img
                      src={require("../../assets/images/img-timeline-3.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-col right">
                    <div className="title">VÒNG CHUNG KẾT (02/04/2023)</div>
                    <div className="summary">
                      Theo dõi qua Zoom (Chỉ được làm bài 1 lần) và Lấy số lượng
                      lọc để chấm giải.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-rule-reward" className="-bg-image-6">
        <div className="container -wide">
          <div className="block-title text-center wow fadeInDown">
            <div className="title-header text-uppercase">Thể lệ</div>
            <h4 className="title-title">
              Thể lệ và cách tính điểm của cuộc thi
            </h4>
          </div>
          <div className="row align-items-center justify-content-center mb-5">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.5s">
              <div className="block-image-banner text-center mb-4 mb-lg-0">
                <img src={require("../../assets/images/img-rule.png")} alt="" />
              </div>
            </div>

            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.25s">
              <div className="block-rule">
                <div className="block-main">
                  <div className="block-row content">
                    <div className="title">THỂ LỆ</div>

                    <div className="text">
                      Thí sinh làm bài thi theo các đề được phân theo khối lớp,
                      thời gian làm bài tối đa <b>40 phút</b>. Bảng xếp hạng
                      được tính dựa theo số điểm đạt được và thời gian làm bài
                      nhanh nhất.
                    </div>
                  </div>

                  <div className="block-row content">
                    <div className="title">CÁCH TÍNH ĐIỂM</div>
                    <div className="text-2">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      Trẻ nào có điểm số cao hơn sẽ nằm trên Bảng xếp hạng.
                    </div>
                    <div className="text-2">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      Nếu trẻ có cùng điểm số, nhưng có thời gian làm bài ngắn
                      hơn sẽ nằm trên Bảng xếp hạng.
                    </div>
                    <div className="text-3">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <div className="text-detail">
                        <b>Số lượng giải thưởng:</b>
                        <ul>
                          <li>
                            <b>GIẢI VÀNG:</b> 10 giải (vị trí từ 1 - 10)
                          </li>
                          <li>
                            <b>GIẢI BẠC:</b> 15 giải (vị trí từ 11 - 25)
                          </li>
                          <li>
                            <b>GIẢI ĐỒNG:</b> 15 giải (vị trí từ 26 - 40)
                          </li>
                          <li>
                            <b>VÒNG SƠ LOẠI:</b> 10 giải (top 10)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 mt-lg-5">
            <div className="col-12">
              <div className="block-title text-center wow fadeInDown">
                <div className="title-header text-uppercase">Phần thưởng</div>
                <h4 className="title-title">
                  Với rất nhiều giải thưởng dành cho trẻ
                </h4>
              </div>
            </div>
          </div>

          <div className="row justify-content-center row-rewards">
            <div
              className="col-sm-6 col-lg-4 col-xl-3 wow fadeInDown animated"
              data-wow-delay="0.25s"
            >
              <div className="block-rewards rewards-4">
                <div className="block-main">
                  <div className="block-row icon">
                    <img
                      src={require("../../assets/images/Medal_Gold.png")}
                      alt=""
                    />
                  </div>

                  <div className="block-row title">
                    <b>GIẢI VÀNG</b>
                    <span>10 giải (vị trí từ 1 đến 10/ 1 khối lớp)</span>
                  </div>
                  <div className="block-row text">
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      1 voucher khóa học
                      <b>500k</b>
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>voucher 35%</b> khoá học toán tư duy POMath
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>1</b> bộ đồ chơi
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>1.000.000</b> Beexu
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      Giấy chứng nhận
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      Huy chương <b>Vàng</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-rewards rewards-4"></div>
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 wow fadeInDown animated"
              data-wow-delay="0.25s"
            >
              <div className="block-rewards rewards-3">
                <div className="block-main">
                  <div className="block-row icon">
                    <img
                      src={require("../../assets/images/Medal_Silver.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-row title">
                    <b>GIẢI BẠC</b>
                    <span>15 giải (vị trí từ 11 đến 25/ 1 khối lớp)</span>
                  </div>
                  <div className="block-row text">
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      1 voucher khóa học
                      <b>300k</b>
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>voucher 35%</b> khoá học toán tư duy POMath
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>1</b> bộ học liệu
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>500.000</b> Beexu
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      Giấy chứng nhận
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      Huy chương <b>Bạc</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-rewards rewards-3"></div>
            </div>

            <div
              className="col-sm-6 col-lg-4 col-xl-3 wow fadeInDown animated"
              data-wow-delay="0.25s"
            >
              <div className="block-rewards rewards-2">
                <div className="block-main">
                  <div className="block-row icon">
                    <img
                      src={require("../../assets/images/Medal_Bronze.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-row title">
                    <b>GIẢI ĐỒNG</b>
                    <span>15 giải (vị trí từ 26 đến 40/ 1 khối lớp)</span>
                  </div>
                  <div className="block-row text">
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      1 voucher khóa học
                      <b>200k</b>
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>voucher 35%</b> khoá học toán tư duy POMath
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>300.000</b> Beexu
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      Giấy chứng nhận
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      Huy chương <b>Đồng</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-rewards rewards-2"></div>
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 wow fadeInDown animated"
              data-wow-delay="0.25s"
            >
              <div className="block-rewards rewards-1">
                <div className="block-main">
                  <div className="block-row icon">
                    <img
                      src={require("../../assets/images/Medal_4.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-row title no-sub">
                    <b>TOP 10 VÒNG SƠ LOẠI</b>
                  </div>
                  <div className="block-row text">
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>voucher 35%</b> khoá học toán tư duy POMath
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>1</b> quyển sách
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>300.000</b> Beexu
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      Giấy chứng nhận
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-rewards rewards-1"></div>
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 wow fadeInDown animated"
              data-wow-delay="0.25s"
            >
              <div className="block-rewards rewards-5">
                <div className="block-main">
                  <div className="block-row icon">
                    <img
                      src={require("../../assets/images/Medal_5.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-row title no-sub">
                    <b>GIẢI TRIỂN VỌNG</b>
                    <span>Top 20% vòng loại</span>
                  </div>
                  <div className="block-row text">
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>voucher 35%</b> khoá học toán tư duy POMath
                    </div>
                    <div className="_gift">
                      <img
                        src={require("../../assets/images/ico-stick.png")}
                        alt=""
                      />
                      <b>50.000</b> Beexu
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-rewards rewards-1"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-value" className="-bg-image-7">
        <div className="container -wide">
          <div className="block-title text-center wow fadeInDown">
            <div className="title-header text-uppercase">Giá trị</div>
            <h4 className="title-title">Những giá trị mang lại cho bé</h4>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.5s">
              <div className="block-value">
                <div className="block-main">
                  <div className="block-row summary">
                    Cuộc thi tổ chức giúp trẻ vừa học vừa chơi rất hiệu quả,
                    cũng như tương tác dễ dàng với bạn bè để phát triển nhiều kỹ
                    năng cần thiết.
                  </div>
                  <div className="block-row title">
                    Giúp bé phát triển <span>8</span> kỹ năng tư duy của thế kỷ
                    21
                  </div>
                  <div className="block-row skill">
                    <div className="block-skill">
                      <div className="block-main wow fadeInDown">
                        <div className="block-row icon">
                          <img
                            src={require("../../assets/images/ico-skill-1.png")}
                            alt=""
                          />
                        </div>
                        <div className="block-row title">Quan sát</div>
                      </div>
                      <div className="block-main wow fadeInDown">
                        <div className="block-row icon">
                          <img
                            src={require("../../assets/images/ico-skill-2.png")}
                            alt=""
                          />
                        </div>
                        <div className="block-row title">Ghi nhớ</div>
                      </div>
                      <div className="block-main wow fadeInDown">
                        <div className="block-row icon">
                          <img
                            src={require("../../assets/images/ico-skill-3.png")}
                            alt=""
                          />
                        </div>
                        <div className="block-row title">Suy luận</div>
                      </div>
                      <div className="block-main wow fadeInDown">
                        <div className="block-row icon">
                          <img
                            src={require("../../assets/images/ico-skill-4.png")}
                            alt=""
                          />
                        </div>
                        <div className="block-row title">Biện luận</div>
                      </div>
                      <div className="block-main wow fadeInDown">
                        <div className="block-row icon">
                          <img
                            src={require("../../assets/images/ico-skill-5.png")}
                            alt=""
                          />
                        </div>
                        <div className="block-row title">Logic</div>
                      </div>
                      <div className="block-main wow fadeInDown">
                        <div className="block-row icon">
                          <img
                            src={require("../../assets/images/ico-skill-6.png")}
                            alt=""
                          />
                        </div>
                        <div className="block-row title">Số học</div>
                      </div>
                      <div className="block-main wow fadeInDown">
                        <div className="block-row icon">
                          <img
                            src={require("../../assets/images/ico-skill-7.png")}
                            alt=""
                          />
                        </div>
                        <div className="block-row title">Tài chính</div>
                      </div>
                      <div className="block-main wow fadeInDown">
                        <div className="block-row icon">
                          <img
                            src={require("../../assets/images/ico-skill-9.png")}
                            alt=""
                          />
                        </div>
                        <div className="block-row title">Ngôn ngữ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.25s">
              <div className="block-video mt-5 mt-lg-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    width="100%"
                    height="350"
                    src="https://www.youtube.com/embed/ng6H9YDq254"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-logo" className="">
        <div className="container -wide">
          <div className="block-title text-center wow fadeInDown">
            <div className="title-header text-uppercase">Nhà tài trợ</div>
            <h4 className="title-title">
              Chân thành cảm ơn các Nhà Tài Trợ đã đồng hành và lan toả cuộc thi
            </h4>
          </div>
          <div className="block-list-logo">
            <div className="row row-1">
              <div className="col-6 col-md-4 col-lg-3">
                <div className="block-logo">
                  <div className="block-main">
                    <img
                      className="img-thumb"
                      src="/images/list-logo-pomath.png"
                      alt="Dragold"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="block-logo">
                  <div className="block-main">
                    <img
                      className="img-thumb"
                      src="/images/list-logo-baophuc.png"
                      alt="Hifiveplus"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="block-logo">
                  <div className="block-main">
                    <img
                      className="img-thumb"
                      src="/images/list-logo-iedv.png"
                      alt="MNP Edu"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="block-logo">
                  <div className="block-main">
                    <img
                      className="img-thumb"
                      src="/images/list-logo-upo.png"
                      alt="Sparta"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-2 justify-content-center">
              <div className="col-6 col-md-4 col-lg-3">
                <div className="block-logo">
                  <div className="block-main">
                    <img
                      className="img-thumb"
                      src="/images/list-logo-mnpedu.png"
                      alt="Dragold"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="block-logo">
                  <div className="block-main">
                    <img
                      className="img-thumb"
                      src="/images/list-logo-sparta.png"
                      alt="Hifiveplus"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="block-logo">
                  <div className="block-main">
                    <img
                      className="img-thumb"
                      src="/images/list-logo-sieutrinho.png"
                      alt="MNP Edu"
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

export default ContestDetail;
