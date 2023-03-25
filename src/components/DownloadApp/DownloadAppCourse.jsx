function DownloadAppCourse() {
  return (
    <>
      {" "}
      <section id="section-app" class="-bg-img-10">
        <div class="container -wide">
          <div class="row justify-content-center">
            <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.25s">
              <div class="block-app">
                <div class="block-main">
                  <div class="block-row title">
                    Bạn chưa chọn được Khóa học nào phù hợp ?
                  </div>
                  <div class="block-row sumary">
                    Hãy tải app <b>BKIDS</b> để cho bé trải nghiệm trước và lựa
                    chọn những Khóa học theo đúng nhu cầu của bé !
                  </div>
                </div>
                <div class="button mt-5 mb-5">
                  <button type="button" class="btn btn-bigsize btn-beekids">
                    Trải nghiệm ngay
                  </button>
                </div>
              </div>
              <div class="list-download">
                <div class="block-download">
                  <div class="text">
                    <img src="/images/store-android.png" /> CH Play
                  </div>
                  <img src="/images/ma-qr-ch.png" />
                </div>
                <div class="block-download">
                  <div class="text">
                    <img src="/images/store-apple.png" /> App Store
                  </div>
                  <img src="/images/ma-qr-app.png" />
                </div>
                <div class="block-download">
                  <div class="text">
                    <img src="/images/app-website.png" /> Website
                  </div>
                  <img src="/images/ma-qr-web.png" />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="text-center mt-5 mt-lg-0 wow fadeInRight"
                data-wow-delay="0.25s"
              >
                <img src="/images/right-content-3.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DownloadAppCourse;
