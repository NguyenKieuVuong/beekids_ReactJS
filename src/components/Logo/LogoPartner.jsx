import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
const options = {
  loop: false,
  margin: 20,
  autoplay: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 1,
    },
    1200: {
      items: 2,
    },
  },
};
function ItemBrand(props) {
  return (
    <>
      <div class="item">
        <div class="brand-thumb">
          <Link to={props.link}>
            <img class="img-thumb" src={props.image} alt={props.title} />
          </Link>
        </div>
      </div>
    </>
  );
}

function LogoPartner() {
  return (
    <>
      <section class="section-logo pb-96px">
        <div class="container -wide">
          <div id="brand-slide">
            <OwlCarousel className="owl-theme" {...options}>
              <ItemBrand
                link="#"
                title="Dragold"
                image={require("../../assets/images/logo-dragold.png")}
              />
              <ItemBrand
                link="https://hifiveplus.vn/"
                title="HifivePlus"
                image={require("../../assets/images/logo-hifive.png")}
              />
              <ItemBrand
                title=" "
                image={require("../../assets/images/logo-MNPedu.png")}
              />
              <ItemBrand
                link="#"
                title="Sparta"
                image={require("../../assets/images/logo-sparta.png")}
              />
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogoPartner;
