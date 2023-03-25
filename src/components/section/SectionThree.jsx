import React from "react";

const SectionThree = () => {
  return (
    <section id="section-child" className="">
      <div className="container -wide">
        <div className="row ">
          <div className="col-lg-10 offset-lg-1">
            <div className="block-title text-center">
              <div className="title-header">VỚI TRẺ</div>
              <h4 className="title-title">
                Nền tảng kết nối học tập cùng nhau
              </h4>
              <p className="title-sumary">
                Trẻ chơi là học, cùng kết bạn và thi đua học tập qua các trò
                chơi và cuộc thi tư duy.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="block-child packet-1">
              <div className="block-main">
                <div className="block-row title">Lộ Trình</div>
                <div className="block-row list-item">
                  <a
                    href="javascript:void(0)"
                    className="showcase-item "
                    title="Lộ Trình"
                  >
                    <img
                      className="showcase-item-image"
                      src="/images/ico-1.png"
                      alt="Lộ Trình"
                    />
                    <p className="showcase-item-information">
                      Các lộ trình chuyên sâu về tư duy Toán, Tài Chính, Tiếng
                      Anh, Lập Trình và Đạo Đức.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="block-child packet-2">
              <div className="block-main">
                <div className="block-row title">Cuộc Thi</div>
                <div className="block-row list-item">
                  <a
                    href="javascript:void(0)"
                    className="showcase-item "
                    title="Cuộc Thi"
                  >
                    <img
                      className="showcase-item-image"
                      src="/images/ico-2.png"
                      alt="Cuộc Thi"
                    />
                    <p className="showcase-item-information">
                      Sân chơi cùng kết nối và thử sức với Bạn cùng tuổi.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="block-child packet-3">
              <div className="block-main">
                <div className="block-row title">Gắn Kết</div>
                <div className="block-row list-item">
                  <a
                    href="javascript:void(0)"
                    className="showcase-item "
                    title="Gắn Kết"
                  >
                    <img
                      className="showcase-item-image"
                      src="/images/ico-3.png"
                      alt="Gắn Kết"
                    />
                    <p className="showcase-item-information">
                      Cùng tương tác với Bạn cùng lớp và Cha Mẹ qua các trò chơi
                      trong ứng dụng và ngoài thực tế.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
