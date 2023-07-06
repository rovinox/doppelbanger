import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import BannerCard from "./BannerCard";
function LandingBanner({ items }) {
  return (
    <Carousel height={500}>
      {items?.length &&
        items.map((item, i) => <BannerCard key={i} {...item} />)}
    </Carousel>
  );
}

export default LandingBanner;
