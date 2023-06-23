import React, { useState } from "react";
import axios from "axios";

function App() {
  const [NOME, setNome] = useState("");
  const [SENHA, setSenha] = useState("");
  const [loginMensagem, setLoginMensagem] = useState("");

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Faz uma solicitação POST para o backend Django para fazer login
    axios
      .post("http://localhost:8000/login", {
        NOME: NOME,
        SENHA: SENHA,
      })
      .then((response) => {
        setLoginMensagem(response.data);
      })
      .catch((error) => {
        setLoginMensagem("Erro ao fazer login.");
      });
  };

  return (
    <div className="App">
      <h1 className="tittle">Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>
          Nome de Usuário:
          <input
            type="text"
            value={NOME}
            placeholder="Nome"
            onChange={handleNomeChange}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={SENHA}
            placeholder="Senha"
            onChange={handleSenhaChange}
          />
        </label>
        <br />
        <button type="submit" className="buttonSubmit">
          Entrar
        </button>
      </form>

      <p>{loginMensagem}</p>
    </div>
  );
}

export default App;
