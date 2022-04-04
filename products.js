/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Welcome kids from 0 to 122 years old!",
      showAbout: true,
      toys: ["Race Cars", "Barbies", "Slime", "Soccer Balls"],
      newToys: "",
    };
  },
  methods: {
    indexProduct: function () {
      axios.get("http://localhost:3000/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    addNewToys: function () {
      axios.post("http://localhost:3000/products").then((response) => {
        this.toys.push(this.newToys);
        this.newToys = "";
      });
    },
  },
};

Vue.createApp(App).mount("#app");
