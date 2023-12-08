import React,{useState,useEffect} from 'react';
import '../../Pages/global.css';
import Menu from '../../componentes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import Head from '../../componentes/head';
export default function Listausuario() {
   const[dados,setDados] = useState([]);
   const[banco,setBanco] = useState([]);
    // const dados = [
        // { id: 1, nome: "guilherme", email: "guilhermedev23@gmail.com", senha: "123" },
        // { id: 2, nome: "felipe", email: "felipe@gmail.com", senha: "123" },
        // { id: 3, nome: "nilson", email: "nilson@gmail.com", senha: "123" },
    // ]
    useEffect(()=>{
        mostrardados();
    },[banco])

    function mostrardados()
    { 
        setBanco(JSON.parse(localStorage.getItem("cd-usuarios") || "[]"));
    }
     

    const apagar = (id) => {
        confirmAlert({
            title: 'Excluir Usuario',
            message: 'Deseja realmente excluir esse Usuario?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () =>
                    {
                         setDados(banco.filter(item=>item.id!=id));
                         console.log(dados)
                        // localStorage.setItem("cd-usuarios", JSON.stringify(dados));
                        alert(`Voce Apagou o usuario id:${id}`)
                    }
                     
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
