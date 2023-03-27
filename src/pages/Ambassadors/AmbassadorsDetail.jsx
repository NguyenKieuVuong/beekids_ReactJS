import DownloadApp from "../../components/DownloadApp";
function AmbassadorsDetail() {
  return (
    <>
      <section
        id="section-ambassador-detail_info"
        className="pd-tb-4r -bg-img-1"
      >
        <div className="container -wide">
          <div className="form-row align-items-center justify-content-center">
            <div className="col-12">
              <h2
                className="text-header wow fadeInDown animated"
                data-wow-delay="0.25s"
              >
                THÔNG TIN CHI TIẾT VỀ ĐẠI SỨ BEEKIDS
              </h2>
            </div>
            <div className="col-lg-7">
              <div className="wow fadeInRight animated" data-wow-delay="0.25s">
                <div className="block-text">
                  <div className="row-text text-1">
                    Cô giáo: Nguyễn Ngọc Lan
                  </div>
                  <div className="row-text">Ngày sinh: 09/12/1971</div>
                  <div className="row-text">Học vị: Giáo viên Tiểu học</div>
                  <div className="row-text">
                    Nơi Công Tác: Trường Tiểu học Kim Liên
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="block-avatar wow fadeInLeft animated"
                data-wow-delay="0.25s"
              >
                <img
                  src={require("../../assets/images/avatar_Nguyen_Ngoc_Lan.jpg")}
                  alt=""
                  className="mt-4 mt-lg-0 mb-4 mb-lg-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-ambassador-detail_sumary" className="pd-tb-4r">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="block-title title-ambassador text-center wow fadeInDown animated">
                <div className="title-header">THÔNG TIN</div>
                <h4 className="title-title">Đôi nét về giáo viên</h4>
              </div>
            </div>
          </div>
          <div className="content-editor">
            <div className="row">
              <div className="col-md-6">
                <div className=" mb-4">
                  <img
                    src={require("../../assets/images/about_Nguyen_Ngoc_Lan.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-none d-md-block">
                  <img
                    src={require("../../assets/images/icon-teacher.png")}
                    alt=""
                    className="mb-4"
                  />
                </div>
                <div className="about-sumary">
                  <p>
                    - Cô <b>Nguyễn Ngọc Lan</b> hiện nay đang công tác tại
                    Trường Tiểu học Kim Liên - Thành phố Hà Nội.{" "}
                  </p>
                  <p>
                    - Trong suốt <b>32 năm</b> theo đuổi nghề giáo của mình, cô
                    đã xuất sắc giành được nhiều danh hiệu như{" "}
                    <b>Giáo viên dạy Giỏi</b> và <b>Chủ nhiệm Giỏi cấp Quận</b>{" "}
                    và <b>cấp Thành phố</b>.
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="block-quyenloi">
                  <div className="block-main">
                    <div className="block-col icon">
                      <img
                        src={require("../../assets/images/icon-star.png")}
                        alt=""
                      />
                    </div>
                    <div className="block-col text">
                      Với trình độ học vấn và kiến thức sâu rộng, cô luôn cố
                      gắng cập nhật kiến thức mới và luôn sẵn sàng chia sẻ lại
                      cho học sinh của mình. Khi nói về mong muốn của bản thân,
                      cô Ngọc Lan chia sẻ:
                      <i>
                        “Tôi cảm thấy rất hạnh phúc khi các con tiến bộ từng
                        ngày. Chính vì vậy, tôi luôn không ngừng học hỏi và tiếp
                        cận công nghệ thông tin để không bị thụt lùi, đồng thời
                        đáp ứng được nhu cầu của học trò. Khi biết đến Beekids,
                        tôi cảm thấy đây chính là một giải pháp giúp cho những
                        bài học trên lớp trở nên sinh động hơn. Các em được tiếp
                        cận với công nghệ thông tin, biết thêm về toán tư duy và
                        còn tương tác với các bạn khác nữa."
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-ambassador-detail_skill" className="-bg-img-10">
        <div className="container -wide">
          <div className="block-title text-center wow fadeInDown animated">
            <h4 className="title-title">CÁC KỸ NĂNG</h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.25s">
              <div className="block-skill">
                <div className="block-main">
                  <div className="block-row">Tiếng anh B2</div>
                </div>
                <div className="block-main">
                  <div className="block-row">Huấn luyện, đào tạo</div>
                </div>
                <div className="block-main">
                  <div className="block-row">
                    Xử lý tình huống trong lớp học
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-center mt-5 mt-lg-0 wow fadeInRight"
                data-wow-delay="0.25s"
              >
                <img
                  src={require("../../assets/images/image-skill.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-achievements" className="pd-tb-4r">
        <div className="container -wide">
          <div className="block-title title-ambassador text-center wow fadeInDown animated">
            <div className="title-header text-uppercase">THÀNH TÍCH</div>
            <h4 className="title-title">
              Thành tích của Đại sứ đạt được trong những năm giảng dạy
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
                  src={require("../../assets/images/image-thanhtich.png")}
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
                    Giáo viên dạy giỏi cấp thành phố
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
                    Chủ nhiệm giỏi cấp Quận và cấp thành phố
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
                    Giáo viên tích cực trong việc giảng dạy và hỗ trợ học sinh
                    tận tình
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.25s">
              <div className="text-register">
                <div className="title">BEEKIDS</div>
                <div className="summary">
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
                          <option value="1">Trung tâm</option>
                          <option value="2">Trường Mầm non</option>
                          <option value="3">Giáo viên</option>
                          <option value="4">Khác</option>
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
                          onclick="sendEmail()"
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
      <section id="section-comments-ambassador" className="">
        <div className="container -wide">
          <div className="block-title text-center wow fadeInDown">
            <div className="title-header text-uppercase">Cảm nhận</div>
            <h4 className="title-title">
              Học sinh nói gì về Đại sứ của chúng tôi
            </h4>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div
                className="block-images wow fadeInLeft animated"
                data-wow-delay="0.25s"
              >
                <img
                  src={require("../../assets/images/Review-Ambassador.png")}
                  alt=""
                  className="mt-4 mt-lg-0 mb-4 mb-lg-0"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-7 wow fadeInRight"
              data-wow-delay="0.25s"
            >
              <div
                id="slide-comments_ambassador"
                className="owl-carousel owl-theme"
              >
                <div className="item">
                  <div className="block-comment">
                    <div className="block-main">
                      <div className="block-row header">
                        <div className="title">
                          Beekids là một ứng dụng thú vị.
                        </div>
                        <div className="star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="summary">
                          Con rất mong tới giờ học của cô. Ngoài bài học và làm
                          các bài tập trên lớp, cô còn cho chúng con chơi các
                          trò chơi rất thú vị. Con thường xuyên đạt điểm cao và
                          được cô khen ngợi.
                        </div>
                      </div>
                      <div className="block-row customer">
                        <div className="image">
                          <img
                            src={require("../../assets/images/avatar-review-ambassador-1.png")}
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <div className="name">Hồ Thị Trúc Linh</div>
                          <div className="job">
                            Học sinh lớp 4, trường Tiểu học Gia Quất
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-comment">
                    <div className="block-main">
                      <div className="block-row header">
                        <div className="title">
                          Beekids là một ứng dụng vừa học vừa chơi hiệu quả.
                        </div>
                        <div className="star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="summary">
                          Con đã được tham gia buổi huấn luyện kỹ năng thoát
                          hiểm của Thầy vào buổi chào cờ. Cả con và các bạn đều
                          rất hào hứng khi nghe về những bài học thoát hiểm vô
                          cùng thú vị trong ngày hôm đó.
                        </div>
                      </div>
                      <div className="block-row customer">
                        <div className="image">
                          <img
                            src={require("../../assets/images/avatar-review-ambassador-2.png")}
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <div className="name">Phan Gia Bảo</div>
                          <div className="job">
                            Học sinh lớp 3, trường Tiểu học Lê Hồng Phong
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-comment">
                    <div className="block-main">
                      <div className="block-row header">
                        <div className="title">
                          Beekids là một ứng dụng đa chức năng.
                        </div>
                        <div className="star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="summary">
                          Con cảm thấy chương trình học lớp 5 khá khó so với bản
                          thân. Nhưng nhờ sự giúp đỡ của cô thì con đã cố gắng
                          và đạt điểm khá. Gần đây, con còn nhận được giải
                          thưởng một cuộc thi Toán tư duy trên Bkids do cô giới
                          thiệu nữa. Bố mẹ và con đều cảm thấy rất vui.
                        </div>
                      </div>
                      <div className="block-row customer">
                        <div className="image">
                          <img
                            src={require("../../assets/images/avatar-review-ambassador-3.png")}
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <div className="name">Nguyễn Minh Khôi</div>
                          <div className="job">
                            Học sinh lớp 5, trường Tiểu học Kim Liên
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="block-comment">
                    <div className="block-main">
                      <div className="block-row header">
                        <div className="title">
                          Beekids là một ứng dụng hấp dẫn.
                        </div>
                        <div className="star">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="summary">
                          Mỗi khi con gặp bài tập khó thì cô giáo hướng dẫn con
                          rất tận tình. Con cảm thấy vui khi mình có thể làm tốt
                          bài tập về nhà và còn có thời gian để tham gia các
                          cuộc thi tương tác với bạn bè trên lớp.
                        </div>
                      </div>
                      <div className="block-row customer">
                        <div className="image">
                          <img
                            src={require("../../assets/images/avatar-review-ambassador-4.png")}
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <div className="name">Đào Nguyễn Lan Anh</div>
                          <div className="job">
                            Học sinh lớp 3, trường Tiểu học Trưng Vương
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DownloadApp />
    </>
  );
}

export default AmbassadorsDetail;
