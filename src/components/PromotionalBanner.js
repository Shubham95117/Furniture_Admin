import React from "react";
import "./PromotionalBanner.css";
import offerImg from "../components/Assets/OfferImg.webp"; // Import the image directly

const PromotionalBanner = () => {
  return (
    <div className="promotional-banner">
      <img src={offerImg} alt="No Cost EMI" />
    </div>
  );
};

export default PromotionalBanner;
