import React from "react";

function AmbassadorsList(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="block-ambassador">
        <div className="block-main">
          <div className="block-row image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="block-row title">{props.title}</div>
          <div className="block-row jobs">{props.jobs}</div>
          <div className="block-row sumary">{props.summary}</div>
          <div className="block-row button">
            <button type="button" className="btn-block btn btn-beekids">
              Xem thông tin chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function Ambassadors() {
  return (
    <>
      <section id="block-banner_ambassador" className="-bg-img-2">
        <div className="container -wide">
          <div className="form-row align-items-center justify-content-center">
            <div className="col-12">
              <div
                className="content-block wow fadeInDown animated"
                data-wow-delay="0.25s"
              >
                <div className="text-1">
                  <div className="logo">
                    <img
                      src={require("../../assets/images/Logo-Bkids-full.png")}
                      //src={require("../../assets/images/Logo-Bkids-full.png")}
                      alt=""
                    />
                  </div>

                  <h2 className="text-uppercase">
                    đại sứ giáo dục của Beekids
                  </h2>
                </div>

                <h4 className="">
                  Bạn có muốn lan tỏa và chia sẻ
                  <span className="txt-orange">những điều tốt đẹp</span> đến
                  cộng đồng giáo dục Việt Nam?
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-center wow fadeInLeft animated"
                data-wow-delay="0.25s"
              >
                <img
                  src={require("../../assets/images/banner-ambassador.png")}
                  alt=""
                  className="mt-4 mt-lg-0 mb-4 mb-lg-0"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wow fadeInRight animated" data-wow-delay="0.25s">
                <div className="text-2">
                  <div className="row-text-1">Học hỏi kiến thức</div>
                  <div className="row-text-1">Nâng cao tinh thần</div>
                  <div className="row-text-1">Truyền cảm hứng</div>
                </div>
                <div className="button text-center">
                  <button
                    type="button"
                    href="#section-register"
                    className="btn btn-bigsize btn-beekids clickid"
                  >
                    Đăng kí ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-ambassador" className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="block-title title-ambassador text-center wow fadeInDown animated">
                <div className="title-header">ĐẠI SỨ</div>
                <h4 className="title-title">Đại sứ tiêu biểu của Beekids</h4>
              </div>
            </div>
          </div>
          <div className="form-row justify-content-center">
            <AmbassadorsList
              image={require("../../assets/images/avatar_Nguyen_Ngoc_Lan.jpg")}
              title="Cô giáo: Nguyễn Ngọc Lan"
              jobs="Công tác: Trường Tiểu học Kim Liên"
              summary="Với 32 năm theo đuổi nghề giáo, cô đã xuất sắc giành được
                    nhiều danh hiệu như Giáo viên dạy giỏi và chủ nhiệm giỏi cấp
                    Quận và cấp thành phố..."
            />

            <AmbassadorsList
              image={require("../../assets/images/avatar_Bui_Bich_Phuong.jpg")}
              title="Cô giáo: Bùi Bích Phương"
              jobs="Công tác: Trường Tiểu học Gia Quất"
              summary="Trong suốt gần 10 năm theo đuổi nghề giáo của mình, cô đã
                    xuất sắc giành được nhiều giải thưởng như: Giải Nhất cuộc
                    thi Thiết kế bài giảng E-learning cấp Thành phố năm 2017"
            />

            <AmbassadorsList
              image={require("../../assets/images/avatar_Bui_Quynh_Lan.jpg")}
              title="Cô giáo: Bùi Quỳnh Lan"
              jobs="Công tác: Trường Tiểu học Trưng Vương"
              summary="Với 30 năm trong nghề trồng người, cô đã nhiều lần đạt giải
                    thưởng Giáo viên dạy giỏi cấp Quốc Gia."
            />

            <AmbassadorsList
              image={require("../../assets/images/avatar_Nguyen_Thu_Huong.jpg")}
              title="Cô giáo: Nguyễn Thu Hường"
              jobs="Công tác: Trường Tiểu học Gia Quất"
              summary="Với 5 năm trong nghề, cô luôn tìm tòi và mang đến những
                    phương pháp dạy và học tốt nhất dành cho học sinh của mình."
            />
            <AmbassadorsList
              image={require("../../assets/images/avatar_Le_Thanh_Tung.jpg")}
              title="Thầy giáo: Lê Thanh Tùng"
              jobs="Công tác: Học viện Tâm lý - Giáo dục JB Việt Nam"
              summary="Với hơn 20 năm kinh nghiệm trong nghề, thầy đã, đang và vẫn
                    sẽ tiếp tục mang đến những giải pháp giúp cân bằng tâm lý và
                    đào tạo các kỹ năng cho trẻ."
            />
            <AmbassadorsList
              image={require("../../assets/images/avatar_Doan_Manh_Hieu.jpg")}
              title="Thầy giáo: Đoàn Mạnh Hiếu"
              jobs="Công tác: Trường Tiểu học Thanh Đa"
              summary="Với hơn 10 năm kinh nghiệm dạy học, thầy đã dành cho mình
                    nhiều giải thưởng lớn. Đặc biệt, thầy chính là tác giả của 5
                    bài báo 'Văn tuổi thơ' về hướng dẫn viết văn cho học sinh
                    Tiểu học."
            />
            <AmbassadorsList
              image={require("../../assets/images/avatar_Nguyen_Thu_Hien.jpg")}
              title="Cô giáo: Nguyễn Thu Hiền"
              jobs="Công tác: Trường Tiểu học Gia Quất"
              summary="Với hơn 10 năm kinh nghiệm dạy học, cô đã dành cho mình
                    nhiều giải thưởng lớn. Đặc biệt, cô là giáo viên duy nhất
                    được Bộ Giáo dục và Đào tạo cử đi giao lưu, nâng cao chuyên
                    môn tại SEAMEO REGIONAL CENTRE FOR QITEP IN MATHEMATICS -
                    Indonesia (2013)."
            />
          </div>
          <div className="text-center mt-5">
            <a className="btn btn-link text-orange" href="/tat-ca-dai-su">
              Xem tất cả <i className="icofont-arrow-right pl-2"></i>
            </a>
          </div>
        </div>
      </section>
      <section id="section-quyenloi" className="-bg-img-1">
        <div className="container -wide">
          <div className="block-title title-ambassador text-center wow fadeInDown animated">
            <div className="title-header text-uppercase">Quyền lợi</div>
            <h4 className="title-title">
              Khi trở thành Đại sứ của Beekids bạn sẽ nhận được những quyền lợi
            </h4>
          </div>
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-6 wow fadeInLeft animated"
              data-wow-delay="0.5s"
            >
              <div
                className="text-center mb-5 mb-lg-0 wow fadeInRight animated"
                data-wow-delay="0.25s"
              >
                <img
                  src={require("../../assets/images/img-quyenloi.png")}
                  alt=""
                />
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeInLeft animated"
              data-wow-delay="0.25s"
            >
              <div className="block-quyenloi">
                <div className="block-main">
                  <div className="block-col icon">
                    <img
                      src={require("../../assets/images/icon-star.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-col text">
                    Tham gia các buổi training độc quyền về kiến thức và kỹ
                    năng.
                  </div>
                </div>
                <div className="block-main">
                  <div className="block-col icon">
                    <img
                      src={require("../../assets/images/icon-star.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-col text">
                    Nhận được ưu đãi khi sử dụng những sản phẩm của{" "}
                    <b>Beekids</b>.
                  </div>
                </div>
                <div className="block-main">
                  <div className="block-col icon">
                    <img
                      src={require("../../assets/images/icon-star.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-col text">
                    Được cập nhật <b>Profile chuyên nghiệp</b> lên các Trang
                    website, truyền thông của <b>BEEKIDS</b> trên toàn quốc.
                  </div>
                </div>
                <div className="block-main">
                  <div className="block-col icon">
                    <img
                      src={require("../../assets/images/icon-star.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-col text">
                    Phát triển bản thân thông qua các chương trình đào tạo từ{" "}
                    <b>BEEKIDS</b>.
                  </div>
                </div>
                <div className="block-main">
                  <div className="block-col icon">
                    <img
                      src={require("../../assets/images/icon-star.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-col text">
                    Tham gia <b>LEAD</b> các dự án, sự kiện, chương trình quan
                    trọng nhằm <b>nâng cao kỹ năng mềm</b> cần thiết cho công
                    việc và cuộc sống.
                  </div>
                </div>
                <div className="block-main">
                  <div className="block-col icon">
                    <img
                      src={require("../../assets/images/icon-star.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-col text">
                    Nhận được <b>Giấy chứng nhận</b> từ <b>BEEKIDS</b> - Nền
                    tảng kết nối học tập và phát triển tư duy với 105.000 lượt
                    người sử dụng.
                  </div>
                </div>
                <div className="block-main">
                  <div className="block-col icon">
                    <img
                      src={require("../../assets/images/icon-star.png")}
                      alt=""
                    />
                  </div>
                  <div className="block-col text">
                    Trở thành <b>thành viên chính thức</b> của dự án nếu có tiềm
                    năng và sự nhiệt huyết.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-bottom">
            Một nền <span>GIÁO DỤC</span> hướng tới tương lai!
          </div>
        </div>
      </section>
      <section id="section-roles" className="">
        <div className="container -wide">
          <div className="block-title title-ambassador text-center wow fadeInDown">
            <div className="title-header text-uppercase">vai trò</div>
            <h4 className="title-title">
              Đại sứ của Beekids bao gồm những vai trò đặc biệt
            </h4>
          </div>
          <div
            className="row align-items-center justify-content-center wow fadeInDown"
            data-wow-delay="0.25s"
          >
            <div className="col-lg-4 order-lg-1 pl-lg-2 pr-lg-2">
              <div className="block-role">
                <div className="block-main">
                  <div className="block-col number">1</div>
                  <div className="block-col content">
                    Chia sẻ giá trị, kiến thức giảng dạy đến cộng đồng
                    <b>Giáo viên</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-4 pl-lg-2 pr-lg-2">
              <div className="block-role">
                <div className="block-main">
                  <div className="block-col number">2</div>
                  <div className="block-col content">
                    Chia sẻ kiến thức nuôi dạy Con,cùng Bố Mẹ giúp Trẻ phát
                    triển kỹ năng tư duy.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-7 pl-lg-2 pr-lg-2">
              <div className="block-role">
                <div className="block-main">
                  <div className="block-col number">3</div>
                  <div className="block-col content">
                    Hỗ trợ Beekids truyền thông trước, trong, sau các sự kiện
                    của thương hiệu.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 pl-lg-2 pr-lg-2">
              <div className="block-role">
                <div className="block-main">
                  <div className="block-col number">4</div>
                  <div className="block-col content">
                    Lan tỏa sự kiện tới cộng đồng.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-5 pl-lg-2 pr-lg-2">
              <div className="block-role">
                <div className="block-main">
                  <div className="block-col number">5</div>
                  <div className="block-col content">
                    Hỗ trợ, cùng nhau hợp tác với Beekids lên kế hoạch cho sự
                    kiện.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-8 pl-lg-2 pr-lg-2">
              <div className="block-role">
                <div className="block-main">
                  <div className="block-col number">6</div>
                  <div className="block-col content">
                    Quảng bá dự án thông qua hoạt động hỗ trợ truyền thông ở
                    trang, nhóm khác.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 order-lg-3 pl-lg-2 pr-lg-2">
              <div className="block-role">
                <div className="block-main">
                  <div className="block-col number">7</div>
                  <div className="block-col content">
                    Hỗ trợ cho dự án trong việc tiếp cận gần hơn với mọi người.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-6 pl-lg-2 pr-lg-2">
              <div className="block-role">
                <div className="block-main">
                  <div className="block-col number">8</div>
                  <div className="block-col content">
                    Tương tác, like, share, comment với các bài đăng của dự án
                    trên Facebook.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-9 pl-lg-2 pr-lg-2">
              <div className="block-role">
                <div className="block-main">
                  <div className="block-col number">9</div>
                  <div className="block-col content">
                    Mời bạn bè follow page và tham gia các hoạt động của dự án.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <img src={require("../../assets/images/images-vaitro.png")} alt="" />
        </div>
      </section>
      <section id="section-register" className="-bg-img-9">
        <div className="container -wide">
          <div className="block-title title-ambassador text-center wow fadeInDown">
            <div className="title-header text-uppercase">đăng kí</div>
            <h4 className="title-title">
              Đăng kí làm đại sứ của BEEKIDS ngay hôm nay
            </h4>
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
                  src={require("../../assets/images/img-register-2.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
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
                          id="txtfullname"
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

                    <div className="col-12">
                      <div className="mb-2">
                        <label>
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="txtemailNew"
                          placeholder="Nhập Email của bạn..."
                          onchange="checknullInput(this.id,'email')"
                        />
                        <div
                          id="alert-txtemailNew"
                          className="invalid-feedback"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-7">
                      <div className="mb-2">
                        <label>
                          Số điện thoại <span className="text-danger">*</span>
                        </label>
                        <input
                          id="txtphone"
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
                    <div className="col-md-6 col-xl-5">
                      <div className="mb-2">
                        <label>Bạn là ?</label>
                        <select
                          id="slType"
                          className="form-control form-control-lg"
                        >
                          <option value="Trung tâm">Trung tâm</option>
                          <option value="Trường Mầm non">Trường Mầm non</option>
                          <option value="Giáo viên">Giáo viên</option>
                          <option value="Khác">Khác</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="mb-2">
                        <label>Đơn vị </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="txtCompany"
                          placeholder="Nhập đơn vị hiện tại của bạn "
                        />
                      </div>
                      <div className="mb-2">
                        <label>
                          Nội dung <span className="text-danger">*</span>
                        </label>
                        <textarea
                          rows="3"
                          className="form-control form-control-lg"
                          id="txtNote"
                          placeholder="Nhập nội dung"
                        ></textarea>
                      </div>
                      <div id="" className="text-right mt-5">
                        <button
                          id="btnRegister"
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
      <section id="section-app" className="-bg-img-10">
        <div className="container -wide">
          <div className="row justify-content-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.25s">
              <div className="block-app">
                <div className="block-main">
                  <div className="block-row title">
                    HÃY TRẢI NGHIỆM APP ĐỂ BIẾT THÊM THÔNG TIN
                  </div>
                  <div className="block-row sumary">
                    Hãy cùng trải nghiệm ứng dụng <b>BKIDS</b> để hiểu rõ hơn
                    những thông tin và chương trình học mà bạn muốn lựa chọn để
                    phát triển nhé !
                  </div>
                </div>
                <div className="button mt-5 mb-5">
                  <button type="button" className="btn btn-bigsize btn-beekids">
                    Trải nghiệm ngay
                  </button>
                </div>
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
            <div className="col-lg-6">
              <div
                className="text-center mt-5 mt-lg-0 wow fadeInRight"
                data-wow-delay="0.25s"
              >
                <img
                  src={require("../../assets/images/right-content-3.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ambassadors;
