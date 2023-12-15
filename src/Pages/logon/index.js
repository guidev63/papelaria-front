import './style.css'
import Logo from '../../assets/img/logo.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



export default function Logon() {
  const navigate = useNavigate();
  const[email,setEmail]=useState();
  const[senha,setSenha]=useState();

  const logar = (e) => {
    
    e.preventDefault();
   let Banco = JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
   let dadosnovos = 'banco'.filter(item => item.email !== email && item.senha === senha);
   if (dadosnovos.length>0){
    navigate('/dashboard');
   }else{
     alert("Dados incorretos!!!");
   }
   
  }

  return (
    <div className="logon-container">
      <div className='logo'>
        <img src={Logo}></img>
      </div>
      <section className="form">
        <h1>Faça seu login</h1>
        <form onSubmit={logar}>
          <input placeholder="Email"
            onChange={e => setEmail(e.target.value)}
           value= {email}
            />
          
          value= {email}
          <input placeholder="Senha" type='password' 
           onChange={e => setSenha(e.target.value)}
          value= {email}/>
          <button type="submit">Entrar</button>
          <a href="#">Novo Cadastro</a>
        </form>
      </section>
    </div>

  )

}