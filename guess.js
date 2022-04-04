var App = {
  data: function () {
    return {
      message: "",
      correctNumber: 27,
      guess: null,
    };
  },
  methods: {
    createGuess: function () {
      if (parseInt(this.guess) > this.correctNumber) {
        this.message = "Too high!";
      } else if (parseInt(this.guess) < this.correctNumber) {
        this.message = "Too low!";
      } else if (parseInt(this.guess) === this.correctNumber) {
        this.message = "Correct!";
      }
    },
    playAgain: function () {
      this.message = "";
      this.guess = null;
      this.correctNumber = 1 + Math.floor(Math.random() * Math.floor(100));
      console.log(this.correctNumber);
    },
  },
};

Vue.createApp(App).mount("#app");
