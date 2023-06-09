import { Link } from "react-router-dom";

function FAQs() {
  //   const activeFAQ = () => {
  //     let url = window.location.href;
  //     let idget = url.split("#")[1];
  //     //console.log('url =', url);
  //     if (idget != undefined) {
  //       // console.log('id =', idget);
  //       //jQuery('#btn-faq-' + idget).click();
  //       toogleFAQ("#btn-faq-" + idget);
  //     }
  //   };
  //   activeFAQ();
  //   const toogleFAQ = (id) => {
  //     let idtabs = jQuery("#" + id).data("target");
  //     jQuery(idtabs).toggleClass("show");
  //     jQuery("#" + id).toggleClass("collapsed");
  //   };
  return (
    <>
      <section id="section-faq-top" className="-bg-img-12">
        <div className="container -wide">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h3 className="title-section text-center">
                Các câu hỏi thường gặp
              </h3>
              <div className="block-search-faq">
                <div className="block-main">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm một câu hỏi"
                  />
                  <button type="button" className="btn btn-beekids">
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="block-cate-faq _color-1">
                <a href="https://bkids.edu.vn/" className="block-main">
                  <img
                    src={require("../../assets/images/icon-faq-1.png")}
                    alt=""
                  />
                  <div className="title">Ứng dụng Beekids</div>
                </a>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="block-cate-faq _color-2">
                <a href="/dai-su" className="block-main">
                  <img
                    src={require("../../assets/images/icon-faq-2.png")}
                    alt=""
                  />
                  <div className="title">Giáo viên</div>
                </a>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="block-cate-faq _color-3">
                <a href="/cuoc-thi" className="block-main">
                  <img
                    src={require("../../assets/images/icon-faq-4.png")}
                    alt=""
                  />
                  <div className="title">Cuộc thi</div>
                </a>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="block-cate-faq _color-4">
                <a href="/cua-hang" className="block-main">
                  <img
                    src={require("../../assets/images/icon-faq-3.png")}
                    alt=""
                  />
                  <div className="title">Khóa học</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-faq" className="-bg-img-13">
        <div className="container -wide">
          <div className="row ">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-7">
              <div className="block-title">
                <h4 className="title-title">Các câu hỏi thường gặp</h4>
              </div>
              <div id="faq-tabs" className="tabs-vertical">
                <div className="card-view">
                  <div className="card-header">
                    <div id="1" className="div-click"></div>
                    <a
                      href="#1"
                      className="tabs-click"
                      data-target="#tabsfaq-1"
                      id="btn-faq-1"
                      onclick="toogleFAQ(this.id)"
                    >
                      1. Làm sao để đăng nhập vào Ứng dụng Bkids?
                    </a>
                  </div>

                  <div id="tabsfaq-1" className="collapse">
                    <div className="card-body">
                      <p>Đối với HỆ ĐIỀU HÀNH IOS (IPHONE/IPAD)</p>
                      <p className="mb-3">
                        B1: Truy cập App Store
                        <img
                          src={require("../../assets/images/store-apple.png")}
                          alt=""
                          height="26"
                        />
                        và gõ “Bkids”
                        <br />
                        B2: Chọn Bkids có biểu tượng
                        <img
                          src={require("../../assets/images/logo-beekids.png")}
                          alt=""
                          height="26"
                        />
                        <br />
                        B3: Chọn “Cài đặt”
                        <br />
                        Hoặc truy cập đường
                        <Link
                          href="https://apps.apple.com/vn/app/bkids/id1534126323"
                          target="_blank"
                        >
                          link
                        </Link>
                        .
                      </p>
                      <p>Đối với HỆ ĐIỀU HÀNH ANDROID </p>
                      <p className="mb-3">
                        B1: Truy cập CH Play
                        <img
                          src={require("../../assets/images/store-android.png")}
                          alt=""
                          height="26"
                        />
                        và gõ “Bkids”
                        <br />
                        B2: Chọn Bkids có biểu tượng
                        <img
                          src={require("../../assets/images/logo-beekids.png")}
                          alt=""
                          height="26"
                        />
                        <br />
                        B3: Chọn “Cài đặt”
                        <br />
                        Hoặc truy cập đường
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.dragold.bkids"
                          target="_blank"
                        >
                          link
                        </Link>
                        .
                        <br />
                      </p>
                      <p>Đăng nhập theo các bước sau đây:</p>
                      <div className="text-center mt-2">
                        <a
                          className="image-popup-vertical-fit"
                          href="/images/FAQ/faq-img-1.jpg"
                          title="Flow Đăng nhập"
                        >
                          <img
                            src={require("../../assets/images/FAQ/faq-img-1.jpg")}
                            alt="Flow Đăng nhập"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="2" className="div-click"></div>
                    <a
                      href="#2"
                      className="tabs-click"
                      data-target="#tabsfaq-2"
                      id="btn-faq-2"
                      onclick="toogleFAQ(this.id)"
                    >
                      2. Vào đâu để con tôi rèn luyện các trò chơi có trong cuộc
                      thi?
                    </a>
                  </div>
                  <div id="tabsfaq-2" className="collapse">
                    <div className="card-body">
                      <p>
                        Tại màn hình chính, bạn sẽ thấy Đảo Trò chơi tư duy. Bên
                        trong đó có hơn 10+ trò chơi rèn luyện dành cho bé.
                        <br />
                        Bước 1: Mở ứng dụng Bkids.
                        <br />
                        Bước 2: Chọn Trò chơi tư duy.
                        <br />
                        Bước 3: Chọn trò chơi để bé rèn luyện.
                      </p>
                      <div className="text-center mt-2">
                        <a
                          className="image-popup-vertical-fit"
                          href="/images/FAQ/faq-img-2.jpg"
                          title="Flow Rèn luyện"
                        >
                          <img
                            src={require("../../assets/images/FAQ/faq-img-2.jpg")}
                            alt="Flow Rèn luyện"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="3" className="div-click"></div>
                    <a
                      href="#3"
                      className="tabs-click"
                      data-target="#tabsfaq-3"
                      id="btn-faq-3"
                      onclick="toogleFAQ(this.id)"
                    >
                      3. Góc dành cho Phụ huynh là gì? Làm sao để vào Góc Phụ
                      huynh?
                    </a>
                  </div>
                  <div id="tabsfaq-3" className="collapse">
                    <div className="card-body">
                      <p>
                        Đây là góc quản lý các thông tin tài khoản, thông tin
                        của bé.
                        <br />
                        Vào góc Phụ huynh theo các bước dưới đây:
                        <br />
                        Bước 1: Chọn vào phía góc trái trên cùng có tên của bé
                        <br />
                        Bước 2: Nhập số để xác nhận
                        <br />
                        Bước 3: Chọn vào thông tin của bé một bé (nếu phụ huynh
                        có 2 bé)
                        <br />
                        Bước 4: Điền và bổ sung đầy đủ thông tin của bé
                        <br />
                        Bước 5: Phụ huynh cài đặt thời gian sử dụng app của bé.
                      </p>
                      <div className="text-center mt-2">
                        <a
                          className="image-popup-vertical-fit"
                          href="/images/FAQ/faq-img-3.jpg"
                          title="Flow Vào Góc Phụ Huynh"
                        >
                          <img
                            src={require("../../assets/images/FAQ/faq-img-3.jpg")}
                            alt="Flow Vào Góc Phụ Huynh"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="4" className="div-click"></div>
                    <a
                      href="#4"
                      className="tabs-click"
                      data-target="#tabsfaq-4"
                      id="btn-faq-4"
                      onclick="toogleFAQ(this.id)"
                    >
                      4. Tại sao tôi không thấy được cuộc thi đã đăng ký trên
                      ứng dụng?
                    </a>
                  </div>
                  <div id="tabsfaq-4" className="collapse">
                    <div className="card-body">
                      <p>
                        Bạn cần cập nhập thông tin của bé trong ứng dụng đúng
                        với thông tin đã đăng ký. Cập nhập thông tin của bé theo
                        các bước dưới đây.
                        <br />
                        Bước 1: Vào góc phụ huynh
                        <br />
                        Bước 2: Nhập số để xác nhận
                        <br />
                        Bước 3: Chọn thông tin bé cần cập nhật thông tin
                        <br />
                        Bước 4: Thay đổi thông tin tài khoản.
                        <br />
                        Bước 5: Thay đổi và cập nhật thông tin của bé
                      </p>
                      <div className="text-center mt-2">
                        <a
                          className="image-popup-vertical-fit"
                          href="/images/FAQ/faq-img-7.jpg"
                          title="Flow Đổi thông tin bé"
                        >
                          <img
                            src={require("../../assets/images/FAQ/faq-img-7.jpg")}
                            alt="Flow Đổi thông tin bé"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="5" className="div-click"></div>
                    <a
                      href="#5"
                      className="tabs-click"
                      data-target="#tabsfaq-5"
                      id="btn-faq-5"
                      onclick="toogleFAQ(this.id)"
                    >
                      5. Mã định danh của bé là gì? Làm sao để kiểm tra Mã định
                      danh của bé?
                    </a>
                  </div>

                  <div id="tabsfaq-5" className="collapse">
                    <div className="card-body">
                      <p>
                        Mỗi bé sẽ có 1 mã định danh khi sử dụng ứng dụng. Mã
                        định danh được dùng để tham gia vào các cuộc thi.
                        <br />
                        Kiểm tra mã định danh của bé theo các bước dưới đây
                        <br />
                        Bước 1: Vào góc phụ huynh
                        <br />
                        Bước 2: Nhập số để xác nhận
                        <br />
                        Bước 3: Chọn thông tin bé cần cập nhật thông tin
                        <br />
                        Bước 4: Thay đổi thông tin tài khoản.
                        <br />
                        Bước 5: Sẽ thấy được mã định danh tại phần thông tin trẻ
                      </p>
                      <div className="text-center mt-2">
                        <a
                          className="image-popup-vertical-fit"
                          href="/images/FAQ/faq-img-4.jpg"
                          title="Flow Đổi thông tin bé"
                        >
                          <img
                            src={require("../../assets/images/FAQ/faq-img-4.jpg")}
                            alt="Flow Đổi thông tin bé"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="6" className="div-click"></div>
                    <a
                      href="#6"
                      className="tabs-click"
                      data-target="#tabsfaq-6"
                      id="btn-faq-6"
                      onclick="toogleFAQ(this.id)"
                    >
                      6. Cuộc thi nằm ở đâu trong ứng dụng? Bảng xếp hạng của
                      cuộc thi nằm ở đâu?
                    </a>
                  </div>
                  <div id="tabsfaq-6" className="collapse">
                    <div className="card-body">
                      <p>
                        Cuộc thi nằm ngay màn hình chính của ứng dụng. Đảm bảo
                        bạn đã đăng nhập và thông tin bé đã được điền đúng để
                        thấy được các cuộc thi đã đăng ký. Bạn sẽ thấy ngay Bảng
                        xếp hạng khi vào Cuộc thi.
                        <br />
                        Bước 1: Vào ứng dụng
                        <br />
                        Bước 2: Nhấn vào đảo “Cuộc thi cho bé”
                        <br />
                        Bước 3: Chọn vào cuộc thi sẽ được tổ chức sắp tới
                        <br />
                        Bước 4: Đăng kí tham gia cuộc thi
                      </p>
                      <div className="text-center mt-2">
                        <a
                          className="image-popup-vertical-fit"
                          href="/images/FAQ/faq-img-5.jpg"
                          title="Flow Cuộc thi"
                        >
                          <img
                            src={require("../../assets/images/FAQ/faq-img-5.jpg")}
                            alt="Hình Flow Cuộc thi"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="7" className="div-click"></div>
                    <a
                      href="#7"
                      className="tabs-click"
                      data-target="#tabsfaq-7"
                      id="btn-faq-7"
                      onclick="toogleFAQ(this.id)"
                    >
                      7. Tôi có cần phải đăng nhập để sử dụng Beekids hay không?
                    </a>
                  </div>
                  <div id="tabsfaq-7" className="collapse">
                    <div className="card-body">
                      <p>
                        Không, bạn không cần đăng nhập để sử dụng Beekids. Trong
                        trường hợp này, các dữ liệu của bạn sẽ không được lưu
                        trữ trực tuyến. Bên cạnh đó, nhiều nội dung trong ứng
                        dụng chỉ dành cho các tài khoản đã đăng nhập, xác thực.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="8" className="div-click"></div>
                    <a
                      href="#8"
                      className="tabs-click"
                      data-target="#tabsfaq-8"
                      id="btn-faq-8"
                      onclick="toogleFAQ(this.id)"
                    >
                      8. Làm thế nào để đổi mật khẩu?
                    </a>
                  </div>
                  <div id="tabsfaq-8" className="collapse">
                    <div className="card-body">
                      <p>
                        Để đổi mật khẩu:
                        <br />
                        Bước 1: Vào Góc phụ huynh
                        <br />
                        Bước 2: Nhập số xác nhận
                        <br />
                        Bước 3: Bấm chọn nút Đổi mật khẩu
                        <br />
                        Bước 4: Nhập mật khẩu cũ và mật khẩu mới trong ô tương
                        ứng
                      </p>
                      <div className="text-center mt-2">
                        <a
                          className="image-popup-vertical-fit"
                          href="/images/FAQ/faq-img-8.jpg"
                          title="Đổi mật khẩu"
                        >
                          <img
                            src={require("../../assets/images/FAQ/faq-img-8.jpg")}
                            alt="Đổi mật khẩu"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="9" className="div-click"></div>
                    <a
                      href="#9"
                      className="tabs-click"
                      data-target="#tabsfaq-9"
                      id="btn-faq-9"
                      onclick="toogleFAQ(this.id)"
                    >
                      9. Làm thế nào nếu nếu tôi quên mật khẩu?
                    </a>
                  </div>
                  <div id="tabsfaq-9" className="collapse">
                    <div className="card-body">
                      <p>
                        Chọn Quên mật khẩu/Đổi mật khẩu theo hướng dẫn dưới đây.
                        Beekids sẽ gửi email kèm mã khôi phục để hỗ trợ bạn đổi
                        mật khẩu mới. Hãy lưu ý rằng mã khôi phục sẽ hết hạn sau
                        5 phút.
                        <br />
                        Bước 1: Vào góc phụ huynh
                        <br />
                        Bước 2: Điền email đã đăng nhập
                        <br />
                        Bước 3: Nhấn vào quên mật khẩu
                        <br />
                        Bước 4: Mã khôi phục mật khẩu sẽ gửi về trong email tài
                        khoản của bạn
                        <br />
                        Bước 5: Nhập mã khôi phục và đặt mật khẩu mới để đăng
                        nhập
                      </p>
                      <div className="text-center mt-2">
                        <a
                          className="image-popup-vertical-fit"
                          href="/images/FAQ/faq-img-9.jpg"
                          title="Đổi mật khẩu"
                        >
                          <img
                            src={require("../../assets/images/FAQ/faq-img-9.jpg")}
                            alt="Đổi mật khẩu"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="10" className="div-click"></div>
                    <a
                      href="#10"
                      className="tabs-click"
                      data-target="#tabsfaq-10"
                      id="btn-faq-10"
                      onclick="toogleFAQ(this.id)"
                    >
                      10. Tại sao tôi nên xác thực tài khoản?
                    </a>
                  </div>
                  <div id="tabsfaq-10" className="collapse">
                    <div className="card-body">
                      <p>
                        Việc xác thực tài khoản nhằm đảm bảo bạn được hưởng đầy
                        đủ các quyền lợi từ Beekids khi có sự cố xảy ra như quên
                        mật khẩu, có vấn đề tranh cãi khi tham gia cuộc thi, các
                        vấn đề bồi hoàn.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-view">
                  <div className="card-header">
                    <div id="11" className="div-click"></div>
                    <a
                      href="#11"
                      className="tabs-click"
                      data-target="#tabsfaq-11"
                      id="btn-faq-11"
                      onclick="toogleFAQ(this.id)"
                    >
                      11. Tôi có thể đăng nhập 1 tài khoản tối đa trên bao nhiêu
                      thiết bị?
                    </a>
                  </div>
                  <div id="tabsfaq-11" className="collapse">
                    <div className="card-body">
                      <p>
                        1 tài khoản có thể đăng nhập tối đa trên 3 thiết bị.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="12" className="div-click"></div>
                    <a
                      href="#12"
                      className="tabs-click"
                      data-target="#tabsfaq-12"
                      id="btn-faq-12"
                      onclick="toogleFAQ(this.id)"
                    >
                      12. Tôi có thể chia sẻ tài khoản của mình với người khác
                      được không?
                    </a>
                  </div>
                  <div id="tabsfaq-12" className="collapse">
                    <div className="card-body">
                      <p>
                        Việc này không được ủng hộ do một số vấn đề sau đây:
                        <br />
                        - Tiến trình học của con bạn có thể xáo trộn bởi bé
                        khác, ảnh hưởng độ chính xác của kết quả đánh giá.
                        <br />- Đồng thời, bạn có thể mất Beexu (có giá trị sử
                        dụng và quy đổi quà) khi chia sẻ tài khoản với người
                        khác.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="13" className="div-click"></div>
                    <a
                      href="#13"
                      className="tabs-click"
                      data-target="#tabsfaq-13"
                      id="btn-faq-13"
                      onclick="toogleFAQ(this.id)"
                    >
                      13. Tôi có bắt buộc phải trả tiền để sử dụng Beekids?
                    </a>
                  </div>
                  <div id="tabsfaq-13" className="collapse">
                    <div className="card-body">
                      <p>
                        Không, ứng dụng Beekids vẫn hỗ trợ các nội dung cho
                        người dùng sử dụng không cần trả phí. Tuy nhiên, nhiều
                        nội dung hoặc các cuộc thi có thể cần phí tham gia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="14" className="div-click"></div>
                    <a
                      href="#14"
                      className="tabs-click"
                      data-target="#tabsfaq-14"
                      id="btn-faq-14"
                      onclick="toogleFAQ(this.id)"
                    >
                      14. Beekids có phải là ứng dụng có quảng cáo?
                    </a>
                  </div>
                  <div id="tabsfaq-14" className="collapse">
                    <div className="card-body">
                      <p>
                        Không, đây là ứng dụng hoàn toàn không có quảng cáo. Bố
                        mẹ hoàn toàn có thể yên tâm khi cho con sử dụng.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-view">
                  <div className="card-header">
                    <div id="15" className="div-click"></div>
                    <a
                      href="#15"
                      className="tabs-click"
                      data-target="#tabsfaq-15"
                      id="btn-faq-15"
                      onclick="toogleFAQ(this.id)"
                    >
                      15. Ứng dụng Beekids là ứng dụng online hay offline?
                    </a>
                  </div>
                  <div id="tabsfaq-15" className="collapse">
                    <div className="card-body">
                      <p>
                        Bạn cần online để có thể sử dụng toàn bộ chức năng của
                        ứng dụng. Tuy nhiên, nhiều trò chơi nhỏ trong Đảo Trò
                        chơi tư duy vẫn hỗ trợ chơi offline.
                      </p>
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

export default FAQs;
