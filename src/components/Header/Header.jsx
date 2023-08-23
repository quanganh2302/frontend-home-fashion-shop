import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import styles from "../../styles";
import Logo from "../../assets/logo";
import { BiUser, BiSearch, BiMenu } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import ArrowNext from "../../assets/ArrowNext";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const popupMenu = useRef(null);
  const popupSearch = useRef(null);
  const popupCart = useRef(null);
  const handlePopupMenu = () => {
    setTimeout(() => {
      setIsOpenMenu(!isOpenMenu);
    }, 100);
  };
  const handlePopupSearch = () => {
    setTimeout(() => {
      setIsOpenSearch(!isOpenSearch);
    }, 100);
  };
  const handlePopupCart = () => {
    setTimeout(() => {
      setIsOpenCart(!isOpenCart);
    }, 100);
  };

  useEffect(() => {
    if (isOpenMenu || isOpenSearch || isOpenCart) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu, isOpenSearch, isOpenCart]);

  const handleClickOutside = (e) => {
    if (
      popupMenu.current &&
      !popupMenu.current.contains(e.target) &&
      popupSearch.current &&
      !popupSearch.current.contains(e.target) &&
      popupCart.current &&
      !popupCart.current.contains(e.target)
    ) {
      setIsOpenMenu(false);
      setIsOpenSearch(false);
      setIsOpenCart(false);
    }
    return;
  };
  const lang = useSelector((state) => state.homeReducer.language);

  return (
    <header className={"header "}>
      <div className="header-content relative">
        {/* // Wrap header -------------------------------------- */}
        <div
          className={`header-top md:px-[95px] px-[15px] flex items-center justify-between `}
        >
          {/* //Header top left------------------------------ */}
          <div
            className={`header-top-left  w-1/3 flex items-center justify-start text-para4 font-poppins font-medium min-h-[70px] `}
          >
            <div
              className={`header-women uppercase cursor-pointer hidden md:flex`}
            >
              <a className="women-nav" href="#">
                <FormattedMessage id="header.women" />
              </a>
              <div
                className={`popup-women box-shadow-popup hidden justify-around p-[30px]`}
              >
                <div className="popup-item text-para3 font-light">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">Ao</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light ">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">Ao</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item  text-para3 font-light">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">Ao</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">Ao</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`header-men uppercase cursor-pointer hidden md:flex`}
            >
              <a className="man-nav" href="#">
                <FormattedMessage id="header.men" />
              </a>
              <div
                className={`popup-men box-shadow-popup hidden justify-around p-[30px]`}
              >
                <div className="popup-item text-para3 font-light">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">Ao men</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light ">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">Ao</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item  text-para3 font-light">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">Ao</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">Ao</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`header-bag uppercase cursor-pointer hidden md:flex`}
            >
              <a className="bag-nav" href="#">
                <FormattedMessage id="header.bag" />
              </a>
              <div
                className={`popup-bag box-shadow-popup hidden justify-around p-[30px]`}
              >
                <div className="popup-item text-para3 font-light">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">tui</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light ">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">Ao</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item  text-para3 font-light">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">Ao</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
                <div className="popup-item text-para3 font-light">
                  <h3 className={` pb-4 font-medium`}>
                    <a href="#">Ao</a>
                  </h3>
                  <ul>
                    <li className={`pb-2`}>
                      <a href="#">Áo phông</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo polo</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo sơ mi</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo len</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Something</a>
                    </li>
                    <li className={`pb-2`}>
                      <a href="#">Áo có mũ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`header-about uppercase cursor-pointer hidden md:flex`}
            >
              <a className="about-nav" href="#">
                <FormattedMessage id="header.about" />
              </a>
            </div>
            <div
              className={`header-menu block md:hidden`}
              onTouchStart={handlePopupMenu}
            >
              <BiMenu />
            </div>
          </div>
          {/* // Header top middle ---------------------------------- */}
          <div className="header-top-middle w-1/3 flex justify-center">
            {/* <Logo className="header-logo w-[30px]" /> */}
            <img
              src={require("../../assets/lux-logo.png")}
              alt=""
              className={`w-[80px] cursor-pointer`}
            />
          </div>
          {/* //Header top right ----------------------------------- */}
          <div className={`header-top-right w-1/3`}>
            <div className="header-top-right-icon  flex items-center justify-end px-[15px]">
              <div className="header-icon">
                <BiSearch
                  className={` text-[26px] cursor-pointer`}
                  onTouchStart={handlePopupSearch}
                  onClick={handlePopupSearch}
                />
              </div>
              <div className="header-icon hidden md:block">
                {" "}
                <BiUser className={`text-[26px] cursor-pointer `} />
              </div>
              <div className="header-icon hidden md:block">
                {" "}
                <FiHeart className={`text-[26px] cursor-pointer `} />
                <div className="header-count">0</div>
              </div>
              <div
                className="header-icon"
                onTouchStart={handlePopupCart}
                onClick={handlePopupCart}
              >
                {" "}
                <BsCartPlus className={`text-[26px] cursor-pointer`} />
                <div className="header-count">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-popup">
        {/*Overlay to close popup while click this-------------- */}
        <div
          className={
            isOpenMenu || isOpenSearch || isOpenCart
              ? "header-overlay block z-0"
              : "hidden z-0"
          }
          // onTouchStart={handleClickOutside}
          // onClick={handleClickOutside}
        ></div>
        {/* // Popup of menu --------------------------- */}
        <div
          ref={popupMenu}
          className={isOpenMenu ? "menu-popup active-open-menu" : "menu-popup"}
        >
          <div className="menu-popup-top flex justify-between items-center">
            <div className="menu-top-left w-1/3"></div>
            <div className="menu-top-center w-1/3 flex items-center justify-center">
              <img
                src={require("../../assets/lux-logo.png")}
                alt="logo"
                className="w-[80px]"
              />
            </div>
            <div className="menu-top-right w-1/3">
              <div
                className="icon-close flex justify-end items-center"
                onTouchStart={handlePopupMenu}
              >
                <GrClose />
              </div>
            </div>
          </div>
          <div className="menu-popup-nav">
            <div className="nav-item flex justify-between">
              <div className="item-left">Nữ</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
            <div className="nav-item flex justify-between">
              {" "}
              <div className="item-left">Nam</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
            <div className="nav-item flex justify-between">
              <div className="item-left">Giày</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
            <div className="nav-item flex justify-between">
              <div className="item-left">New product</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
            <div className="nav-item flex justify-between">
              <div className="item-left">Best sale</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
            <div className="nav-item flex justify-between">
              <div className="item-left">About</div>
              <div className="item-right">
                <ArrowNext />
              </div>
            </div>
          </div>
        </div>
        {/* //Header popup cart -------------------------------- */}
        <div
          ref={popupCart}
          className={
            isOpenCart
              ? "header-popup-cart active-open-cart"
              : " header-popup-cart"
          }
        >
          <div className="cart-title flex justify-start items-center uppercase">
            <FormattedMessage id="header.shopping-cart" />
          </div>
          <div className="product-list"></div>
        </div>
        {/* //Header popup search -------------------------------- */}
        <div
          ref={popupSearch}
          className={
            isOpenSearch
              ? "header-popup-search active-open-search"
              : " header-popup-search"
          }
        >
          <div className="search-area flex justify-start items-center">
            <BiSearch className="w-[20%]" />
            <input
              className="w-[80%]"
              type="text"
              name="search"
              placeholder={lang && lang === "en" ? "Search" : "Tìm kiếm"}
            />
          </div>
          <div className="product-list"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
