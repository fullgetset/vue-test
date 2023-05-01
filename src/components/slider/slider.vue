<template>
  <div class="slider">
    <div class="slider__heading">
      <a href="/" class="slider__heading-title">Бизнес-ланчи в Витебске</a>
      <a class="slider__icon-link" href="/">
        <Carte class="slider__heading-icon" />
      </a>
      <div class="slider__heading-btns">
        <button @click="nextSlide" class="slider__heading-prev">
          <span class="slider__next-arrow" />
        </button>
        <button @click="prevSlide" class="slider__heading-next">
          <span class="slider__prev-arrow" />
        </button>
      </div>
    </div>
    <swiper
      :breakpoints="{
        280: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1220: { slidesPerView: 4 },
      }"
      :space-between="0"
      :simulate-touch="false"
      :navigation="{
        nextEl: '.slider__heading-next',
        prevEl: '.slider__heading-prev',
      }"
      :modules="modules">
      <SwiperSlide class="slider__slide" v-for="item in data.items">
        <Slide
          :name="item.name"
          :address="item.address"
          :time="item.time"
          :image="item.image"
          :menu="item.menu"
          :sumPrice="item.sumPrice" />
      </SwiperSlide>
      <div class="slider__background-image" ref="slideImage" />
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

import "swiper/scss";

import data from "../../data/slider-data";
import Carte from "../icons/carte.svg";
import DownLoad from "../icons/download.svg";
import Slide from "../slide/slide.vue";

export default {
  data() {
    return {
      data,
      vel: 0,
      nextSlide: () => {
        this.vel += 60;
        this.$refs.slideImage.style.transform = `translateX(${this.vel}px)`;
      },
      prevSlide: () => {
        this.vel -= 60;
        this.$refs.slideImage.style.transform = `translateX(${this.vel}px)`;
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Slide,
    Carte,
    DownLoad,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss">
@import "./slider.scss";
</style>
