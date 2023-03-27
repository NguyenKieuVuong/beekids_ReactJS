function DownloadApp() {
  return (
    <section id="section-app" className="-bg-img-10">
      <div className="container -wide">
        <div className="row justify-content-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.25s">
            <div className="block-app">
              <div className="block-main">
                <div className="block-row title">
                  HÃY TRẢI NGHIỆM APP ĐỂ BIẾT THÊM THÔNG TIN
                </div>
                <div className="block-row sumary">
                  Hãy cùng trải nghiệm ứng dụng <b>BKIDS</b> để hiểu rõ hơn
                  những thông tin và chương trình học mà bạn muốn lựa chọn để
                  phát triển nhé !
                </div>
              </div>
              <div className="button mt-5 mb-5">
                <button type="button" className="btn btn-bigsize btn-beekids">
                  Trải nghiệm ngay
                </button>
              </div>
            </div>
            <div className="list-download">
              <div className="block-download">
                <div className="text">
                  <img
                    src={require("../../assets/images/store-android.png")}
                    alt=""
                  />
                  CH Play
                </div>
                <img src={require("../../assets/images/ma-qr-ch.png")} alt="" />
              </div>
              <div className="block-download">
                <div className="text">
                  <img
                    src={require("../../assets/images/store-apple.png")}
                    alt=""
                  />
                  App Store
                </div>
                <img
                  src={require("../../assets/images/ma-qr-app.png")}
                  alt=""
                />
              </div>
              <div className="block-download">
                <div className="text">
                  <img
                    src={require("../../assets/images/app-website.png")}
                    alt=""
                  />
                  Website
                </div>
                <img
                  src={require("../../assets/images/ma-qr-web.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="text-center mt-5 mt-lg-0 wow fadeInRight"
              data-wow-delay="0.25s"
            >
              <img
                src={require("../../assets/images/right-content-3.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
