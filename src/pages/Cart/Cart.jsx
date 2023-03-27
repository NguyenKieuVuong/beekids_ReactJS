import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <section id="header-payment" className="-bg-img-14">
        <div className="container -wide">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="header-content">
                <div className="title">Thanh toán giỏ hàng</div>
                <div className="summary">
                  Hãy thanh toán giỏ hàng để bé có thể trải nghiệm những khóa
                  học tuyệt vời tại BEEKIDS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-payment">
        <div className="container -wide">
          <h3 className="title-page mt-2 mb-2">Thanh toán</h3>
          <div className="remind-login mb-3 mb-lg-4">
            Vui lòng
            <button type="button" data-toggle="modal" data-target="#modalLogin">
              Đăng nhập
            </button>
            để nhận ưu đãi
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="table-responsive table-cart-payment">
                <table className="table ">
                  <thead>
                    <tr>
                      <th colspan="5">Danh sách đơn hàng</th>
                    </tr>
                  </thead>
                  <tbody id="_listOrder">
                    <tr>
                      <td className="product-thumbnail">
                        <Link to="/">
                          <img
                            src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png"
                            alt=""
                          />
                        </Link>
                      </td>
                      <td className="product-name">
                        <Link
                          to="/chi-tiet-san-pham?type=bkids_courses&amp;id_item=622870cf6561980012b7226f"
                          className="title"
                        >
                          Khóa học thu phí
                        </Link>
                      </td>

                      <td className="product-quantity">
                        <button
                          type="button"
                          className="chonse-item-child"
                          data-toggle="modal"
                          data-type="contest"
                          data-target="#ModalChildAddContest"
                        >
                          <span id="" className="count-item">
                            0
                          </span>
                          bé
                        </button>
                      </td>
                      <td className="product-price">
                        <div className="price-sum">20.000đ</div>
                        <div className="price-child">20.000đ/1 bé</div>
                      </td>
                      <td className="product-delete">
                        <button className="btn btn-trash">
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail">
                        <Link href="#">
                          <img
                            src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png"
                            alt=""
                          />
                        </Link>
                      </td>
                      <td className="product-name">
                        <Link
                          href="/chi-tiet-san-pham?type=bkids_courses&amp;id_item=622870cf6561980012b7226f"
                          className="title"
                        >
                          Khóa học TTD mới
                        </Link>
                      </td>

                      <td className="product-quantity">
                        <button
                          type="button"
                          className="chonse-item-child"
                          data-toggle="modal"
                          data-type="contest"
                          data-target="#ModalChildAddContest"
                        >
                          <span id="" className="count-item">
                            1
                          </span>
                          bé
                        </button>
                      </td>
                      <td className="product-price">
                        <div className="price-sum">20.000đ</div>
                        <div className="price-child">
                          100.000đ/1 bé
                          <br />
                          200.000đ/2 bé cùng tài khoản
                        </div>
                      </td>
                      <td className="product-delete">
                        <button className="btn btn-trash">
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail">
                        <Link href="#">
                          <img
                            src="https://api.beekids.edu.vn/trainings/paths/icons/60cdc5973691d40036af5a7c/RmlqwRjp.png"
                            alt=""
                          />
                        </Link>
                      </td>
                      <td className="product-name">
                        <Link
                          href="/chi-tiet-san-pham?type=bkids_courses&amp;id_item=622870cf6561980012b7226f"
                          className="title"
                        >
                          Khóa học TTD mới
                        </Link>
                      </td>

                      <td className="product-quantity">
                        <div className="block-quantity">
                          <div className="input-group input-group-sm">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-dark js-btn-minus"
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
                              className="form-control text-center count-item"
                              value="1"
                              data-id="622870cf65619800"
                              placeholder=""
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-dark js-btn-plus"
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
                      <td className="product-price">
                        <div className="price-sum">20.000đ</div>
                        <div className="price-child">
                          100.000đ/1 bé
                          <br />
                          200.000đ/2 bé cùng tài khoản
                        </div>
                      </td>
                      <td className="product-delete">
                        <button className="btn btn-trash">
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail">
                        <Link href="#">
                          <img
                            src="https://api.beekids.edu.vn/games/iap_items/icons/62c6b8b9bd27360007b69bfb/0b69zh.png"
                            alt=""
                          />
                        </Link>
                      </td>
                      <td className="product-name">
                        <Link
                          href="/chi-tiet-san-pham?type=bkids_courses&amp;id_item=622870cf6561980012b7226f"
                          className="title"
                        >
                          Gói beexu vừa
                        </Link>
                      </td>

                      <td className="product-quantity">
                        <div className="block-quantity">
                          <div className="input-group input-group-sm">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-dark js-btn-minus"
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
                              className="form-control text-center count-item"
                              value="1"
                              data-id="622870cf6561980012b7226f"
                              placeholder=""
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-dark js-btn-plus"
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
                      <td className="product-price">
                        <div className="price-sum">20.000đ</div>
                        <div className="price-child">
                          100.000đ/1 bé
                          <br />
                          200.000đ/2 bé cùng tài khoản
                        </div>
                      </td>
                      <td className="product-delete">
                        <button className="btn btn-trash">
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="price-table-total">
                <span className="mr-3">Tạm tính</span>
                <span className="price-total total-price">0đ</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-view info-user border mb-3">
                <h5 className="title">Thông tin khách hàng </h5>
                <div className="pl-2 pr-2">
                  <div id="divNoLogin">
                    <div className="mb-2">
                      <div className="form-row align-items-center">
                        <div className="col-4">
                          <div className="font-weight-600">
                            Email của bạn <span className="text-danger">*</span>
                          </div>
                        </div>
                        <div className="col-8">
                          <input
                            id="txtEmail"
                            type="text"
                            className="form-control"
                            placeholder="Vui lòng nhập email của bạn"
                          />
                          <div id="alert-txtEmail" className="invalid-feedback">
                            Vui lòng nhập email đúng định dạng
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="divInLogin">
                    <div className="form-row align-items-center mb-2">
                      <div className="col-4">
                        <div className="font-weight-600">
                          Họ và tên <span className="text-danger">*</span>
                        </div>
                      </div>
                      <div className="col-8">
                        <input
                          id="txtFullname"
                          type="text"
                          className="form-control"
                        />
                        <div
                          id="alert-txtFullname"
                          className="invalid-feedback"
                        >
                          Vui lòng nhập họ tên
                        </div>
                      </div>
                    </div>
                    <div className="form-row align-items-center mb-2">
                      <div className="col-4">
                        <div className="font-weight-600">
                          Số điện thoại <span className="text-danger">*</span>
                        </div>
                      </div>
                      <div className="col-8">
                        <input
                          id="txtPhone"
                          type="tel"
                          className="form-control"
                        />
                        <div id="alert-txtPhone" className="invalid-feedback">
                          Vui lòng nhập số điện thoại
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="form-row">
                      <div className="col-4">
                        <div className="font-weight-600">Ghi chú </div>
                      </div>
                      <div className="col-8">
                        <textarea
                          id="txtNote"
                          type="text"
                          className="form-control"
                          row="5"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-view info-payment border mb-3">
                <h5 className="title">Thông tin đơn hàng </h5>
                <div className="pl-2 pr-2">
                  <div className="form-row">
                    <div className="col-auto">Tổng</div>
                    <div className="col price-sum text-right text-nowrap total-price">
                      0đ
                    </div>
                  </div>

                  <div className="text-secondary mb-2">
                    <small>
                      <i>
                        <span>6</span> sản phẩm
                      </i>
                    </small>
                  </div>
                  <div className="mb-3">
                    <label className="mb-1">Mã giới thiệu</label>
                    <input
                      id="txtCodeSaleOff"
                      type="text"
                      className="form-control"
                      placeholder="Nhập mã giới thiệu tại đây"
                    />
                    <div id="alert-txtCodeSaleOff" className="invalid-feedback">
                      Mã đã hết hạn sử dụng
                    </div>
                  </div>
                  <div className="form-row mb-3 align-items-end total-pay">
                    <div className="col-auto text-secondary">Thành tiền</div>
                    <div className="col price-payment  text-right text-nowrap total-price">
                      0đ
                    </div>
                  </div>
                  <div className="choise-payment">
                    <div className="custom-control custom-radio mb-2">
                      <input
                        type="radio"
                        id="rbcheckMomo"
                        name="customRadio"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label checkpayment"
                        aria-label="paycod"
                        for="rbcheckMomo"
                      >
                        <img
                          src={require("../../assets/images/icon-payment-method-momo.svg")}
                          alt=""
                          height="16"
                        />
                        Thanh toán bằng MoMo
                      </label>
                    </div>
                    <div id="paycod" className="content-pay">
                      Thanh toán bằng QRcode MoMo
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="rbcheckBank"
                        name="customRadio"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label checkpayment"
                        aria-label="paybank"
                        for="rbcheckBank"
                      >
                        <img
                          src={require("../../assets/images/icon-payment-method-atm.svg")}
                          alt=""
                          height="16"
                        />
                        Thanh toán bằng chuyển khoản ngân hàng
                      </label>
                    </div>
                    <div
                      id="paybank"
                      className="content-pay"
                      style={{ display: "none" }}
                    >
                      <p className="text-justify">
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
                      <div className="text-center mt-2">
                        <img
                          src={require("../../assets/images/ma-qr-tt.png")}
                          alt=""
                          style={{ maxHeight: "450px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 mb-2 text-center">
                    <button
                      type="button"
                      id="btncheck"
                      data-toggle="modal"
                      data-target="#modalConfirm"
                      className="btn btn-lg pl-lg-5 pr-lg-5 btn-beekids"
                    >
                      Thanh toán
                    </button>
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
