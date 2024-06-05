import React from 'react'
import './RegisterPage.css'
function RegisterPage() {
  return (
    <>
    <form action="">
      <section>
        <img src="./fondo.png" alt="register user background" />
      </section>
      <section className='fields'>
        <fieldset>
          <legend><h1>Registro de usuario</h1></legend>
          <label htmlFor="idName">Nombre :</label>
          <input type="text" name="name" id="idName" placeholder="Nombre" required autocomplete="given-name"/>
          <label htmlFor="idLastname">Apellido: </label>
          <input type="text" name="lastname" id="idLastname" placeholder="Apellido" required autocomplete="family-name"/>
          <label htmlFor="idEmail">Email: </label>
          <input type="text" name="email" id="idEmail" placeholder="tuEmail@ejemplo.com.ar" required autocomplete="email"/>
          <label htmlFor="idTel">Teléfono</label>
          <input type="text" name="tel" id="idTel" placeholder="54-011-32592952" required autocomplete="tel"/>
          <label htmlFor="idPassword">Password:</label>
          <input type="password" name="password" id="idPassword" placeholder="" required autocomplete="password"/>
          <label htmlFor="idPassword2">Confirmar Password:</label>
          <input type="password" name="password2" id="idPassword2" placeholder="" required autocomplete="password2"/>
          <button type="button" class="button" href="#" id="register">REGISTRAR</button>
        </fieldset>
      </section>
    </form>
    </>
)
}

export default RegisterPage