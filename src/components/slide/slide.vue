<template>
  <div class="slider__item slide">
    <div class="slide__heading">
      <picture>
        <img class="slide__heading-img" v-bind:src="image" alt=" " />
      </picture>
      <p class="slide__heading-name">{{ name }}</p>
      <p class="slide__heading-info">{{ address }}</p>
      <p v-if="time" class="slide__heading-info">
        {{ time }}
      </p>
      <a class="slider__heading-link" href="/" />
    </div>

    <ul class="slide__footer">
      <li v-for="element in menu" class="slide__footer-text">
        {{ element.dish }}
        <span v-if="element.price" class="slide__footer-price">{{
          element.price
        }}</span>
      </li>

      <li class="slide__price-sum">{{ sumPrice }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    time: String,
    image: {
      type: String,
      required: true,
    },
    menu: {
      type: Array,
      required: true,
    },
    sumPrice: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "./slide.scss";
</style>
