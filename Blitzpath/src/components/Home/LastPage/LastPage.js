import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./LastPage.module.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./LastPage.module.css";

import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { swipeMove } from "react-slick/lib/utils/innerSliderUtils";
const LastPage = ({ width }) => {
  return (
    <>
      {" "}
      <div className={styles.heading}>
        <h1>Customer Stories</h1>
      </div>
      <div className={styles.containerstories}>
        <div className={styles.container}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={`${width > 768 ? "4" : "3"}`}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, EffectCoverflow, Pagination]}
            className={styles.swiper}
          >
            <SwiperSlide className={styles.sliderElement}>
              <div>
                <div
                  className={styles.sliderElementDiv}
                  style={{
                    background:
                      "url(https://swiperjs.com/demos/images/nature-1.jpg)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderElement}>
              <div>
                <div
                  className={styles.sliderElementDiv}
                  style={{
                    background:
                      "url(https://swiperjs.com/demos/images/nature-2.jpg)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderElement}>
              <div>
                <div
                  className={styles.sliderElementDiv}
                  style={{
                    background:
                      "url(https://swiperjs.com/demos/images/nature-3.jpg)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderElement}>
              <div>
                <div
                  className={styles.sliderElementDiv}
                  style={{
                    background:
                      "url(https://swiperjs.com/demos/images/nature-4.jpg)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderElement}>
              <div>
                <div
                  className={styles.sliderElementDiv}
                  style={{
                    background:
                      "url(https://swiperjs.com/demos/images/nature-5.jpg)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderElement}>
              <div>
                <div
                  className={styles.sliderElementDiv}
                  style={{
                    background:
                      "url(https://swiperjs.com/demos/images/nature-6.jpg)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderElement}>
              <div>
                <div
                  className={styles.sliderElementDiv}
                  style={{
                    background:
                      "url(https://swiperjs.com/demos/images/nature-7.jpg)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderElement}>
              <div>
                <div
                  className={styles.sliderElementDiv}
                  style={{
                    background:
                      "url(https://swiperjs.com/demos/images/nature-8.jpg)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.sliderElement}>
              <div>
                <div
                  className={styles.sliderElementDiv}
                  style={{
                    background:
                      "url(https://swiperjs.com/demos/images/nature-9.jpg)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LastPage;
