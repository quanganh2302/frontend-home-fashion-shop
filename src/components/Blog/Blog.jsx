import React, { useRef } from "react";
import "./Blog.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { BsFillStarFill } from "react-icons/bs";

const Blog = () => {
  // const sliderRef = useRef(null);
  // const handleClick = () => {
  //   console.log(sliderRef.current);
  // };
  return (
    <section className="blog">
      <div className="blog-container container-custom">
        <h3 className="blog-title">From our blog</h3>
        <div className="blog-slide">
          <Swiper
            spaceBetween={50}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              380: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1060: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="blog-slide-item">
                <div className="wrap-image">
                  <div className="image"></div>
                </div>
                <div className="wrap-text">
                  <p className="tag-item">
                    <span>
                      <a href="">jean</a>
                    </span>
                    <span>,</span>
                    <span>
                      <a href="">skirt</a>
                    </span>
                  </p>
                  <h3>Christine Is A True Style Icon</h3>
                  <a className="read-more" href="">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-slide-item">
                <div className="wrap-image">
                  <div className="image"></div>
                </div>
                <div className="wrap-text">
                  <p className="tag-item">
                    <span>
                      <a href="">jean</a>
                    </span>
                    <span>,</span>
                    <span>
                      <a href="">skirt</a>
                    </span>
                  </p>
                  <h3>Christine Is A True Style Icon</h3>
                  <a className="read-more" href="">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-slide-item">
                <div className="wrap-image">
                  <div className="image"></div>
                </div>
                <div className="wrap-text">
                  <p className="tag-item">
                    <span>
                      <a href="">jean</a>
                    </span>
                    <span>,</span>
                    <span>
                      <a href="">skirt</a>
                    </span>
                  </p>
                  <h3>Christine Is A True Style Icon</h3>
                  <a className="read-more" href="">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-slide-item">
                <div className="wrap-image">
                  <div className="image"></div>
                </div>
                <div className="wrap-text">
                  <p className="tag-item">
                    <span>
                      <a href="">jean</a>
                    </span>
                    <span>,</span>
                    <span>
                      <a href="">skirt</a>
                    </span>
                  </p>
                  <h3>Christine Is A True Style Icon</h3>
                  <a className="read-more" href="">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
