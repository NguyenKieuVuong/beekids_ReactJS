function Cart() {
  return (
    <>
      <section id="header-payment" class="-bg-img-14">
        <div class="container -wide">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="header-content">
                <div class="title">Thanh toán giỏ hàng</div>
                <div class="summary">
                  Hãy thanh toán giỏ hàng để bé có thể trải nghiệm những khóa
                  học tuyệt vời tại BEEKIDS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-payment">
        <div class="container -wide">
          <h3 class="title-page mt-2 mb-2">Thanh toán</h3>
          <div class="remind-login mb-3 mb-lg-4">
            Vui lòng
            <button type="button" data-toggle="modal" data-target="#modalLogin">
              Đăng nhập
            </button>
            để nhận ưu đãi
          </div>
          <div class="row">
            <div class="col-lg-8">
              <div class="table-responsive table-cart-payment">
                <table class="table ">
                  <thead>
                    <tr>
                      <th colspan="5">Danh sách đơn hàng</th>
                    </tr>
                  </thead>
                  <tbody id="_listOrder">
                    <tr>
                      <td class="product-thumbnail">
                        <a href="#">
                          <img src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png" />
                        </a>
                      </td>
                      <td class="product-name">
                        <a
                          href="/chi-tiet-san-pham?type=bkids_courses&amp;id_item=622870cf6561980012b7226f"
                          class="title"
                        >
                          Khóa học thu phí
                        </a>
                      </td>

                      <td class="product-quantity">
                        <button
                          type="button"
                          class="chonse-item-child"
                          data-toggle="modal"
                          data-type="contest"
                          data-target="#ModalChildAddContest"
                        >
                          <span id="" class="count-item">
                            0{" "}
                          </span>
                          bé
                        </button>
                      </td>
                      <td class="product-price">
                        <div class="price-sum">20.000đ</div>
                        <div class="price-child">20.000đ/1 bé</div>
                      </td>
                      <td class="product-delete">
                        <button class="btn btn-trash">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="product-thumbnail">
                        <a href="#">
                          <img src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png" />
                        </a>
                      </td>
                      <td class="product-name">
                        <a
                          href="/chi-tiet-san-pham?type=bkids_courses&amp;id_item=622870cf6561980012b7226f"
                          class="title"
                        >
                          Khóa học TTD mới
                        </a>
                      </td>

                      <td class="product-quantity">
                        <button
                          type="button"
                          class="chonse-item-child"
                          data-toggle="modal"
                          data-type="contest"
                          data-target="#ModalChildAddContest"
                        >
                          <span id="" class="count-item">
                            1{" "}
                          </span>
                          bé
                        </button>
                      </td>
                      <td class="product-price">
                        <div class="price-sum">20.000đ</div>
                        <div class="price-child">
                          100.000đ/1 bé
                          <br />
                          200.000đ/2 bé cùng tài khoản
                        </div>
                      </td>
                      <td class="product-delete">
                        <button class="btn btn-trash">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="product-thumbnail">
                        <a href="#">
                          <img src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png" />
                        </a>
                      </td>
                      <td class="product-name">
                        <a
                          href="/chi-tiet-san-pham?type=bkids_courses&amp;id_item=622870cf6561980012b7226f"
                          class="title"
                        >
                          Khóa học TTD mới
                        </a>
                      </td>

                      <td class="product-quantity">
                        <div class="block-quantity">
                          <div class="input-group input-group-sm">
                            <div class="input-group-prepend">
                              <button
                                class="btn btn-outline-dark js-btn-minus"
                                type="button"
                                onclick="sitePlusMinus(this.title,`minus`)"
                                title="622870cf65619800"
                              >
                                −
                              </button>
                            </div>
                            <input
                              id="count-item-622870cf65619800"
                              type="tel"
                              class="form-control text-center count-item"
                              value="1"
                              data-id="622870cf65619800"
                              placeholder=""
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-outline-dark js-btn-plus"
                                type="button"
                                onclick="sitePlusMinus(this.title,`plus`)"
                                title="622870cf65619800"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <small>(Bé)</small>
                      </td>
                      <td class="product-price">
                        <div class="price-sum">20.000đ</div>
                        <div class="price-child">
                          100.000đ/1 bé
                          <br />
                          200.000đ/2 bé cùng tài khoản
                        </div>
                      </td>
                      <td class="product-delete">
                        <button class="btn btn-trash">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="product-thumbnail">
                        <a href="#">
                          <img src="https://api.beekids.edu.vn/games/iap_items/icons/62c6b8b9bd27360007b69bfb/0b69zh.png" />
                        </a>
                      </td>
                      <td class="product-name">
                        <a
                          href="/chi-tiet-san-pham?type=bkids_courses&amp;id_item=622870cf6561980012b7226f"
                          class="title"
                        >
                          Gói beexu vừa
                        </a>
                      </td>

                      <td class="product-quantity">
                        <div class="block-quantity">
                          <div class="input-group input-group-sm">
                            <div class="input-group-prepend">
                              <button
                                class="btn btn-outline-dark js-btn-minus"
                                type="button"
                                onclick="sitePlusMinus(this.title,`minus`)"
                                title="622870cf6561980012b7226f"
                              >
                                −
                              </button>
                            </div>
                            <input
                              id="count-item-622870cf6561980012b7226f"
                              type="tel"
                              class="form-control text-center count-item"
                              value="1"
                              data-id="622870cf6561980012b7226f"
                              placeholder=""
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-outline-dark js-btn-plus"
                                type="button"
                                onclick="sitePlusMinus(this.title,`plus`)"
                                title="622870cf6561980012b7226f"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="product-price">
                        <div class="price-sum">20.000đ</div>
                        <div class="price-child">
                          100.000đ/1 bé
                          <br />
                          200.000đ/2 bé cùng tài khoản
                        </div>
                      </td>
                      <td class="product-delete">
                        <button class="btn btn-trash">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="price-table-total">
                <span class="mr-3">Tạm tính</span>
                <span class="price-total total-price">0đ</span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card-view info-user border mb-3">
                <h5 class="title">Thông tin khách hàng </h5>
                <div class="pl-2 pr-2">
                  <div id="divNoLogin">
                    <div class="mb-2">
                      <div class="form-row align-items-center">
                        <div class="col-4">
                          <div class="font-weight-600">
                            Email của bạn <span class="text-danger">*</span>
                          </div>
                        </div>
                        <div class="col-8">
                          <input
                            id="txtEmail"
                            type="text"
                            class="form-control"
                            placeholder="Vui lòng nhập email của bạn"
                          />
                          <div id="alert-txtEmail" class="invalid-feedback">
                            Vui lòng nhập email đúng định dạng
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="divInLogin">
                    <div class="form-row align-items-center mb-2">
                      <div class="col-4">
                        <div class="font-weight-600">
                          Họ và tên <span class="text-danger">*</span>
                        </div>
                      </div>
                      <div class="col-8">
                        <input
                          id="txtFullname"
                          type="text"
                          class="form-control"
                        />
                        <div id="alert-txtFullname" class="invalid-feedback">
                          Vui lòng nhập họ tên
                        </div>
                      </div>
                    </div>
                    <div class="form-row align-items-center mb-2">
                      <div class="col-4">
                        <div class="font-weight-600">
                          Số điện thoại <span class="text-danger">*</span>
                        </div>
                      </div>
                      <div class="col-8">
                        <input id="txtPhone" type="tel" class="form-control" />
                        <div id="alert-txtPhone" class="invalid-feedback">
                          Vui lòng nhập số điện thoại
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <div class="form-row">
                      <div class="col-4">
                        <div class="font-weight-600">Ghi chú </div>
                      </div>
                      <div class="col-8">
                        <textarea
                          id="txtNote"
                          type="text"
                          class="form-control"
                          row="5"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-view info-payment border mb-3">
                <h5 class="title">Thông tin đơn hàng </h5>
                <div class="pl-2 pr-2">
                  <div class="form-row">
                    <div class="col-auto">Tổng</div>
                    <div class="col price-sum text-right text-nowrap total-price">
                      0đ
                    </div>
                  </div>

                  <div class="text-secondary mb-2">
                    <small>
                      <i>
                        <span>6</span> sản phẩm
                      </i>
                    </small>
                  </div>
                  <div class="mb-3">
                    <label class="mb-1">Mã giới thiệu</label>
                    <input
                      id="txtCodeSaleOff"
                      type="text"
                      class="form-control"
                      placeholder="Nhập mã giới thiệu tại đây"
                    />
                    <div id="alert-txtCodeSaleOff" class="invalid-feedback">
                      Mã đã hết hạn sử dụng
                    </div>
                  </div>
                  <div class="form-row mb-3 align-items-end total-pay">
                    <div class="col-auto text-secondary">Thành tiền</div>
                    <div class="col price-payment  text-right text-nowrap total-price">
                      0đ
                    </div>
                  </div>
                  <div class="choise-payment">
                    <div class="custom-control custom-radio mb-2">
                      <input
                        type="radio"
                        id="rbcheckMomo"
                        name="customRadio"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label checkpayment"
                        aria-label="paycod"
                        for="rbcheckMomo"
                      >
                        <img
                          src="/images/icon-payment-method-momo.svg"
                          height="16"
                        />
                        Thanh toán bằng MoMo
                      </label>
                    </div>
                    <div id="paycod" class="content-pay">
                      Thanh toán bằng QRcode MoMo
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        id="rbcheckBank"
                        name="customRadio"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label checkpayment"
                        aria-label="paybank"
                        for="rbcheckBank"
                      >
                        <img
                          src="/images/icon-payment-method-atm.svg"
                          height="16"
                        />
                        Thanh toán bằng chuyển khoản ngân hàng
                      </label>
                    </div>
                    <div
                      id="paybank"
                      class="content-pay"
                      style="display: none;"
                    >
                      <p class="text-justify">
                        <i>
                          Đăng ký của bạn sẽ được xác nhận ngay sau khi chúng
                          tôi nhận được chuyển khoản. Vui lòng chuyển khoản theo
                          thông tin bên dưới. Bạn có thể chuyển khoản nhanh bằng
                          cách quét mã QR bên dưới.
                        </i>
                      </p>

                      <div id="_listbank">
                        <p>
                          <b>
                            Ngân hàng: Ngân hàng ACB – CN ĐÀ NẴNG
                            <br />
                            Số tài khoản: 3444 5678
                            <br />
                            Chủ tài khoản: CÔNG TY CỔ PHẦN TƯ VẤN THIẾT KẾ CNTT
                            DRAGOLD
                            <br />
                            Chi nhánh: Đà Nẵng
                            <br />
                            Nội dung: Beekids Số_điện_thoại_khách_hàng (ví dụ
                            Beekids 0906525600)
                          </b>
                        </p>
                        <p>
                          <b>
                            Ngân hàng: Vietcombank
                            <br />
                            Số tài khoản: 0041000143900
                            <br />
                            Chủ tài khoản: LE TRUNG
                            <br />
                            Chi nhánh: Đà Nẵng
                            <br />
                            Nội dung: Beekids Số_điện_thoại_khách_hàng (ví dụ
                            Beekids 0906525600)
                          </b>
                        </p>
                      </div>
                      <div class="text-center mt-2">
                        <img
                          src="/images/ma-qr-tt.png"
                          style="max-height: 450px;"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 mb-2 text-center">
                    <a
                      id="btncheck"
                      data-toggle="modal"
                      data-target="#modalConfirm"
                      href="javascript:void(0)"
                      class="btn btn-lg pl-lg-5 pr-lg-5 btn-beekids"
                    >
                      Thanh toán
                    </a>
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

export default Cart;
