import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.scss";
import { FormattedMessage } from "react-intl";
const BannerHome = () => {
  const [activeSlide, setActiveSlide] = useState("");
  let settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };
  return (
    <section className="banner-home font-poppins">
      {" "}
      <Slider {...settings}>
        <div className="slider-item1">
        <div className={`slider-content`}>
        <div className="slider-content-info">
          <FormattedMessage id="banner.info-1"/>
        </div>
        <div className="slider-content-call">
          <FormattedMessage id="banner.call-1"/>
        </div>
        <div className="slider-content-nav">
          <FormattedMessage id="banner.nav-1" />
        </div>
      </div>
        </div>
        <div className="slider-item2">
        <div className={`slider-content`}>
        <div className="slider-content-info">
          <FormattedMessage id="banner.info-2"/>
        </div>
        <div className="slider-content-call">
          <FormattedMessage id="banner.call-2"/>
        </div>
        <div className="slider-content-nav">
          <FormattedMessage id="banner.nav-2" />
        </div>
      </div>
        </div>
        <div className="slider-item3">
        <div className={`slider-content`}>
        <div className="slider-content-info">
          <FormattedMessage id="banner.info-3"/>
        </div>
        <div className="slider-content-call">
          <FormattedMessage id="banner.call-3"/>
        </div>
        <div className="slider-content-nav">
          <FormattedMessage id="banner.nav-3" />
        </div>
      </div>
        </div>
      </Slider>
    </section>
  );
};

export default BannerHome;
