import ReviewCourse from "../../components/Reviews/ReviewsCourse";
function CourseList() {
  return (
    <>
      <section id="section-slide-shop" class="-bg-img-11">
        <div class="txt-header">
          <h3 class="text-center">Các KHÓA HỌC giúp bé phát triển tư duy</h3>
          <p class="text-center">
            Hãy lựa chọn Khoá học, Khoá ôn & các Gói combo để giúp các bé phát
            triển tư duy cách tốt nhất nhé!
          </p>
        </div>

        <div class="block_slide-shop">
          <div class="container -wide">
            <div id="slide-shop" class="owl-carousel owl-theme">
              <div class="item">
                <div class="row align-items-center ">
                  <div class="col-lg-7">
                    <img
                      src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png"
                      class="img-course"
                    />
                  </div>
                  <div class="col-lg-5">
                    <div class="block-info-course">
                      <div class="block-main">
                        <div class="block-row info">
                          <div class="sub-title">
                            Khóa học được mua nhiều nhất
                          </div>
                          <h3 class="title-name">Toán tư duy tiền tiểu học</h3>
                          <p class="sumary">
                            Chương trình 36 Tuần phát triển tư duy Toán cho bé
                            hoàn chỉnh được các kỹ năng quan sát, ghi nhớ, suy
                            luận, tư duy logic và số học. Bên cạnh đó, khóa học
                            còn giúp bé đến với Toán một cách tự nhiên và vui
                            thích để ham học hỏi, tìm tòi hơn.
                          </p>
                        </div>
                        <div class="block-row price-detail">
                          <div class="col-price-left">Giá chỉ:</div>
                          <div class="col-price-right">
                            <div class="price-child">549.000đ/1 bé</div>
                            <div class="price-child">769.000đ/2 bé cùng TK</div>
                          </div>
                        </div>
                        <div class="button">
                          <button
                            type="button"
                            class="btn btn-beekids btn-lg pl-xl-5 pr-xl-5"
                          >
                            <i class="fa fa-shopping-cart"></i>&nbsp;Mua ngay
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row align-items-center ">
                  <div class="col-lg-7">
                    <img
                      src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png"
                      class="img-course"
                    />
                  </div>
                  <div class="col-lg-5">
                    <div class="block-info-course">
                      <div class="block-main">
                        <div class="block-row info">
                          <div class="sub-title">
                            Khóa học được mua nhiều nhất
                          </div>
                          <h3 class="title-name">Toán tư duy tiền tiểu học</h3>
                          <p class="sumary">
                            Chương trình 36 Tuần phát triển tư duy Toán cho bé
                            hoàn chỉnh được các kỹ năng quan sát, ghi nhớ, suy
                            luận, tư duy logic và số học. Bên cạnh đó, khóa học
                            còn giúp bé đến với Toán một cách tự nhiên và vui
                            thích để ham học hỏi, tìm tòi hơn.
                          </p>
                        </div>
                        <div class="block-row price-slide">
                          <div class="col-price-left">Giá chỉ:</div>
                          <div class="col-price-right">
                            <div class="price-child">549.000đ/1 bé</div>
                            <div class="price-child">769.000đ/2 bé cùng TK</div>
                          </div>
                        </div>
                        <div class="button">
                          <button
                            type="button"
                            class="btn btn-beekids btn-lg pl-xl-5 pr-xl-5"
                          >
                            <i class="fa fa-shopping-cart"></i>&nbsp;Mua ngay
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
        <div class="container -wide">
          <h3 class="title-section">Các Khóa học và Combo khóa học cho bé</h3>
          <div class="block-filter">
            <div class="form-row">
              <div class="col-md-6 col-lg-4 col-xl-4 offset-xl-4">
                <div class="input-group input-group-beekids">
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
                  id="_listClassAge"
                  class="form-control form-control-beekids"
                ></select>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-2">
                <select class="form-control form-control-beekids">
                  <option value="0">Tất cả</option>
                  <option value="course">Khóa học</option>
                  <option value="combo">Gói khóa học</option>
                </select>
              </div>
            </div>
          </div>

          <div id="_listShopItemNew" class="row"></div>
        </div>
      </section>
      <ReviewCourse />
      <section id="guide-buy">
        <div class="container -wide">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="block-title">
                <h4 class="title-title">
                  Hướng dẫn cách mua khoá học và đăng nhập app Bkids một cách
                  đầy đủ chi tiết nhất ở dưới đây nhé!
                </h4>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-sm-4">
              <div class="guide-buy-item">
                <div class="guide-buy-item__image">
                  <img src="/images/img-guide-buy-1.png" alt="Alternate Text" />
                </div>
                <div class="guide-buy-item__title">
                  Hướng dẫn tải và Đăng nhập App Bkids
                </div>
                <div class="guide-buy-item__button">
                  <button type="button" class="btn btn-beekids">
                    Xem chi tiết <i class="ti-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="guide-buy-item">
                <div class="guide-buy-item__image">
                  <img src="/images/img-guide-buy-2.png" alt="Alternate Text" />
                </div>
                <div class="guide-buy-item__title">
                  Hướng dẫn thanh toán khi mua Khoá học
                </div>
                <div class="guide-buy-item__button">
                  <button type="button" class="btn btn-beekids">
                    Xem chi tiết <i class="ti-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="guide-buy-item">
                <div class="guide-buy-item__image">
                  <img src="/images/img-guide-buy-3.png" alt="Alternate Text" />
                </div>
                <div class="guide-buy-item__title">
                  Hướng dẫn lộ trình học và chơi game
                </div>
                <div class="guide-buy-item__button">
                  <button type="button" class="btn btn-beekids">
                    Xem chi tiết <i class="ti-arrow-right"></i>
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

export default CourseList;
