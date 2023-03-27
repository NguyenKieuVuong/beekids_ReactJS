function Wish() {
  return (
    <section id="wish" className="">
      <div className="container -wide">
        <div className="block-title text-center">
          <div className="title-header">MONG MUỐN</div>
          <h4 className="title-title">Mong muốn của Phụ Huynh</h4>
        </div>
        <div className="row justify-content-center align-items-center mb-4">
          <div className="col-sm-6 col-lg-3 wow fadeInDown">
            <div className="parents-wishes bg-1">
              <div className="parents-wishes__image">
                <img
                  src={require("../../../assets/images/icon-parents-wishes-1.png")}
                  alt="Phát triển tư duy cho con"
                />
              </div>
              <div className="parents-wishes__title">
                Phát triển tư duy cho con
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 wow fadeInDown">
            <div className="parents-wishes bg-2">
              <div className="parents-wishes__image">
                <img
                  src={require("../../../assets/images/icon-parents-wishes-2.png")}
                  alt="Đồng hành cùng con"
                />
              </div>
              <div className="parents-wishes__title">Đồng hành cùng con</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 wow fadeInDown">
            <div className="parents-wishes bg-3">
              <div className="parents-wishes__image">
                <img
                  src={require("../../../assets/images/icon-parents-wishes-3.png")}
                  alt="Chủ động học tập"
                />
              </div>
              <div className="parents-wishes__title">Chủ động học tập</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 wow fadeInDown">
            <div className="parents-wishes bg-4">
              <div className="parents-wishes__image">
                <img
                  src={require("../../../assets/images/icon-parents-wishes-4.png")}
                  alt=""
                />
              </div>
              <div className="parents-wishes__title">
                Sân chơi lành mạnh cho con
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container -wide">
        <div className="block-title text-center">
          <h4 className="title-title">Mong muốn của Giáo Viên</h4>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-6 col-md-4 wow fadeInDown">
            <div className="teacher-wishes">
              <div className="teacher-wishes__image">
                <img
                  src={require("../../../assets/images/icon-teacher-wishes-1.png")}
                  alt=""
                />
              </div>
              <div className="teacher-wishes__title">Công cụ giảng dạy</div>
              <div className="teacher-wishes__summary">
                Công cụ giảng dạy trực quan, sinh động, tạo hứng thú học tập cho
                trẻ Mầm non, Tiểu học (4-10 tuổi).
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 wow fadeInDown">
            <div className="teacher-wishes">
              <div className="teacher-wishes__image">
                <img
                  src={require("../../../assets/images/icon-teacher-wishes-2.png")}
                  alt=""
                />
              </div>
              <div className="teacher-wishes__title">Tạo kết nối với nhau</div>
              <div className="teacher-wishes__summary">
                Tạo kết nối giữa Giáo viên - Phụ Huynh - Trẻ, Trẻ - Trẻ.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 wow fadeInDown">
            <div className="teacher-wishes">
              <div className="teacher-wishes__image">
                <img
                  src={require("../../../assets/images/icon-teacher-wishes-3.png")}
                  alt=""
                />
              </div>
              <div className="teacher-wishes__title">Theo dõi và đồng hành</div>
              <div className="teacher-wishes__summary">
                Công cụ theo dõi, đánh giá cụ thể quá trình và kết quả học tập
                của Trẻ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wish;
