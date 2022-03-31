import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import CartUser from "../CartUser";

import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";


export default function Slider({ users, userId, handlerChange }) {
    return (
        <div className="slider-wrapper">
            <div className="slider-wrapper__img"/>
            <div className="swiper-navigation">
                <div className="prev"/>
                <div className="next"/>
            </div>
            <Swiper
                slidesPerView={Math.floor(window.innerWidth / 330)}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                }}
                allowTouchMove={false}
                modules={[Navigation, FreeMode]}
                className="mySwiper"
            >
                {users.map(user =>
                    <SwiperSlide key={user.id}>
                        <CartUser user={user} userId={userId} handlerChange={handlerChange} />
                    </SwiperSlide>)}
            </Swiper>
        </div>
    );
}
