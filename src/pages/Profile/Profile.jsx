function Profile() {
  return (
    <>
      {" "}
      <section id="header-profile" class="-bg-img-14">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="header-content">
                <div class="txt-1">Xin chào,</div>
                <div class="name">
                  <span>Nguyễn Thành Thông</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="user-profile" class="site-section pt-3 pb-96px">
        <div class="side-menu">
          <div class="container">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" href="/thong-tin-tai-khoan">
                  Thông tin tài khoản
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/quan-ly-don-hang">
                  Quản lý đơn hàng
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="profile">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-10">
                <div class="row">
                  <div class="col-md-3">
                    <nav>
                      <div class="nav flex-column nav-tabs" role="tablist">
                        <a
                          class="nav-item nav-link active show"
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
                          class="nav-item nav-link"
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
                          class="nav-item nav-link"
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
                  <div class="col-md-9">
                    <div class="tab-content">
                      <div
                        id="nav-profile"
                        class="information container tab-pane active"
                      >
                        <div class="row mt-3 mb-3">
                          <div class="col-sm-12">
                            <div id="profilelogo" class="user-profile">
                              <div class="div-img_avartar">
                                <img
                                  class="img_avatar"
                                  id="avatar"
                                  src="/admin_images/images-default.jpg"
                                />
                                <button
                                  class="upload"
                                  onclick="document.getElementById('txtuseditavatar').click()"
                                  type="button"
                                >
                                  <i class="fa fa-cloud-upload"></i>
                                </button>
                              </div>
                            </div>
                            <input
                              type="file"
                              class="d-none"
                              id="txtuseditavatar"
                              accept="image/*"
                              onchange="showPreview(this, 'avatar')"
                            />
                          </div>
                          <div class="col-sm-12">
                            <div class="form-group">
                              <label>Email (Tài khoản Beekids)</label>
                              <input
                                id="txtusemail"
                                type="text"
                                class="form-control --style-1"
                                disabled="disabled"
                              />
                            </div>
                            <div class="form-group">
                              <label>Họ và tên phụ huynh</label>
                              <input
                                id="txtushoten"
                                type="text"
                                class="form-control --style-1 client-input-name"
                              />
                            </div>
                            <div class="form-group">
                              <label>Số điện thoại</label>
                              <input
                                id="txtussodt"
                                type="tel"
                                class="form-control --style-1"
                                maxlength="10"
                              />
                            </div>

                            <div class="form-group">
                              <button
                                id="btnUpdate"
                                data-id="0"
                                type="button"
                                class="btn btn-beekids pt-2 pl-4 pr-4 pb-2"
                              >
                                Cập nhật
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="nav-child"
                        class="password container tab-pane fade"
                      >
                        <div class="d-flex align-items-center justify-content-between mt-3 mb-3">
                          <i>Phụ huynh được thêm tối đa 3 bé</i>
                          <button
                            type="button"
                            class="btn btn-outline-beekids"
                            onclick="addTypebutton()"
                            data-toggle="modal"
                            data-target="#modalChild"
                          >
                            Thêm bé
                          </button>
                        </div>
                        <div id="_listChildProfile" class="mt-3 mb-3">
                          <div class="col-md-12">
                            <div class="form-group">
                              <div class="d-flex align-items-center justify-content-between mb-1">
                                <label class="mb-0">1.Họ và tên của bé</label>
                                <button
                                  type="button"
                                  class="btn  btn-sm btn-danger client-input-name"
                                >
                                  <i class="fa fa-close"></i>
                                </button>
                              </div>

                              <input
                                id=""
                                type="text"
                                class="form-control --style-1"
                              />
                            </div>
                            <div class="form-group">
                              <label>Ngày sinh</label>
                              <div class="input-group date">
                                <input
                                  id="txtBirthDate-1"
                                  type="text"
                                  placeholder="Ngày sinh"
                                  class="form-control --style-1"
                                  name="dates"
                                />
                                <div class="input-group-append">
                                  <label
                                    for="txtBirthDate-1"
                                    class="input-group-text"
                                  >
                                    <span class="fa fa-calendar"></span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <div class="d-flex align-items-center justify-content-between mb-1">
                                <label class="mb-0">2.Họ và tên của bé</label>
                                <button
                                  type="button"
                                  class="btn  btn-sm btn-danger client-input-name"
                                >
                                  <i class="fa fa-close"></i>
                                </button>
                              </div>

                              <input
                                id=""
                                type="text"
                                class="form-control --style-1"
                              />
                            </div>
                            <div class="form-group">
                              <label>Ngày sinh</label>
                              <div class="input-group date">
                                <input
                                  id="txtBirthDate-2"
                                  type="text"
                                  placeholder="Ngày sinh"
                                  class="form-control --style-1"
                                  name="dates"
                                />
                                <div class="input-group-append">
                                  <label
                                    for="txtBirthDate-2"
                                    class="input-group-text"
                                  >
                                    <span class="fa fa-calendar"></span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group text-center">
                          <button
                            id="btnupdateChild"
                            data-id="0"
                            type="button"
                            class="btn pt-2 pl-4 pr-4 pb-2 btn-beekids"
                          >
                            Cập nhật
                          </button>
                        </div>
                      </div>
                      <div
                        id="nav-password"
                        class="password container tab-pane fade"
                      >
                        <div class="row mt-3 mb-3">
                          <div class="col-12">
                            <div class="form-group">
                              <label>Mật khẩu cũ</label>
                              <div class="block-pass">
                                <input
                                  id="txtdoimkhientai"
                                  type="password"
                                  class="form-control --style-1"
                                  placeholder=""
                                  value=""
                                />
                                <button
                                  type="button"
                                  id="btn-view-profile-1"
                                  class="view-pass"
                                  onclick="viewpass('txtdoimkhientai',this.id)"
                                >
                                  <i class="fa fa-eye"></i>
                                  <i class="fa fa-eye-slash"></i>
                                </button>
                              </div>
                            </div>
                            <div class="form-group">
                              <label>Mật khẩu mới</label>
                              <div class="block-pass">
                                <input
                                  id="txtmkmoi1doi"
                                  type="password"
                                  class="form-control --style-1"
                                  placeholder=""
                                  value=""
                                />
                                <button
                                  type="button"
                                  id="btn-view-profile-2"
                                  class="view-pass"
                                  onclick="viewpass('txtmkmoi1doi',this.id)"
                                >
                                  <i class="fa fa-eye"></i>
                                  <i class="fa fa-eye-slash"></i>
                                </button>
                              </div>
                            </div>
                            <div class="form-group">
                              <label>Nhập lại mật khẩu mới</label>
                              <div class="block-pass">
                                <input
                                  id="txtnhalaimk"
                                  type="password"
                                  class="form-control --style-1"
                                  placeholder=""
                                  value=""
                                />
                                <button
                                  type="button"
                                  id="btn-view-profile-3"
                                  class="view-pass"
                                  onclick="viewpass('txtnhalaimk',this.id)"
                                >
                                  <i class="fa fa-eye"></i>
                                  <i class="fa fa-eye-slash"></i>
                                </button>
                              </div>
                            </div>
                            <div class="form-group">
                              <button
                                id="btndoimkusedit"
                                data-id="0"
                                type="button"
                                class="btn pt-2 pl-4 pr-4 pb-2 btn-beekids"
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
