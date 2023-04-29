<template>
  <div class="slider">
    <div class="slider__heading">
      <a href="/" class="slider__heading-title">Бизнес-ланчи в Витебске</a>
      <Carte class="slider__heading-icon" />
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
      :slides-per-view="4"
      :space-between="0"
      :navigation="{
        nextEl: '.slider__heading-next',
        prevEl: '.slider__heading-prev',
      }"
      :modules="modules">
      <SwiperSlide v-for="item in data.items">
        <div class="slider__item slider-item">
          <div class="slider-item__heading">
            <picture>
              <img
                class="slider-item__heading-img"
                v-bind:src="item.image"
                alt=" " />
            </picture>
            <p class="slider-item__heading-name">{{ item.name }}</p>
            <p class="slider-item__heading-info">{{ item.address }}</p>
            <p v-if="item?.time" class="slider-item__heading-info">
              {{ item.time }}
            </p>
          </div>

          <ul class="slider-item__footer">
            <li v-for="element in item.menu" class="slider-item__footer-text">
              {{ element.dish }}
              <span v-if="element.price" class="slider-item__footer-price">{{
                element.price
              }}</span>
            </li>

            <input class="slider__input" v-bind:id="item.id" type="text" />
            <li class="slider-item__price-sum">{{ item.sumPrice }}</li>
          </ul>
          <label v-bind:for="item.id" class="slider__label">
            <a class="slider__link" href="/" />
          </label>
        </div>
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
        console.log(this.$refs.slideImage);
        this.$refs.slideImage.style.transform = `translateX(${this.vel}px)`;
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
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
