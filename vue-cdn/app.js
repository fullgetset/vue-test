const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      fanc: () => console.log(1),
    };
  },
}).mount("#app");
