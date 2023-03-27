function Profile() {
  return (
    <>
      <section id="header-profile" className="-bg-img-14">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="header-content">
                <div className="txt-1">Xin chào,</div>
                <div className="name">
                  <span>Nguyễn Thành Thông</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="user-profile" className="site-section pt-3 pb-96px">
        <div className="side-menu">
          <div className="container">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" href="/thong-tin-tai-khoan">
                  Thông tin tài khoản
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/quan-ly-don-hang">
                  Quản lý đơn hàng
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="row">
                  <div className="col-md-3">
                    <nav>
                      <div className="nav flex-column nav-tabs" role="tablist">
                        <a
                          className="nav-item nav-link active show"
                          id="nav-tab-1"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="custom-nav-profile"
                          aria-selected="true"
                        >
                          Tài khoản
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-tab-3"
                          data-toggle="tab"
                          href="#nav-child"
                          role="tab"
                          aria-controls="custom-nav-password"
                          aria-selected="false"
                        >
                          Thông tin của bé
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-tab-2"
                          data-toggle="tab"
                          href="#nav-password"
                          role="tab"
                          aria-controls="custom-nav-password"
                          aria-selected="false"
                        >
                          Mật khẩu
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-9">
                    <div className="tab-content">
                      <div
                        id="nav-profile"
                        className="information container tab-pane active"
                      >
                        <div className="row mt-3 mb-3">
                          <div className="col-sm-12">
                            <div id="profilelogo" className="user-profile">
                              <div className="div-img_avartar">
                                <img
                                  className="img_avatar"
                                  id="avatar"
                                  src={require("../../assets/images/images-default.jpg")}
                                  alt=""
                                />
                                <button
                                  className="upload"
                                  onclick="document.getElementById('txtuseditavatar').click()"
                                  type="button"
                                >
                                  <i className="fa fa-cloud-upload"></i>
                                </button>
                              </div>
                            </div>
                            <input
                              type="file"
                              className="d-none"
                              id="txtuseditavatar"
                              accept="image/*"
                              onchange="showPreview(this, 'avatar')"
                            />
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label>Email (Tài khoản Beekids)</label>
                              <input
                                id="txtusemail"
                                type="text"
                                className="form-control --style-1"
                                disabled="disabled"
                              />
                            </div>
                            <div className="form-group">
                              <label>Họ và tên phụ huynh</label>
                              <input
                                id="txtushoten"
                                type="text"
                                className="form-control --style-1 client-input-name"
                              />
                            </div>
                            <div className="form-group">
                              <label>Số điện thoại</label>
                              <input
                                id="txtussodt"
                                type="tel"
                                className="form-control --style-1"
                                maxlength="10"
                              />
                            </div>

                            <div className="form-group">
                              <button
                                id="btnUpdate"
                                data-id="0"
                                type="button"
                                className="btn btn-beekids pt-2 pl-4 pr-4 pb-2"
                              >
                                Cập nhật
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="nav-child"
                        className="password container tab-pane fade"
                      >
                        <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
                          <i>Phụ huynh được thêm tối đa 3 bé</i>
                          <button
                            type="button"
                            className="btn btn-outline-beekids"
                            onclick="addTypebutton()"
                            data-toggle="modal"
                            data-target="#modalChild"
                          >
                            Thêm bé
                          </button>
                        </div>
                        <div id="_listChildProfile" className="mt-3 mb-3">
                          <div className="col-md-12">
                            <div className="form-group">
                              <div className="d-flex align-items-center justify-content-between mb-1">
                                <label className="mb-0">
                                  1.Họ và tên của bé
                                </label>
                                <button
                                  type="button"
                                  className="btn  btn-sm btn-danger client-input-name"
                                >
                                  <i className="fa fa-close"></i>
                                </button>
                              </div>

                              <input
                                id=""
                                type="text"
                                className="form-control --style-1"
                              />
                            </div>
                            <div className="form-group">
                              <label>Ngày sinh</label>
                              <div className="input-group date">
                                <input
                                  id="txtBirthDate-1"
                                  type="text"
                                  placeholder="Ngày sinh"
                                  className="form-control --style-1"
                                  name="dates"
                                />
                                <div className="input-group-append">
                                  <label
                                    for="txtBirthDate-1"
                                    className="input-group-text"
                                  >
                                    <span className="fa fa-calendar"></span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <div className="d-flex align-items-center justify-content-between mb-1">
                                <label className="mb-0">
                                  2.Họ và tên của bé
                                </label>
                                <button
                                  type="button"
                                  className="btn  btn-sm btn-danger client-input-name"
                                >
                                  <i className="fa fa-close"></i>
                                </button>
                              </div>

                              <input
                                id=""
                                type="text"
                                className="form-control --style-1"
                              />
                            </div>
                            <div className="form-group">
                              <label>Ngày sinh</label>
                              <div className="input-group date">
                                <input
                                  id="txtBirthDate-2"
                                  type="text"
                                  placeholder="Ngày sinh"
                                  className="form-control --style-1"
                                  name="dates"
                                />
                                <div className="input-group-append">
                                  <label
                                    for="txtBirthDate-2"
                                    className="input-group-text"
                                  >
                                    <span className="fa fa-calendar"></span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group text-center">
                          <button
                            id="btnupdateChild"
                            data-id="0"
                            type="button"
                            className="btn pt-2 pl-4 pr-4 pb-2 btn-beekids"
                          >
                            Cập nhật
                          </button>
                        </div>
                      </div>
                      <div
                        id="nav-password"
                        className="password container tab-pane fade"
                      >
                        <div className="row mt-3 mb-3">
                          <div className="col-12">
                            <div className="form-group">
                              <label>Mật khẩu cũ</label>
                              <div className="block-pass">
                                <input
                                  id="txtdoimkhientai"
                                  type="password"
                                  className="form-control --style-1"
                                  placeholder=""
                                  value=""
                                />
                                <button
                                  type="button"
                                  id="btn-view-profile-1"
                                  className="view-pass"
                                  onclick="viewpass('txtdoimkhientai',this.id)"
                                >
                                  <i className="fa fa-eye"></i>
                                  <i className="fa fa-eye-slash"></i>
                                </button>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Mật khẩu mới</label>
                              <div className="block-pass">
                                <input
                                  id="txtmkmoi1doi"
                                  type="password"
                                  className="form-control --style-1"
                                  placeholder=""
                                  value=""
                                />
                                <button
                                  type="button"
                                  id="btn-view-profile-2"
                                  className="view-pass"
                                  onclick="viewpass('txtmkmoi1doi',this.id)"
                                >
                                  <i className="fa fa-eye"></i>
                                  <i className="fa fa-eye-slash"></i>
                                </button>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Nhập lại mật khẩu mới</label>
                              <div className="block-pass">
                                <input
                                  id="txtnhalaimk"
                                  type="password"
                                  className="form-control --style-1"
                                  placeholder=""
                                  value=""
                                />
                                <button
                                  type="button"
                                  id="btn-view-profile-3"
                                  className="view-pass"
                                  onclick="viewpass('txtnhalaimk',this.id)"
                                >
                                  <i className="fa fa-eye"></i>
                                  <i className="fa fa-eye-slash"></i>
                                </button>
                              </div>
                            </div>
                            <div className="form-group">
                              <button
                                id="btndoimkusedit"
                                data-id="0"
                                type="button"
                                className="btn pt-2 pl-4 pr-4 pb-2 btn-beekids"
                              >
                                Cập nhật
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
