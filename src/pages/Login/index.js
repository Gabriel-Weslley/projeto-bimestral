import React from "react";
import {Link} from "react-router-dom";
import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <section>
      <form>
        <p>Logar</p>
        <br/>
          <input placeholder= "Email ou Nome de Usuário" type = "Email"/>
          <input placeholder= "Senha" type = "Password"/>
          <br/>
          <button className = "botoes" type = "submit"> Entrar </button>
      </form>
      <br/><br/>
      <Link to="./Cadastrar">
      <label>Crie sua conta</label>
      </Link>
      <br/><br/>
      <Link to="./Recuperar">
      <label>Esqueçeu sua senha?</label>
      </Link>
      
      </section>
  
    </Container>
  );
}
