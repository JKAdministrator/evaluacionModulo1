import React from 'react'
import './RegisterPage.css'
function RegisterPage() {
    return (
      <>
      <form action="">
        <section>
          <img src="fondo.jpg" alt="register user background" />
        </section>
        <section className='fields'>
          
          <fieldset> 
            <h1>Registro de usuario</h1>
            <label htmlFor="idName">Nombre :</label>
            <input type="text" name="name" id="idName" placeholder="Nombre" required autoComplete="given-name" autoFocus tabIndex={1} />
            <label htmlFor="idLastname">Apellido: </label>
            <input type="text" name="lastname" id="idLastname" placeholder="Apellido" required autoComplete="family-name" tabIndex={2}/>
            <label htmlFor="idEmail">Email: </label>
            <input type="text" name="email" id="idEmail" placeholder="TuEmail@ejemplo.com.ar" required autoComplete="email" tabIndex={3}/>
            <label htmlFor="idTel">Teléfono</label>
            <input type="text" name="tel" id="idTel" placeholder="54-011-32592952" required autoComplete="tel" tabIndex={4}/>
            <label htmlFor="idPassword">Password:</label>
            <input type="password" name="password" id="idPassword" placeholder="" required autoComplete="password" tabIndex={5}/>
            <label htmlFor="idPassword2">Confirmar Password:</label>
            <input type="password" name="password2" id="idPassword2" placeholder="" required autoComplete="password2" tabIndex={6}/>
            <button type="button" className="button" href="#" id="register" tabIndex={7}>REGISTRAR</button>
          </fieldset>
        </section>
      </form>
      </>
  )
}

export default RegisterPage