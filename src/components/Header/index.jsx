import { NavLink, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/logo.png";

function Header() {
  // const MenuScroll = () => {
  //   window.addEventListener("scroll", (event) => {
  //     if ${window.scrollTop} >=1 && 'scroll' : ""
  //     //output.textContent = `scrollTop: ${window.scrollTop}`;
  //   });
  //   window.scroll(function () {
  //     if (this.scrollTop() >= 20) {
  //       // If page is scrolled more than 50px
  //       ".header-style2".addClass("scroll");
  //       "#return-to-top".fadeIn(200); // Fade in the arrow
  //     } else {
  //       ".header-style2".removeClass("scroll");
  //       "#return-to-top".fadeOut(200); // Else fade out the arrow
  //     }
  //   });
  // };
  //const scroller = document.querySelector("#scroller");
  //const output = document.querySelector("#output");

  return (
    <>
      <section className="header-style2 {}">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand to="/">
              <img src={Logo} className="logo" alt="React Bootstrap logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link" to="/">
                  Về Beekids
                </NavLink>
                <NavLink className="nav-link" to="/cuoc-thi">
                  Cuộc Thi
                </NavLink>
                <NavLink className="nav-link" to="/khoa-hoc">
                  Khóa học
                </NavLink>
                <NavLink className="nav-link" to="/goi-beexu">
                  Gói Beexu
                </NavLink>
                <NavLink className="nav-link" to="/faqs">
                  Câu hỏi thường gặp
                </NavLink>
                <NavLink className="nav-link" to="/dai-su">
                  Đại sứ
                </NavLink>
                <Link
                  className="nav-link btn-clicknow"
                  target={"_blank"}
                  to="https://bkids.edu.vn/"
                >
                  Trải nghiệm ngay
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
}

export default Header;
