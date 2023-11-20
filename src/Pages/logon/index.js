import'./style.css'

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <h1>Faça seu login</h1>
        <form>
          <input placeholder="Email" />
          
          <input placeholder="Senha"  type='password'/>
          <button type="submit">Entrar</button>
          <a href="#">Novo Cadastro</a>
        </form>
      </section>
    </div>

  )

}