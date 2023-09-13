import React, { useState, useEffect, useRef } from "react";
import "./PopupProduct.scss";
import { useSelector, useDispatch } from "react-redux";
import { closePopup } from "../../store/Home/thunk";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import SetQuantity from "../Set-quantity/SetQuantity";
import HeartIcon from "../../assets/HeartIcon";
import { GrClose } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import imageBg1 from "../../assets/Simona-Ribbed-Cardigan_01.jpg";
import imageBg2 from "../../assets/Simona-Ribbed-Cardigan_02.jpg";
import imageBg3 from "../../assets/Simona-Ribbed-Cardigan_03.jpg";
import imageBg4 from "../../assets/Simona-Ribbed-Cardigan_04.jpg";
import imageBg5 from "../../assets/Simona-Ribbed-Cardigan_05.jpg";

const PopupProduct = () => {
  const dispatch = useDispatch();
  let isPopupOpen = useSelector((state) => state.homeReducer.isPopupOpen);
  const [popupStatus, setPopupStatus] = useState();
  const [quantityPopup, setQuantityPopup] = useState(1);

  useEffect(() => {
    setPopupStatus(isPopupOpen);
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPopupOpen]);

  //   useEffect(() => {
  //     if (popupStatus) {
  //       document.addEventListener("mousedown", handleClickOutside);
  //     } else {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     }
  //   }, [popupStatus]);

  const popupUseRef = useRef(null);

  const handleClosePopup = () => {
    if (popupStatus) {
      setPopupStatus(false);
      dispatch(closePopup());
    }
  };
  const handleClickOutside = (e) => {
    if (popupUseRef.current && !popupUseRef.current.contains(e.target)) {
      setPopupStatus(false);
      dispatch(closePopup());
    }
  };
  const decreaseProduct = () => {
    quantityPopup > 0
      ? setQuantityPopup(quantityPopup - 1)
      : setQuantityPopup(0);
  };

  const increaseProduct = () => {
    setQuantityPopup(quantityPopup + 1);
  };

  return (
    <section className={isPopupOpen ? "popup-product" : "hidden"}>
      {" "}
      <div className="popup-wrap" ref={popupUseRef}>
        <div className="popup-left">
          <Swiper
            navigation={true}
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <div
                className="slider-item"
                style={{
                  backgroundImage: `url(${imageBg1})`,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slider-item"
                style={{
                  backgroundImage: `url(${imageBg2})`,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slider-item"
                style={{
                  backgroundImage: `url(${imageBg3})`,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slider-item"
                style={{
                  backgroundImage: `url(${imageBg4})`,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slider-item"
                style={{
                  backgroundImage: `url(${imageBg5})`,
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="popup-right">
          <div className="popup-close" onClick={handleClosePopup}>
            <GrClose />
          </div>
          <div className="popup-top">
            <div className="product-name">Simona Ribbed Cardigan</div>
            <div className="product-price">
              <del>$99.00</del>
              <ins>$86.00</ins>
            </div>
          </div>
          <div className="popup-content">
            <div className="product-desc">
              Description Finally—a white sneaker for the rest of your life.
              Whether you’re walking, working, or simply kicking it, the
              versatile and understated Royale Blanco is going to get you where
              you...
            </div>
            <div className="product-size">
              <p>SIZE: S</p>
              <div className="details-size">
                <div className="size-item">s</div>
                <div className="size-item">m</div>
                <div className="size-item">l</div>
                <div className="size-item">xl</div>
              </div>
            </div>
            <div className="product-buy">
              {/* <div className="buy-left">
                <div className="minus" onClick={decreaseProduct}>
                  -
                </div>
                <div className="quantity">{quantityPopup}</div>
                <div className="plus" onClick={increaseProduct}>
                  +
                </div>
              </div> */}
              <SetQuantity className="buy-left" />
              <div className="buy-right">add to cart</div>
            </div>
            <div className="product-wishlist">
              <div className="wishlist-icon">
                <HeartIcon className="heart-icon" />
              </div>
              <span>add to wishlist</span>
            </div>
          </div>
          <div className="popup-footer">
            View full details{" "}
            <span>
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
      <div className="popup-overlay" onClick={handleClickOutside}></div>
    </section>
  );
};

export default PopupProduct;
