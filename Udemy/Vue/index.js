new Vue({
  el: "#app",
  data: {
    mensagem: "Essa é a nossa primeira aplicação",
    nome: "",
  },
  methods: {
    recebeNome: function (event) {
      this.nome = event.target.value;
    },
  },
});
