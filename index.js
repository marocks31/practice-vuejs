var App = {
  data: function () {
    return {
      message: "Hello from JavaScript",
      name: "Katherine",
      age: 99,
      date: "6-9-1900",
      count: 0,
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Hello world";
    },
  },
};

Vue.createApp(App).mount("#app");
