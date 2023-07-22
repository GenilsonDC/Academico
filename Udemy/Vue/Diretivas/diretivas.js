new Vue({
  el: "#app",
  data: {
    perfil: "Linkedin",
    docs: "https://www.linkedin.com/in/genilson-do-carmo-8a42b89a/",
    user: "Genilson do Carmo",
  },
  methods: {
    getNome: function () {
      this.user = "Genilson";
      return this.user;
    },
  },
});
