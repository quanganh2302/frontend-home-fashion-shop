import React, { useState, useEffect } from "react";
import styles from "../../styles";
import Facebook from "../../assets/FacebookIcon";
import Instagram from "../../assets/InstagramIcon";
import Pinterest from "../../assets/Pinterest";
import Twitter from "../../assets/TwitterIcon";
import ArrowDown from "../../assets/ArrowDown";
import { LANGUAGE, CURRENCY } from "../../utils/constant";
import "./TopBar.scss";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../../store/Home/actions/actionTypes";
import DropDown from "../DropDown/DropDown"
import { FormattedMessage } from "react-intl";
const TopBar = () => {
  // const { language } = useSelector((state) => ({
  //   language: state.homeReducer,
  // }));
  useEffect(() => {
    // console.log("check useEffect non dependence", isClickedCurrency);
  });
  const [isClickedLang, setIsClickedLang] = useState(false);
  const [isClickedCurrency, setIsClickedCurrency] = useState(false);

  const [lang, setLang] = useState(LANGUAGE.EN);
  const [currency, setCurrency] = useState(CURRENCY.USD);

  const dispatch = useDispatch();
  const handleChangeLanguage = () => {
    setIsClickedLang(!isClickedLang);
  };
  const changeLanguage = (lang) => {
    dispatch({ type: actionTypes.CHANGE_LANGUAGE, payload: lang });
    setIsClickedLang(!isClickedLang);
    setLang(lang);
  };
  const changeCurrency = (currency) => {
    dispatch({ type: actionTypes.CHANGE_CURRENCY, payload: currency });
    setIsClickedCurrency(!isClickedCurrency);
    setCurrency(currency);
  };

  return (
    <section
      className={`topBar ${styles.flexSpace} bg-topBarBgColor text-white min-h-[43px] px-[80px]`}
    >
      <div className="topBar-left flex gap-x-4">
        <Facebook className="facebook" />
        <Instagram className="instagram" />
        <Twitter className="twitter" />
        <Pinterest className="pinterest" />
      </div>
      <div className="topBar-center font-poppins text-para2 font-normal">
        {/* <FormattedMessage id="top-bar.title"/> */}
        <span className={`text-[#FF0000] ms-1`}>10OFF</span>
      </div>
      <div
        className={`topBar-right text-para2 font-normal ${styles.flexSpace} gap-4`}
      >
        <div className="wrap-lang relative">
          <button
            className="lang flex items-center gap-1"
            onClick={() => handleChangeLanguage(LANGUAGE.EN)}
          >
            <span>{lang === LANGUAGE.EN ? "English" : "Vietnamese"}</span>
            <ArrowDown className="arrD" />
          </button>
          <div
            className={
              isClickedLang
                ? "block popup-lang box-shadow"
                : "hidden popup-lang box-shadow"
            }
          >
            <button
              className={lang && lang === LANGUAGE.EN ? "text-[#ff8421]" : ""}
              onClick={() => changeLanguage(LANGUAGE.EN)}
            >
              EngLish
            </button>
            <button
              className={lang && lang === LANGUAGE.VI ? "text-[#ff8421]" : ""}
              onClick={() => changeLanguage(LANGUAGE.VI)}
            >
              Vietnamese
            </button>
          </div>
        </div>
        <div className="wrap-flag relative">
          <button
            className={`flag  ${styles.flexSpace} gap-1`}
            onClick={() => setIsClickedCurrency(!isClickedCurrency)}
          >
            {currency === CURRENCY.USD ? (
              <>
                <img src="https://flagcdn.com/w20/gb.png" alt="" />
                <span>USD</span>
              </>
            ) : (
              <>
                <img src="https://flagcdn.com/w20/vn.png" alt="" />
                <span>VND</span>
              </>
            )}
            <ArrowDown className="arrD" />
          </button>
          <div
            className={
              isClickedCurrency
                ? "block popup-flag box-shadow"
                : "hidden popup-flag box-shadow"
            }
          >
            <button
              className={
                currency && currency === CURRENCY.USD
                  ? "text-[#ff8421] block flex items-center gap-2"
                  : " block flex items-center gap-2"
              }
              onClick={() => changeCurrency(CURRENCY.USD)}
            >
              <img src="https://flagcdn.com/w20/gb.png" alt="" />
              <span
                className={currency === CURRENCY.USD ? "text-[#ff8421] " : ""}
              >
                USD
              </span>
            </button>
            <button
              className={
                currency && currency === CURRENCY.VND
                  ? "text-[#ff8421] block flex items-center gap-2 pt-2 "
                  : "  pt-2 block flex items-center gap-2"
              }
              onClick={() => changeCurrency(CURRENCY.VND)}
            >
              <img src="https://flagcdn.com/w20/vn.png" alt="" />
              <span
                className={currency === CURRENCY.VND ? "text-[#ff8421] " : ""}
              >
                VND
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
