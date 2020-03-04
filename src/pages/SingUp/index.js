import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="GoBarber Web" />

      <form>
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Acessar</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
