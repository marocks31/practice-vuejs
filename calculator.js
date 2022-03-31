var App = {
  data: function () {
    return {
      message: "Calculator",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0,
      product: 0,
      dinosaurs: ["Rosie", "Coco", "Petunia"],
    };
  },
  methods: {
    computedSum() {
      this.sum = Number(this.number1) + Number(this.number2) + Number(this.number3);
    },
    computedProduct() {
      this.product = Number(this.number1) * Number(this.number2) * Number(this.number3);
    },
  },
};

Vue.createApp(App).mount("#app");
