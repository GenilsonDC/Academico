import React, { useState } from "react";
import axios from "axios";

function App() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleSobrenomeChange = (event) => {
    setSobrenome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Faz uma solicitação POST para o backend Flask
    axios
      .post("http://localhost:5000/signup", {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senha,
      })
      .then((response) => {
        setMensagem(response.data.message);
      })
      .catch((error) => {
        setMensagem("Erro ao cadastrar usuário.");
      });
  };

  return (
    <div className="App">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={handleNomeChange} />
        </label>
        <br />
        <label>
          Sobrenome:
          <input
            type="text"
            value={sobrenome}
            onChange={handleSobrenomeChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={senha} onChange={handleSenhaChange} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
