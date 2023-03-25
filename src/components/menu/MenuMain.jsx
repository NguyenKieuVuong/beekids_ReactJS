import React from "react";

const MenuMain = () => {
  return (
    <>
      <header className="header-style2">
        <div className="container -wide">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
              <img src="/images/logo.png" className="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#menu-main"
              aria-controls="menu-main"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="menu-main">
              <ul className="navbar-nav me-auto">
                <li className="nav-item menu-check notdrop">
                  <a className="nav-link" aria-label="notmenu" href="/">
                    Về Beekids
                  </a>
                </li>
                <li className="nav-item menu-check notdrop">
                  <a className="nav-link" aria-label="notmenu" href="/cuoc-thi">
                    Cuộc Thi
                  </a>
                </li>
                <li className="nav-item menu-check notdrop">
                  <a
                    className="nav-link "
                    aria-label="notmenu"
                    href="/cua-hang"
                  >
                    Cửa hàng
                  </a>
                </li>
                <li className="nav-item menu-check notdrop">
                  <a
                    className="nav-link "
                    aria-label="notmenu"
                    href="/goi-beexu"
                  >
                    Gói Beexu
                  </a>
                </li>
                <li className="nav-item menu-check notdrop">
                  <a
                    className="nav-link "
                    aria-label="notmenu"
                    href="/cau-hoi-thuong-gap"
                  >
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li className="nav-item menu-check notdrop">
                  <a className="nav-link" aria-label="notmenu" href="/dai-su">
                    Đại sứ
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link btn-clicknow"
                    target="_blank"
                    href="https://bkids.edu.vn/"
                  >
                    Trải nghiệm ngay!
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav menu-cart">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle icons-btn course"
                    href="/gio-hang"
                  >
                    <span className="icon icofont-shopping-cart" />
                    <span className="number total-count-event">0</span>
                  </a>
                  <div
                    id="cart-contest"
                    className="dropdown-menu dropdown-menu-right menu-check"
                  >
                    <div className="arrow" />
                    <h6 className="dropdown-header text-center">
                      Đã thêm vào giỏ hàng!
                    </h6>
                    <a
                      className="btn btn-block btn-sm btn-primary"
                      href="/gio-hang"
                    >
                      Xem giỏ hàng và thanh toán
                    </a>
                  </div>
                </li>
              </ul>
              <button
                id="btnShowLogin"
                type="button"
                data-toggle="modal"
                data-target="#modalLogin"
                className="btn btn-pill btn-lg btn-beekids"
              >
                ĐĂNG NHẬP
              </button>
            </div>
            <div id="divInfoMe" className="menu-user">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userdropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span id="lbfullname">Name user</span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="userdropdown"
                  >
                    <h5 className="dropdown-header">
                      <span id="lbcoid">0 Beexu</span>
                      <img src="/images/Icon_Coin.png" />
                    </h5>
                    <a className="dropdown-item" href="/thong-tin-tai-khoan">
                      Thông tin tài khoản
                    </a>
                    <a className="dropdown-item" href="/quan-ly-don-hang">
                      Quản lý đơn hàng
                    </a>
                    <a id="btnlogout" className="dropdown-item" href="#">
                      <i className="fa fa-sign-out" />
                      &nbsp;Đăng xuất
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MenuMain;
