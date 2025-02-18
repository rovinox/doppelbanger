import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./storeInfoPicture.css";
import ServiceTypeSelectorButtons from "../ServiceType/ServiceTypeSelectorButtons";
import ServiceTypeSelector from "../ServiceType/ServiceTypeSelector";

export default function StoreInfoPicture() {
  const image =
    "https://cdn2.picryl.com/photo/1988/12/01/good-food-display-nci-visuals-online-bb10ce-1024.jpg";
  const nameOFStore = "Big Apple's Fried & Fresh";
  const location = "202 Belcher Rd N, Largo, FL 33771";
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{nameOFStore}</h1>
        <p className="hero-subtitle">
          {" "}
          <LocationOnIcon />
          {location}
        </p>
        <ServiceTypeSelector />
      </div>
    </div>
  );
}
