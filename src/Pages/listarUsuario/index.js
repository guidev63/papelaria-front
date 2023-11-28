import '../../Pages/global.css';
import Menu from '../../componentes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
export default function Listausuario() {
    const dados = [
        { id: 1, nome: "guilherme", email: "guilhermedev23@gmail.com", senha: "123" },
        { id: 2, nome: "felipe", email: "felipe@gmail.com", senha: "123" },
        { id: 3, nome: "nilson", email: "nilson@gmail.com", senha: "123" },
    ]
    return (

        <div className="dashboard-container">
            <div className='menu'>
                <h1>menu</h1>
                <Menu />
            </div>
            <div className='principal'>
                <h1>listar de Usuario</h1>
                <button  className='btn-novo'>Novo Cadastro</button>
                <table className='table'>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                        dados.map((usu) => {
                            return (
                                <tr key={usu.toString}>
                                    <td>{usu.id}</td>
                                    <td>{usu.nome}</td>
                                    <td>{usu.email}</td>
                                    <td className='botoes'> 
                                        <FiEdit size={18} color='#3a5795' cursor= "Pointer" /> 
                                    </td>
                                    <td className='botoes'>
                                         <FiTrash size={18} color='red' cursor= "Pointer" />  
                                    </td>
                                </tr>

                            )
                        })
                    }
                </table>
            </div>
        </div>

    )

}
