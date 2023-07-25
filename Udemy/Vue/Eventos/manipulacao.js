new Vue({
  el: "#app",
  data: {
    cliques: 0,
    x: 0,
    y: 0,
    nome: "",
  },
  methods: {
    incrementar: function () {
      this.cliques++;
    },
    atualizaCoordenadas: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    exibirNome: function (texto, event) {
      this.nome = texto + event.target.value;
    },
  },
});
