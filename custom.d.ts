import Swiper from "swiper";

declare global {
    interface Window {
        Swiper: typeof Swiper;
        SwiperModules: any;
    }
}
export {};
