import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import BannerCard from "./BannerCard";
function LandingBanner({ items }) {
  return (
    <>
      {items?.length &&
       <BannerCard  {...items[0]} />}
    </>
  );
}

export default LandingBanner;
