import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Teams() {
  var teams = {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    centerPadding: "40px",
    variableWidth: true,
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <>
      <section id="teams">
        <div className="block-title text-center">
          <div className="title-header text-uppercase">Đội ngũ</div>
          <h4 className="title-title">
            VỚI NHỮNG CON NGƯỜI DÀY DẶN KINH NGHIỆM
          </h4>
        </div>
        <div id="slide-teams">
          {" "}
          <Slider {...teams}>
            <div className="teams-info">
              <div className="teams-info__image">
                <img
                  src={require("../../assets/images/chuyengia-Trung.jpg")}
                  alt=""
                />
              </div>
              <div className="teams-info__title">LÊ TRUNG</div>
              <div className="teams-info__summary">
                <ul>
                  <li>CEO & Founder của Beekids, CEO of Hifiveplus</li>
                  <li>13 năm kinh nghiệm phát triển ứng dụng và game</li>
                  <li>
                    8 năm kinh nghiệm vận hành các dự án phần mềm outsourcing
                  </li>
                  <li>6 năm kinh nghiệm hỗ trợ tư vấn các doanh nghiệp SME</li>
                  <li>Thế mạnh về vận hành doanh nghiệp công nghệ</li>
                </ul>
              </div>
            </div>
            <div className="teams-info">
              <div className="teams-info__image">
                <img
                  src={require("../../assets/images/chuyengia-Trung.jpg")}
                  alt=""
                />
              </div>
              <div className="teams-info__title">LÊ TRUNG</div>
              <div className="teams-info__summary">
                <ul>
                  <li>CEO & Founder của Beekids, CEO of Hifiveplus</li>
                  <li>13 năm kinh nghiệm phát triển ứng dụng và game</li>
                  <li>
                    8 năm kinh nghiệm vận hành các dự án phần mềm outsourcing
                  </li>
                  <li>6 năm kinh nghiệm hỗ trợ tư vấn các doanh nghiệp SME</li>
                  <li>Thế mạnh về vận hành doanh nghiệp công nghệ</li>
                </ul>
              </div>
            </div>
            <div className="teams-info">
              <div className="teams-info__image">
                <img
                  src={require("../../assets/images/chuyengia-Trung.jpg")}
                  alt=""
                />
              </div>
              <div className="teams-info__title">LÊ TRUNG</div>
              <div className="teams-info__summary">
                <ul>
                  <li>CEO & Founder của Beekids, CEO of Hifiveplus</li>
                  <li>13 năm kinh nghiệm phát triển ứng dụng và game</li>
                  <li>
                    8 năm kinh nghiệm vận hành các dự án phần mềm outsourcing
                  </li>
                  <li>6 năm kinh nghiệm hỗ trợ tư vấn các doanh nghiệp SME</li>
                  <li>Thế mạnh về vận hành doanh nghiệp công nghệ</li>
                </ul>
              </div>
            </div>
            <div className="teams-info">
              <div className="teams-info__image">
                <img
                  src={require("../../assets/images/chuyengia-Trung.jpg")}
                  alt=""
                />
              </div>
              <div className="teams-info__title">LÊ TRUNG</div>
              <div className="teams-info__summary">
                <ul>
                  <li>CEO & Founder của Beekids, CEO of Hifiveplus</li>
                  <li>13 năm kinh nghiệm phát triển ứng dụng và game</li>
                  <li>
                    8 năm kinh nghiệm vận hành các dự án phần mềm outsourcing
                  </li>
                  <li>6 năm kinh nghiệm hỗ trợ tư vấn các doanh nghiệp SME</li>
                  <li>Thế mạnh về vận hành doanh nghiệp công nghệ</li>
                </ul>
              </div>
            </div>
            <div className="teams-info">
              <div className="teams-info__image">
                <img
                  src={require("../../assets/images/chuyengia-Trung.jpg")}
                  alt=""
                />
              </div>
              <div className="teams-info__title">LÊ TRUNG</div>
              <div className="teams-info__summary">
                <ul>
                  <li>CEO & Founder của Beekids, CEO of Hifiveplus</li>
                  <li>13 năm kinh nghiệm phát triển ứng dụng và game</li>
                  <li>
                    8 năm kinh nghiệm vận hành các dự án phần mềm outsourcing
                  </li>
                  <li>6 năm kinh nghiệm hỗ trợ tư vấn các doanh nghiệp SME</li>
                  <li>Thế mạnh về vận hành doanh nghiệp công nghệ</li>
                </ul>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <section id="teams">
        <div className="block-title text-center">
          <div className="title-header text-uppercase">Đội ngũ</div>
          <h4 className="title-title">
            VỚI NHỮNG CON NGƯỜI DÀY DẶN KINH NGHIỆM
          </h4>
        </div>
        <div id="slide-teams" className="">
          <div className="teams-info">
            <div className="teams-info__image">
              <img
                src={require("../../assets/images/chuyengia-Trung.jpg")}
                alt=""
              />
            </div>
            <div className="teams-info__title">LÊ TRUNG</div>
            <div className="teams-info__summary">
              <ul>
                <li>CEO & Founder của Beekids, CEO of Hifiveplus</li>
                <li>13 năm kinh nghiệm phát triển ứng dụng và game</li>
                <li>
                  8 năm kinh nghiệm vận hành các dự án phần mềm outsourcing
                </li>
                <li>6 năm kinh nghiệm hỗ trợ tư vấn các doanh nghiệp SME</li>
                <li>Thế mạnh về vận hành doanh nghiệp công nghệ</li>
              </ul>
            </div>
          </div>
          <div className="teams-info">
            <div className="teams-info__image">
              <img
                src={require("../../assets/images/chuyengia-Trung.jpg")}
                alt=""
              />
            </div>
            <div className="teams-info__title">LÊ TRUNG</div>
            <div className="teams-info__summary">
              <ul>
                <li>CEO & Founder của Beekids, CEO of Hifiveplus</li>
                <li>13 năm kinh nghiệm phát triển ứng dụng và game</li>
                <li>
                  8 năm kinh nghiệm vận hành các dự án phần mềm outsourcing
                </li>
                <li>6 năm kinh nghiệm hỗ trợ tư vấn các doanh nghiệp SME</li>
                <li>Thế mạnh về vận hành doanh nghiệp công nghệ</li>
              </ul>
            </div>
          </div>
          <div className="teams-info">
            <div className="teams-info__image">
              <img
                src={require("../../assets/images/chuyengia-Trung.jpg")}
                alt=""
              />
            </div>
            <div className="teams-info__title">LÊ TRUNG</div>
            <div className="teams-info__summary">
              <ul>
                <li>CEO & Founder của Beekids, CEO of Hifiveplus</li>
                <li>13 năm kinh nghiệm phát triển ứng dụng và game</li>
                <li>
                  8 năm kinh nghiệm vận hành các dự án phần mềm outsourcing
                </li>
                <li>6 năm kinh nghiệm hỗ trợ tư vấn các doanh nghiệp SME</li>
                <li>Thế mạnh về vận hành doanh nghiệp công nghệ</li>
              </ul>
            </div>
          </div>
          <div className="teams-info">
            <div className="teams-info__image">
              <img
                src={require("../../assets/images/chuyengia-Trung.jpg")}
                alt=""
              />
            </div>
            <div className="teams-info__title">LÊ TRUNG</div>
            <div className="teams-info__summary">
              <ul>
                <li>CEO & Founder của Beekids, CEO of Hifiveplus</li>
                <li>13 năm kinh nghiệm phát triển ứng dụng và game</li>
                <li>
                  8 năm kinh nghiệm vận hành các dự án phần mềm outsourcing
                </li>
                <li>6 năm kinh nghiệm hỗ trợ tư vấn các doanh nghiệp SME</li>
                <li>Thế mạnh về vận hành doanh nghiệp công nghệ</li>
              </ul>
            </div>
          </div>
          <div className="teams-info">
            <div className="teams-info__image">
              <img
                src={require("../../assets/images/chuyengia-Trung.jpg")}
                alt=""
              />
            </div>
            <div className="teams-info__title">LÊ TRUNG</div>
            <div className="teams-info__summary">
              <ul>
                <li>CEO & Founder của Beekids, CEO of Hifiveplus</li>
                <li>13 năm kinh nghiệm phát triển ứng dụng và game</li>
                <li>
                  8 năm kinh nghiệm vận hành các dự án phần mềm outsourcing
                </li>
                <li>6 năm kinh nghiệm hỗ trợ tư vấn các doanh nghiệp SME</li>
                <li>Thế mạnh về vận hành doanh nghiệp công nghệ</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Teams;
