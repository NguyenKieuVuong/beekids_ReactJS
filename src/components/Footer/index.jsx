import LogoFooter from "../../assets/images/Logo-Bkids-full.png";
function Footer() {
  return (
    <footer id="section-footer" className="">
      <div className="footer-top">
        <div className="container -wide">
          <div className="row">
            <div className="col-lg-8">
              <div className="footer-about">
                <img src={LogoFooter} />
                <div className="">
                  Nền tảng kết nối học tập và phát triển tư duy cho trẻ trong độ
                  tuổi vàng 4 - 10
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md">
                  <div className="footer-block contact">
                    <div className="title">Liên hệ</div>
                    <ul className="ul-menu">
                      <li className="contact-info">
                        <i className="fa fa-phone"></i>08 567 444 38
                      </li>
                      <li className="contact-info">
                        <i className="fa fa-envelope"></i>beekids@dragold.net
                      </li>
                      <li className="contact-info">
                        <i className="fa fa-map-marker"></i>03 Hồ Quý Ly, Thanh
                        Khê Tây, Thanh Khê, Đà Nẵng
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block social">
                    <a
                      href="https://www.facebook.com/beekids.edu.vn"
                      className="css-0"
                      target="_blank "
                      rel="noopener noreferrer "
                    >
                      <img
                        src={require("../../assets/images/icon-social-facebook.png")}
                        alt=""
                        height="32"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/beekids-learning-gamification-platform/"
                      className="css-0"
                      target="_blank "
                      rel="noopener noreferrer "
                    >
                      <img
                        src={require("../../assets/images/icon-social-linkedin.png")}
                        alt=""
                        height="32"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC4P8FkBzpZGEbABKweYWZ6g"
                      className="css-0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("../../assets/images/icon-social-youtube.png")}
                        alt=""
                        height="32"
                      />
                    </a>
                    <a
                      href="https://www.tiktok.com/@beekids_education"
                      className="css-0"
                      target="_blank "
                      rel="noopener noreferrer "
                    >
                      <img
                        src={require("../../assets/images/icon-social-tiktok.png")}
                        alt=""
                        height="32"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-6 col-md">
                  <div className="footer-block">
                    <div className="title">Giải pháp</div>
                    <ul className="ul-menu">
                      <li>
                        <a
                          href="https://beekids.edu.vn/hinh-thuc-thanh-toan"
                          target="_blank"
                        >
                          Phương pháp thanh toán
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://beekids.edu.vn/cau-hoi-thuong-gap"
                          target="_blank"
                        >
                          Câu hỏi thường gặp
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://beekids.edu.vn/chinh-sach-bao-mat"
                          target="_blank"
                        >
                          Chính sách bảo mật
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://beekids.edu.vn/dieu-khoan-su-dung"
                          target="_blank"
                        >
                          Điều khoản sử dụng
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md">
                  <div className="footer-block social mt-4 mt-md-0">
                    <div className="title">Tham gia ngay với chúng tôi</div>
                    <div>
                      <a href="#" target="_blank">
                        <img
                          src={require("../../assets/images/zalo-logo-2.png")}
                          alt=""
                          height="50"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/beekids.edu.vn"
                        target="_blank"
                      >
                        <img
                          src={require("../../assets/images/facebook-logo.png")}
                          alt=""
                          height="50"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-download">
                <div className="form-row text-center">
                  <div className="col-6 col-sm-4 col-md-4 col-lg-4">
                    <a
                      href="https://apps.apple.com/vn/app/bkids/id1534126323"
                      target="_blank "
                      data-ois-button="true "
                      className="siteFooter-btn-store"
                    >
                      <img
                        className=""
                        alt="Download App Button "
                        src="/images/app-store-badge.png "
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.dragold.bkids"
                      target="_blank "
                      data-android-button="true "
                      className="siteFooter-btn-store"
                    >
                      <img
                        className=""
                        src={require("../../assets/images/google-play-badge.png")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-md-4 col-lg-4">
                    <a
                      href="https://bkids.edu.vn/"
                      target="_blank"
                      className="siteFooter-btn-website"
                    >
                      <img
                        src={require("../../assets/images/web-badge.png")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-6 col-sm-12">
                    <a href="#" className="siteFooter-btn">
                      <img
                        className=""
                        alt="Bộ Công Thương"
                        src={require("../../assets/images/bocongthuong.png")}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container -wide">
          <div className="text-center text-white p-2">
            Bản quyền © 2019 thuộc về Công Ty Cổ Phần Giải Pháp Giáo Dục DRAGOLD
            <br />
            Giấy phép DKKD: <b>0401993771</b>. Ngày cấp: 02/08/2019
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
