import React from "react";
import "./Card-item.scss";
import HeartIcon from "../../assets/HeartIcon";
import { BsEye, BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openPopup } from "../../store/Home/thunk";

const CardItem = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const handleOpenPopup = () => {
    dispatch(openPopup());
  };

  let color = "red";
  return (
    <section className={`card-item ${className}`}>
      <div className="wrap-item">
        <div className="warp-image">
          <div className="item-image"></div>
          <div className="item-quick-view" onClick={handleOpenPopup}>
            <p>Quick view</p>
            <BsEye className="icon-view" />
          </div>
          <div className="item-quick-shop">
            <p> Quick Shop</p>
            <BsCartPlus className="icon-view" />
          </div>
          <div className="item-chose-size">M,L,Xl</div>
          <div className="wrap-heart-icon">
            <HeartIcon className="heart-icon" />
          </div>
        </div>
        <div className="item-details">
          <div className="item-name">Ultimate Crop Bandeau Tops</div>
          <div className="item-price">$89.00</div>
          <div className="item-colors flex justify-start items-center gap-3">
            <div
              className="color"
              style={{ backgroundColor: `${color}` }}
            ></div>
            <div className={`color`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardItem;
