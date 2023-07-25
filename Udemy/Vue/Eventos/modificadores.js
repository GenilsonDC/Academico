new Vue({
  el: "#app",
  methods: {
    onClick: function (targetElement, event) {
      console.log(event.type, " : ", targetElement);
    },
    onSubmit: function (event) {
      console.log("Formulário enviado/ Form sent ");
    },
  },
});
