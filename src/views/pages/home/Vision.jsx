import stick from "../../../assets/images/img-vision-stick.png";
import image from "../../../assets/images/img-vision.png";
function Vision() {
  return (
    <section id="vision" className="">
      <div className="container -wide">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="block-title text-center animate__animated animate__fadeInDown">
              <div className="title-header">TẦM NHÌN VÀ KHÁT VỌNG</div>
              <h4 className="title-title">
                Kết nối và hỗ trợ phát triển
                <br />
                tư duy cho 10 triệu trẻ em Việt Nam
              </h4>
              <p className="title-sumary">
                Với sự tham gia của Trung Tâm, Nhà Trường cùng mục tiêu tạo sân
                chơi trí tuệ và hiệu quả cao cho Trẻ. Giúp kiểm soát được tình
                trạng thừa thiếu nhân sự ở mỗi vị trí và bảng lương tại mọi thời
                điểm của năm.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={stick} className="img-stick" alt="" />
      <img
        src={image}
        className="img-bottom animate__animated animate__fadeInDown"
        alt=""
      />
    </section>
  );
}

export default Vision;
