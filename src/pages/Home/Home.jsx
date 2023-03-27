import React from "react";

import Advantage from "../../views/pages/home/Advantage";
import CourseFavorite from "../../views/pages/home/CourseFavorite";
import Distinctive from "../../views/pages/home/Distinctive";
import BannerHome from "../../views/pages/home/BannerHome";
import Reality from "../../views/pages/home/Reality";
import Result from "../../views/pages/home/Result";
import ReviewHome from "../../components/Reviews/ReviewHome";
import SolutionForChild from "../../views/pages/home/SolutionForChild";
import SolutionGamification from "../../views/pages/home/SolutionGamification";
import Teams from "../../views/pages/home/Teams";
import Vision from "../../views/pages/home/Vision";
import Wish from "../../views/pages/home/Wish";
function Home() {
  return (
    <>
      <BannerHome />
      <Vision />
      <Reality />
      <Wish />
      <SolutionForChild />
      <SolutionGamification />
      <Advantage />
      <Distinctive />
      <Result />
      <CourseFavorite />
      <Teams />
      <ReviewHome />
    </>
  );
}

export default Home;
