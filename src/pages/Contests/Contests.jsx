import { Link } from "react-router-dom";

function Contests() {
  return (
    <>
      <section id="header-contest" className="-bg-img-11">
        <div className="container -wide">
          <div className="header-contest-content">
            <h3 className="header-contest-content__title">
              Khóa học VUI HỌC TOÁN CÙNG BEEKIDS
            </h3>
            <p className="header-contest-content__summary">
              Cùng tham gia các cuộc thi để so tài cùng bạn bè Quốc tế!
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="contest-favorite-image">
                  <img
                    src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="contest-favorite">
                  <div className="contest-favorite__header-title">
                    CUỘC THI NỔI BẬT
                  </div>
                  <div className="contest-favorite__title">
                    TƯ DUY TOÁN HỌC BEEMATH
                  </div>
                  <div className="contest-favorite__summary">
                    Cuộc thi Tư duy Toán học BeeMath được tổ chức miễn phí, với
                    mục tiêu tạo ra một sân chơi giúp trẻ tiếp cận Toán bằng tự
                    mình cảm nhận cái đẹp, trải nghiệm để có được những giá trị
                    Toán học phù hợp, POMath và Beekids đã đồng tổ chức Cuộc thi
                    Tư duy Toán học BeeMath 2023. Cuộc thi diễn ra trong 2 tháng
                    và tiếp cận 1.000 trường học cùng hơn 20.000 học sinh tham
                    gia.
                  </div>
                  <div className="contest-favorite__button">
                    <button
                      type="button"
                      className="btn btn-beekids btn-lg pl-xl-5 pr-xl-5"
                    >
                      Tham gia ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contest-list">
        <div className="container -wide">
          <div className="block-title text-center">
            <h4 className="title-title">Danh sách các cuộc thi</h4>
          </div>

          <div className="block-filter">
            <div className="form-row justify-content-center">
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="input-group mb-2 input-group-beekids">
                  <input
                    id="txtKeySearchShop"
                    type="text"
                    className="form-control"
                    placeholder="Nhập khóa học hoặc gói khóa học"
                  />
                  <div className="input-group-append">
                    <button
                      id="btnSearchKey"
                      className="btn btn-outline-secondary"
                      type="button"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-2">
                <select
                  id="_listCateLangdingPage"
                  className="form-control mb-2 form-control-beekids"
                ></select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="block-card --contest">
                <div className="block-card-main">
                  <Link href="#" className="block-card-main__images">
                    <img
                      src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png"
                      alt=""
                    />
                  </Link>
                  <Link href="#" className="block-card-main__cate">
                    Tên cuộc thi
                  </Link>
                  <Link href="#" className="block-card-main__title">
                    Vui học toán cùng Beekids
                  </Link>

                  <div className="block-card-main__price">
                    <div className="col-info_left">Phí tham gia</div>
                    <div className="col-info_right ">
                      <div className="price">
                        <span className="price-old">100.000 đ</span>
                        <span className="price-new">70.000 đ</span>
                      </div>
                    </div>
                  </div>
                  <div className="block-card-main__class">
                    <div className="col-info_left text-nowrap">
                      Lớp tham gia
                    </div>
                    <div className="col-info_right">
                      <span>Lớp 1</span>
                      <span>Lớp 2</span>
                      <span>Lớp 3</span>
                      <span>Lớp 4</span>
                      <span>Lớp 5</span>
                      <span>Lớp chồi</span>
                      <span>Lớp mầm</span>
                    </div>
                  </div>
                  <div className="block-card-main__date">
                    <div className="col-info_left">Ngày diễn ra cuộc thi</div>
                    <div className="col-info_right ">27/05/2023</div>
                  </div>
                  <div className="block-card-main__countdown">
                    <div id="countdown-1">291d 16h 0m 53s </div>
                  </div>
                  <div className="block-card-main__button">
                    <Link
                      id=""
                      href="/"
                      data-image="/images/logo-beekids.png"
                      className="btn btn-block btn-beekids"
                    >
                      Đăng kí tham gia ngay
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="block-card --contest">
                <div className="block-card-main">
                  <Link href="#" className="block-card-main__images">
                    <img
                      src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png"
                      alt=""
                    />
                  </Link>
                  <Link href="#" className="block-card-main__cate">
                    Tên cuộc thi
                  </Link>
                  <Link href="#" className="block-card-main__title">
                    Vui học toán cùng Beekids
                  </Link>

                  <div className="block-card-main__price">
                    <div className="col-info_left">Phí tham gia</div>
                    <div className="col-info_right ">
                      <div className="price">
                        <span className="price-new">Miễn phí</span>
                      </div>
                    </div>
                  </div>
                  <div className="block-card-main__class">
                    <div className="col-info_left text-nowrap">
                      Lớp tham gia
                    </div>
                    <div className="col-info_right">
                      <span>Lớp 1</span>
                      <span>Lớp 2</span>
                      <span>Lớp 3</span>
                      <span>Lớp chồi</span>
                      <span>Lớp mầm</span>
                    </div>
                  </div>
                  <div className="block-card-main__date">
                    <div className="col-info_left">Ngày diễn ra cuộc thi</div>
                    <div className="col-info_right ">27/02/2023</div>
                  </div>
                  <div className="block-card-main__countdown"></div>
                  <div className="block-card-main__button">
                    <Link
                      id=""
                      href="/"
                      data-image="/images/logo-beekids.png"
                      className="btn btn-block btn-secondary"
                    >
                      Hết hạn
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
      <section id="section-cooperate" className="-bg-img-9">
        <div className="container -wide">
          <div className="block-title text-center wow fadeInDown">
            <div className="title-header text-uppercase">Liên hệ</div>
            <h4 className="title-title">Để lại thông tin liên hệ của bạn</h4>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-register">
                <div className="title">BEEKIDS</div>
                <div className="sumary">
                  <b>Beekids</b> - Cam kết mang lại sự an tâm và hài lòng cho
                  Quý Khách Hàng thông qua việc ứng dụng công nghệ giáo dục tiên
                  tiến và sáng tạo liên tục nội dung chất lượng.
                </div>
              </div>
              <div className="img-register d-lg-block d-none">
                <img
                  src={require("../../assets/images/img-register-3.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div
                className="block-register mt-4 mt-lg-0 wow fadeInRight"
                data-wow-delay="0.25s"
              >
                <div className="block-main">
                  <h4 className="mb-5 mt-3 text-center">THÔNG TIN</h4>
                  <div className="form-row">
                    <div className="col-sm-12">
                      <div className="mb-2">
                        <label>
                          Họ và tên <span className="text-danger">*</span>
                        </label>
                        <input
                          id="txrContactFullname"
                          type="text"
                          className="form-control form-control-lg"
                          onchange="checknullInput(this.id,'text','Vui lòng nhập họ và tên.')"
                          name="firstName"
                          placeholder="Nhập họ và tên của bạn..."
                        />
                        <div
                          id="alert-txtfullname"
                          className="invalid-feedback"
                        ></div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mb-2">
                        <label>
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="txrContactEmail"
                          placeholder="Nhập Email của bạn..."
                          onchange="checknullInput(this.id,'email')"
                        />
                        <div
                          id="alert-txtemailNew"
                          className="invalid-feedback"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-2">
                        <label>
                          Số điện thoại <span className="text-danger">*</span>
                        </label>
                        <input
                          id="txrContactPhone"
                          type="tel"
                          className="form-control form-control-lg"
                          name="company"
                          placeholder="Nhập số điện thoại "
                          onchange="checknullInput(this.id,'text','Vui lòng nhập số điện thoại.')"
                        />
                        <div
                          id="alert-txtphone"
                          className="invalid-feedback"
                        ></div>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="mb-2">
                        <label>Nội dung </label>
                        <textarea
                          rows="3"
                          className="form-control form-control-lg"
                          id="txrContactDesc"
                          placeholder="Nhập nội dung"
                        ></textarea>
                      </div>
                      <div id="" className="text-right mt-5">
                        <button
                          id="btnSendContact"
                          type="button"
                          className="btn btn-beekids btn-bigsize"
                        >
                          LIÊN HỆ<i className="fa fa-chevron-right ml-3"></i>
                        </button>
                      </div>
                    </div>
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

export default Contests;
