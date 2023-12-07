import '../../Pages/global.css';
import Menu from '../../componentes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import Head from '../../componentes/head';
export default function Listausuario() {
    // const dados = [
        // { id: 1, nome: "guilherme", email: "guilhermedev23@gmail.com", senha: "123" },
        // { id: 2, nome: "felipe", email: "felipe@gmail.com", senha: "123" },
        // { id: 3, nome: "nilson", email: "nilson@gmail.com", senha: "123" },
    // ]
    const banco = JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
    const apagar = (id) => {
        confirmAlert({
            title: 'Excluir Usuario',
            message: 'Deseja realmente excluir esse Usuario?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => alert(`Voce Apagou o usuario id:${id}`)
                },
                {
                    label: 'Nao',
                    onClick: () => alert('Click No')
                }
            ]
            
        });
    };
    return (

        <div className="dashboard-container">


            <div className='menu'>
                <h1>menu</h1>
                <Menu />
            </div>
            <div className='principal'>
                <Head title="Lista de Usuario" />
                <h1>listar de Usuario</h1>
                <Link to="/cadastrousuario" className='btn-novo'>Novo Cadastro</Link>

                <table className="table">
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                        banco.map((usu) => {
                            return (
                                <tr key={usu.toString}>
                                    <td>{usu.id}</td>
                                    <td>{usu.nome}</td>
                                    <td>{usu.email}</td>
                                    <td className='botoes'>
                                        <FiEdit size={18} color='#3a5795' cursor="Pointer" />
                                    </td>
                                    <td className='botoes'>
                                        <FiTrash
                                            size={18}
                                            color='red'
                                            onClick={(e) => apagar(usu.id)}
                                            cursor="Pointer" />
                                    </td>
                                </tr>

                            )
                        })
                    }
                </table>
            </div>
        </div >

    )

}
