function Advantage() {
  return (
    <section id="advantage" className="-bg-img-16">
      <div className="container -wide">
        <div className="row mb-5">
          <div className="col-lg-6 animate__animated animate__fadeInDown animate__delay-1s">
            <div className="text-center mb-3 mb-lg-0">
              <img
                src={require("../../../assets/images/img-advantage-1.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInDown">
            <div className="block-title">
              <h4 className="title-title">Thói quen chủ động, rèn luyện</h4>
            </div>
            <div className="advantage-content">
              <div className="advantage-content__text">
                Thông qua lộ trình học tập khoa học giúp Trẻ luyện tập và hình
                thành <b>thói quen chủ động hàng tuần</b>. Từ thói quen này, Trẻ
                sẽ tự giác, đốc thúc bản thân học tập, tìm cách giải quyết vấn
                đề và vượt qua sự lười biếng của bản thân. 
                <br />
                Những kỹ năng <b>“Vàng”</b> của Thế kỷ 21 giúp Trẻ phát triển
                trí thông minh toàn diện.
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 animate__fadeInLeft animate__animated  animate__delay-1s order-lg-1">
            <div className="text-center mb-3 mt-lg-0">
              <img
                src={require("../../../assets/images/img-advantage-2.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInRight order-lg-0">
            <div className="block-title">
              <h4 className="title-title">
                Chơi gì cũng vui, học gì cũng giỏi
              </h4>
            </div>
            <div className="advantage-content">
              <div className="advantage-content__text">
                Sử dụng <b>phương pháp trò chơi hóa</b> để thiết kế các bài học,
                rèn luyện cho trẻ nhằm tăng hứng thú học tập. Trẻ chơi là học
                qua hơn <b>15 trò chơi tư duy</b> sinh động, kích thích 2 bán
                cầu não và có thể tương tác cùng bạn bè.
                <br />
                Các nội dung trong ứng dụng được cung cấp, rà soát bởi những
                người có chuyên môn để đảm bảo mỗi nội dung Beekids đưa đến trẻ
                đều phục vụ việc phát triển tư duy
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 animate__animated animate__fadeInLeft animate__delay-1s ">
            <div className="text-center mb-3 mb-lg-0">
              <img
                src={require("../../../assets/images/img-advantage-3.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <div className="block-title">
              <h4 className="title-title">Kết nối toàn cầu</h4>
            </div>
            <div className="advantage-content">
              <div className="advantage-content__text">
                <ul className="">
                  <li className="mb-3">
                    Hỗ trợ hệ thống kết nối bạn bè để cùng rèn luyện, học tập
                    với các chương trình phát triển kỹ năng xuyên suốt từ Mầm
                    non đến hết Tiểu học.
                  </li>
                  <li>
                    Trẻ được kết nối toàn cầu khi tham gia các cuộc thi tư duy
                    có thưởng trên Ứng dụng Bkids.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
