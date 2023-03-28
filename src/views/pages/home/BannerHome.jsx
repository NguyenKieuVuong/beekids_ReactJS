import React from "react";
//import Skill from "./Skill";
import IconSkillOne from "../../../assets/images/ico-skill-1.png";
import IconSkillTwo from "../../../assets/images/ico-skill-2.png";
import IconSkillThree from "../../../assets/images/ico-skill-3.png";
import IconSkillFour from "../../../assets/images/ico-skill-4.png";
import IconSkillFive from "../../../assets/images/ico-skill-5.png";
import IconSkillSix from "../../../assets/images/ico-skill-6.png";
import IconSkillSeven from "../../../assets/images/ico-skill-7.png";
import IconSkillEight from "../../../assets/images/ico-skill-8.png";
import storeApple from "../../../assets/images/store-apple.png";
import storeAndroid from "../../../assets/images/store-android.png";
import storeWeb from "../../../assets/images/app-website.png";
import iconButton from "../../../assets/images/icon-video.png";
import { Link } from "react-router-dom";
function Skill(props) {
  return (
    <div className="skill-item">
      <div className="skill-item-main">
        <div className="skill-item-main__icon">
          <img src={props.icon} alt="" />
        </div>
        <div className="skill-item-main__title">{props.title}</div>
      </div>
    </div>
  );
}

const BannerHome = () => {
  return (
    <section id="home-header" className="-bg-img-6">
      <div className="container -wide">
        <div className="row">
          <div className="col-sm-12 ">
            <div
              className="header-content"
              data-aos="fade-down"
              data-aos-delay="50"
            >
              <h2 className="header-content__title">
                Nền tảng
                <span>
                  kết nối học tập
                  <br />
                  và phát triển tư duy
                </span>
                cho Trẻ từ 4 - 10
              </h2>
              <p className="header-content__title-sub">
                Đến với <b>BEEKIDS</b>, trẻ phát triển nhiều kỹ năng cần thiết
                cho bản thân
              </p>
              <div className="skill-list">
                <Skill icon={IconSkillOne} title="Quan sát"></Skill>
                <Skill icon={IconSkillTwo} title="Ghi nhớ"></Skill>
                <Skill icon={IconSkillThree} title="Suy luận"></Skill>
                <Skill icon={IconSkillFour} title="Biện luận"></Skill>
                <Skill icon={IconSkillFive} title="Logic"></Skill>
                <Skill icon={IconSkillSix} title="Số học"></Skill>
                <Skill icon={IconSkillSeven} title="Tài chính"></Skill>
                <Skill icon={IconSkillEight} title="Ngôn ngữ"></Skill>
              </div>
              <div className="content-2">
                <div className="button-list">
                  <div className="logos-inline mb-3">
                    <Link
                      to="https://play.google.com/store/apps/details?id=com.dragold.bkids"
                      target="_blank"
                      className="logo-image "
                    >
                      <img className="" alt="android" src={storeAndroid} />
                    </Link>
                    <Link
                      to="https://apps.apple.com/vn/app/bkids/id1534126323"
                      target="_blank"
                      className="logo-image "
                    >
                      <img className="" alt="apple" src={storeApple} />
                    </Link>
                    <Link
                      to="https://bkids.edu.vn/"
                      target="_blank"
                      className="logo-image "
                    >
                      <img className="" alt="Website" src={storeWeb} />
                    </Link>

                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#modalVideo"
                      data-modal="modalYoutube"
                      data-video="https://www.youtube.com/embed/Cw111KXOny4"
                      className="btn btn-video"
                    >
                      <img src={iconButton} alt="" />
                      Xem video Beekids
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
