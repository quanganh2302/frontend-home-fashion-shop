import React from "react";
import "./Testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { BsFillStarFill } from "react-icons/bs";
const Testimonial = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-container container-custom">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div className="wrap-testimonial">
              <div className="testimonial-content">
                <h3>From The People</h3>
                <div className="wrap-start">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </div>
                <p className="comment">
                  “Very cute dress and fun color. I am also very
                  <span></span>
                  <br />
                  impressed by the quality of the linen. Excited to wear this
                  dress in the summer!”
                </p>
                <div className="testimonial-name">Jesicca A.</div>
              </div>
              <div className="testimonial-image">
                <div
                  className="testimonial-images"
                  // style={{ backgroundImage: `url(${Background})` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrap-testimonial">
              <div className="testimonial-content">
                <h3>From The People</h3>
                <div className="wrap-start">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </div>
                <p className="comment">
                  “Very cute dress and fun color. I am also very
                  <br />
                  impressed by the quality of the linen. Excited to wear this
                  dress in the summer!”
                </p>
                <div className="testimonial-name">Jesicca A.</div>
              </div>
              <div className="testimonial-image">
                <div
                  className="testimonial-images"
                  // style={{ backgroundImage: `url(${Background})` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrap-testimonial">
              <div className="testimonial-content">
                <h3>From The People</h3>
                <div className="wrap-start">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </div>
                <p className="comment">
                  “Very cute dress and fun color. I am also very
                  <br />
                  impressed by the quality of the linen. Excited to wear this
                  dress in the summer!”
                </p>
                <div className="testimonial-name">Jesicca A.</div>
              </div>
              <div className="testimonial-image">
                <div
                  className="testimonial-images"
                  // style={{ backgroundImage: `url(${Background})` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
