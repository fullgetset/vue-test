<style lang="scss">
@import "./slider.scss";
</style>

<template>
  <div class="slider">
    <div class="slider__heading">
      <h2 class="slider__heading-title">Бизнес-ланчи в Витебске</h2>
      <Carte class="slider__heading-icon" />
    </div>
    <swiper
      :slides-per-view="4"
      :space-between="0"
      :navigation="true"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <SwiperSlide v-for="item in data.items">
        <div class="slider__item">
          {{ item.name }}
        </div>
      </SwiperSlide>
      <DownLoad class="slider__background-image" />
    </swiper>
    <button @click="swiper.onSlideNext()">Slide to the next slide</button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "swiper/vue";
import { Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";

import data from "../../data/slider-data";

import Carte from "../icons/carte.svg";
import DownLoad from "../icons/download.svg";

export default {
  data() {
    return {
      data,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Carte,
    DownLoad,
  },
  setup() {
    const swiper = useSwiper();

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = (swiper) => {
      console.log(swiper);
    };

    const onSlideNext = (swiper) => {
      console.log(1);
    };
    return {
      swiper,
      onSwiper,
      onSlideChange,
      onSlideNext,
      modules: [Navigation],
    };
  },
};
</script>
