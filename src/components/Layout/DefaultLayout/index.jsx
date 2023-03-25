import Header from "./Header";
import Footer from "./Footer";
function DefaultLayout({ Children }) {
  return (
    <>
      <Header></Header>
      <>{Children}</>
      <Footer></Footer>
    </>
  );
}

export default DefaultLayout;
