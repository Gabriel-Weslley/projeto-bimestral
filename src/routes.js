import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastrar";
import Recuperar from "./pages/RecuperarAcesso";
export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/Cadastrar" component={Cadastro} />
      <Route path="/Recuperar" component={Recuperar} />
    </BrowserRouter>
  );
}
