import { NavLink, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
function Header() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  const [stickMenu, setStickMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        setShowButton(true);
        setStickMenu(true);
      } else {
        setShowButton(false);
        setStickMenu(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {showButton && (
        <button
          type="button"
          onClick={scrollToTop}
          id="return-to-top"
          title="Scroll to Top"
        >
          <i className="fa fa-angle-up"></i>
        </button>
      )}

      <section className={stickMenu ? "header-style2 scroll" : "header-style2"}>
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

              <Nav className="menu-cart">
                <Link className="nav-link icons-btn course" to="/gio-hang">
                  <span className="icon icofont icofont-shopping-cart"></span>
                  <span className="number total-count-event">0</span>
                </Link>
              </Nav>
              <button
                type="button"
                className="btn btn-pill btn-lg btn-beekids"
                onClick={handleShow}
              >
                Đăng nhập
              </button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button className="btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn-primary" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
