import React from "react";

import { Container } from "./styles";
import {Link} from "react-router-dom";
export default function Cadastrar() {
  return (
    <Container>
      <section> 
      <form>
        <p>Cadastrar</p>
        <br/>
          <input placeholder= "Nome" type = "Name"/>
          <input placeholder= "Email" type = "Email" required/>
          <input placeholder= "Senha" type = "Password" required/>
          <input placeholder= "Data de Nascimento" type = "data"/>
          <br/>
          <button className = "botoes" type = "submit"> Salvar </button>
          <br/>
          <Link to= "/"> 
          <label className= "Logar" htmlFor= "login"> Gostaria de logar? </label>
          </Link>

      </form>
      
      </section>
     
    </Container>
  );
}
