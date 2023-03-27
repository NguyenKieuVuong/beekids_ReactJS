import ReviewCourse from "../../components/Reviews/ReviewsCourse";
function Courses() {
  return (
    <>
      <section id="section-slide-shop" className="-bg-img-11">
        <div className="txt-header">
          <h3 className="text-center">
            Các KHÓA HỌC giúp bé phát triển tư duy
          </h3>
          <p className="text-center">
            Hãy lựa chọn Khoá học, Khoá ôn & các Gói combo để giúp các bé phát
            triển tư duy cách tốt nhất nhé!
          </p>
        </div>

        <div className="block_slide-shop">
          <div className="container -wide">
            <div id="slide-shop" className="owl-carousel owl-theme">
              <div className="item">
                <div className="row align-items-center ">
                  <div className="col-lg-7">
                    <img
                      src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png"
                      className="img-course"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-5">
                    <div className="block-info-course">
                      <div className="block-main">
                        <div className="block-row info">
                          <div className="sub-title">
                            Khóa học được mua nhiều nhất
                          </div>
                          <h3 className="title-name">
                            Toán tư duy tiền tiểu học
                          </h3>
                          <p className="sumary">
                            Chương trình 36 Tuần phát triển tư duy Toán cho bé
                            hoàn chỉnh được các kỹ năng quan sát, ghi nhớ, suy
                            luận, tư duy logic và số học. Bên cạnh đó, khóa học
                            còn giúp bé đến với Toán một cách tự nhiên và vui
                            thích để ham học hỏi, tìm tòi hơn.
                          </p>
                        </div>
                        <div className="block-row price-detail">
                          <div className="col-price-left">Giá chỉ:</div>
                          <div className="col-price-right">
                            <div className="price-child">549.000đ/1 bé</div>
                            <div className="price-child">
                              769.000đ/2 bé cùng TK
                            </div>
                          </div>
                        </div>
                        <div className="button">
                          <button
                            type="button"
                            className="btn btn-beekids btn-lg pl-xl-5 pr-xl-5"
                          >
                            <i className="fa fa-shopping-cart"></i>&nbsp;Mua
                            ngay
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row align-items-center ">
                  <div className="col-lg-7">
                    <img
                      src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png"
                      className="img-course"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-5">
                    <div className="block-info-course">
                      <div className="block-main">
                        <div className="block-row info">
                          <div className="sub-title">
                            Khóa học được mua nhiều nhất
                          </div>
                          <h3 className="title-name">
                            Toán tư duy tiền tiểu học
                          </h3>
                          <p className="sumary">
                            Chương trình 36 Tuần phát triển tư duy Toán cho bé
                            hoàn chỉnh được các kỹ năng quan sát, ghi nhớ, suy
                            luận, tư duy logic và số học. Bên cạnh đó, khóa học
                            còn giúp bé đến với Toán một cách tự nhiên và vui
                            thích để ham học hỏi, tìm tòi hơn.
                          </p>
                        </div>
                        <div className="block-row price-slide">
                          <div className="col-price-left">Giá chỉ:</div>
                          <div className="col-price-right">
                            <div className="price-child">549.000đ/1 bé</div>
                            <div className="price-child">
                              769.000đ/2 bé cùng TK
                            </div>
                          </div>
                        </div>
                        <div className="button">
                          <button
                            type="button"
                            className="btn btn-beekids btn-lg pl-xl-5 pr-xl-5"
                          >
                            <i className="fa fa-shopping-cart"></i>&nbsp;Mua
                            ngay
                          </button>
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

      <section id="section-contest">
        <div className="container -wide">
          <h3 className="title-section">
            Các Khóa học và Combo khóa học cho bé
          </h3>
          <div className="block-filter">
            <div className="form-row">
              <div className="col-md-6 col-lg-4 col-xl-4 offset-xl-4">
                <div className="input-group input-group-beekids">
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
                  id="_listClassAge"
                  className="form-control form-control-beekids"
                ></select>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-2">
                <select className="form-control form-control-beekids">
                  <option value="0">Tất cả</option>
                  <option value="course">Khóa học</option>
                  <option value="combo">Gói khóa học</option>
                </select>
              </div>
            </div>
          </div>

          <div id="_listShopItemNew" className="row"></div>
        </div>
      </section>
      <ReviewCourse />
      <section id="guide-buy">
        <div className="container -wide">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="block-title">
                <h4 className="title-title">
                  Hướng dẫn cách mua khoá học và đăng nhập app Bkids một cách
                  đầy đủ chi tiết nhất ở dưới đây nhé!
                </h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-4">
              <div className="guide-buy-item">
                <div className="guide-buy-item__image">
                  <img src="/images/img-guide-buy-1.png" alt="Alternate Text" />
                </div>
                <div className="guide-buy-item__title">
                  Hướng dẫn tải và Đăng nhập App Bkids
                </div>
                <div className="guide-buy-item__button">
                  <button type="button" className="btn btn-beekids">
                    Xem chi tiết <i className="ti-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="guide-buy-item">
                <div className="guide-buy-item__image">
                  <img src="/images/img-guide-buy-2.png" alt="Alternate Text" />
                </div>
                <div className="guide-buy-item__title">
                  Hướng dẫn thanh toán khi mua Khoá học
                </div>
                <div className="guide-buy-item__button">
                  <button type="button" className="btn btn-beekids">
                    Xem chi tiết <i className="ti-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="guide-buy-item">
                <div className="guide-buy-item__image">
                  <img src="/images/img-guide-buy-3.png" alt="Alternate Text" />
                </div>
                <div className="guide-buy-item__title">
                  Hướng dẫn lộ trình học và chơi game
                </div>
                <div className="guide-buy-item__button">
                  <button type="button" className="btn btn-beekids">
                    Xem chi tiết <i className="ti-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
