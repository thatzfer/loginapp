import React, { useState } from 'react'
import './login.css'

import { MdOutlineLock, MdOutlineMail } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState (false)

  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show);
  }

  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zh3zLDwF4t9ZB-qKYUsiT3zbwrVMAOOewb2mqmIyif1qifJnxo7T-c_k2jsxYbWENqs&usqp=CAU"
          alt="ícone de login"
        />
      </div>

      <div className="login-right">
        <h1>Acessar App</h1>

        <div className="loginInputEmail">
          <MdOutlineMail />
          <input 
          type="email" 
          placeholder="Digite seu email"
          value= {email}
          onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="loginInputPassword">
          <MdOutlineLock />
          <input 
          type= { show ? "text" : "password"} 
          placeholder="Digite sua senha"
          value= {password}
          onChange={e => setPassword(e.target.value)}
          />

          <div className="login-eye">
            {show ? (
              <HiEye 
              size={20}
              onClick={handleClick}
              />
            ) : (
              <HiEyeOff 
              size={20}
              onClick={handleClick}
              />
            )}
          </div>
        </div>

        <button type="submit">
           Entrar
        </button>

        <h4>Não tenho conta</h4>

        <button type="submit">
           Cadastrar
        </button>

      </div>
    </div>
  )
}

export default Login;
