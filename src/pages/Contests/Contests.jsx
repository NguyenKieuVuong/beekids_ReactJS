function Contests() {
  return (
    <>
      <section id="header-contest" class="-bg-img-11">
        <div class="container -wide">
          <div class="header-contest-content">
            <h3 class="header-contest-content__title">
              Khóa học VUI HỌC TOÁN CÙNG BEEKIDS
            </h3>
            <p class="header-contest-content__summary">
              Cùng tham gia các cuộc thi để so tài cùng bạn bè Quốc tế!
            </p>
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="contest-favorite-image">
                  <img src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png" />
                </div>
              </div>
              <div class="col-lg-5">
                <div class="contest-favorite">
                  <div class="contest-favorite__header-title">
                    CUỘC THI NỔI BẬT
                  </div>
                  <div class="contest-favorite__title">
                    TƯ DUY TOÁN HỌC BEEMATH
                  </div>
                  <div class="contest-favorite__summary">
                    Cuộc thi Tư duy Toán học BeeMath được tổ chức miễn phí, với
                    mục tiêu tạo ra một sân chơi giúp trẻ tiếp cận Toán bằng tự
                    mình cảm nhận cái đẹp, trải nghiệm để có được những giá trị
                    Toán học phù hợp, POMath và Beekids đã đồng tổ chức Cuộc thi
                    Tư duy Toán học BeeMath 2023. Cuộc thi diễn ra trong 2 tháng
                    và tiếp cận 1.000 trường học cùng hơn 20.000 học sinh tham
                    gia.
                  </div>
                  <div class="contest-favorite__button">
                    <button
                      type="button"
                      class="btn btn-beekids btn-lg pl-xl-5 pr-xl-5"
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
        <div class="container -wide">
          <div class="block-title text-center">
            <h4 class="title-title">Danh sách các cuộc thi</h4>
          </div>

          <div class="block-filter">
            <div class="form-row justify-content-center">
              <div class="col-md-6 col-lg-4 col-xl-4">
                <div class="input-group mb-2 input-group-beekids">
                  <input
                    id="txtKeySearchShop"
                    type="text"
                    class="form-control"
                    placeholder="Nhập khóa học hoặc gói khóa học"
                  />
                  <div class="input-group-append">
                    <button
                      id="btnSearchKey"
                      class="btn btn-outline-secondary"
                      type="button"
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-2">
                <select
                  id="_listCateLangdingPage"
                  class="form-control mb-2 form-control-beekids"
                ></select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="block-card --contest">
                <div class="block-card-main">
                  <a href="#" class="block-card-main__images">
                    <img src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png" />
                  </a>
                  <a href="#" class="block-card-main__cate">
                    Tên cuộc thi
                  </a>
                  <a href="#" class="block-card-main__title">
                    Vui học toán cùng Beekids
                  </a>

                  <div class="block-card-main__price">
                    <div class="col-info_left">Phí tham gia</div>
                    <div class="col-info_right ">
                      <div class="price">
                        <span class="price-old">100.000 đ</span>
                        <span class="price-new">70.000 đ</span>
                      </div>
                    </div>
                  </div>
                  <div class="block-card-main__class">
                    <div class="col-info_left text-nowrap">Lớp tham gia</div>
                    <div class="col-info_right">
                      <span>Lớp 1</span>
                      <span>Lớp 2</span>
                      <span>Lớp 3</span>
                      <span>Lớp 4</span>
                      <span>Lớp 5</span>
                      <span>Lớp chồi</span>
                      <span>Lớp mầm</span>
                    </div>
                  </div>
                  <div class="block-card-main__date">
                    <div class="col-info_left">Ngày diễn ra cuộc thi</div>
                    <div class="col-info_right ">27/05/2023</div>
                  </div>
                  <div class="block-card-main__countdown">
                    <div id="countdown-1">291d 16h 0m 53s </div>
                  </div>
                  <div class="block-card-main__button">
                    <a
                      id=""
                      href="javascript:void(0)"
                      data-image="/images/logo-beekids.png"
                      class="btn btn-block btn-beekids"
                    >
                      Đăng kí tham gia ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="block-card --contest">
                <div class="block-card-main">
                  <a href="#" class="block-card-main__images">
                    <img src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png" />
                  </a>
                  <a href="#" class="block-card-main__cate">
                    Tên cuộc thi
                  </a>
                  <a href="#" class="block-card-main__title">
                    Vui học toán cùng Beekids
                  </a>

                  <div class="block-card-main__price">
                    <div class="col-info_left">Phí tham gia</div>
                    <div class="col-info_right ">
                      <div class="price">
                        <span class="price-new">Miễn phí</span>
                      </div>
                    </div>
                  </div>
                  <div class="block-card-main__class">
                    <div class="col-info_left text-nowrap">Lớp tham gia</div>
                    <div class="col-info_right">
                      <span>Lớp 1</span>
                      <span>Lớp 2</span>
                      <span>Lớp 3</span>
                      <span>Lớp chồi</span>
                      <span>Lớp mầm</span>
                    </div>
                  </div>
                  <div class="block-card-main__date">
                    <div class="col-info_left">Ngày diễn ra cuộc thi</div>
                    <div class="col-info_right ">27/02/2023</div>
                  </div>
                  <div class="block-card-main__countdown"></div>
                  <div class="block-card-main__button">
                    <a
                      id=""
                      href="javascript:void(0)"
                      data-image="/images/logo-beekids.png"
                      class="btn btn-block btn-secondary"
                    >
                      Hết hạn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="logo-list">
            <div class="row row-1">
              <div class="col-6 col-md-4 col-lg-3">
                <div class="logo-item">
                  <div class="logo-item__image">
                    <img
                      class="img-thumb"
                      src="/images/list-logo-pomath.png"
                      alt="Dragold"
                    />
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="logo-item">
                  <div class="logo-item__image">
                    <img
                      class="img-thumb"
                      src="/images/list-logo-baophuc.png"
                      alt="Hifiveplus"
                    />
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="logo-item">
                  <div class="logo-item__image">
                    <img
                      class="img-thumb"
                      src="/images/list-logo-iedv.png"
                      alt="MNP Edu"
                    />
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="logo-item">
                  <div class="logo-item__image">
                    <img
                      class="img-thumb"
                      src="/images/list-logo-upo.png"
                      alt="Sparta"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-2 justify-content-center">
              <div class="col-6 col-md-4 col-lg-3">
                <div class="logo-item">
                  <div class="logo-item__image">
                    <img
                      class="img-thumb"
                      src="/images/list-logo-mnpedu.png"
                      alt="Dragold"
                    />
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="logo-item">
                  <div class="logo-item__image">
                    <img
                      class="img-thumb"
                      src="/images/list-logo-sparta.png"
                      alt="Hifiveplus"
                    />
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="logo-item">
                  <div class="logo-item__image">
                    <img
                      class="img-thumb"
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
      <section id="section-cooperate" class="-bg-img-9">
        <div class="container -wide">
          <div class="block-title text-center wow fadeInDown">
            <div class="title-header text-uppercase">Liên hệ</div>
            <h4 class="title-title">Để lại thông tin liên hệ của bạn</h4>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="text-register">
                <div class="title">BEEKIDS</div>
                <div class="sumary">
                  <b>Beekids</b> - Cam kết mang lại sự an tâm và hài lòng cho
                  Quý Khách Hàng thông qua việc ứng dụng công nghệ giáo dục tiên
                  tiến và sáng tạo liên tục nội dung chất lượng.
                </div>
              </div>
              <div class="img-register d-lg-block d-none">
                <img src="/images/img-register-3.png" />
              </div>
            </div>
            <div class="col-lg-6 ">
              <div
                class="block-register mt-4 mt-lg-0 wow fadeInRight"
                data-wow-delay="0.25s"
              >
                <div class="block-main">
                  <h4 class="mb-5 mt-3 text-center">THÔNG TIN</h4>
                  <div class="form-row">
                    <div class="col-sm-12">
                      <div class="mb-2">
                        <label>
                          Họ và tên <span class="text-danger">*</span>
                        </label>
                        <input
                          id="txrContactFullname"
                          type="text"
                          class="form-control form-control-lg"
                          onchange="checknullInput(this.id,'text','Vui lòng nhập họ và tên.')"
                          name="firstName"
                          placeholder="Nhập họ và tên của bạn..."
                        />
                        <div
                          id="alert-txtfullname"
                          class="invalid-feedback"
                        ></div>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="mb-2">
                        <label>
                          Email <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="txrContactEmail"
                          placeholder="Nhập Email của bạn..."
                          onchange="checknullInput(this.id,'email')"
                        />
                        <div
                          id="alert-txtemailNew"
                          class="invalid-feedback"
                        ></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="mb-2">
                        <label>
                          Số điện thoại <span class="text-danger">*</span>
                        </label>
                        <input
                          id="txrContactPhone"
                          type="tel"
                          class="form-control form-control-lg"
                          name="company"
                          placeholder="Nhập số điện thoại "
                          onchange="checknullInput(this.id,'text','Vui lòng nhập số điện thoại.')"
                        />
                        <div id="alert-txtphone" class="invalid-feedback"></div>
                      </div>
                    </div>

                    <div class="col-sm-12">
                      <div class="mb-2">
                        <label>Nội dung </label>
                        <textarea
                          rows="3"
                          class="form-control form-control-lg"
                          id="txrContactDesc"
                          placeholder="Nhập nội dung"
                        ></textarea>
                      </div>
                      <div id="" class="text-right mt-5">
                        <button
                          id="btnSendContact"
                          type="button"
                          class="btn btn-beekids btn-bigsize"
                        >
                          LIÊN HỆ<i class="fa fa-chevron-right ml-3"></i>
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
