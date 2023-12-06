import react, { useState } from 'react';


import '../../Pages/global.css';
import Menu from '../../componentes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { FaSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';
import Head from '../../componentes/head';

export default function Cadastrousuario() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const usuarios = ["carlos", "carlos@gmail.com", "123"]
    const usuario = {
        nome,
        email,
        senha
    }
    function salvardados(e) {
        e.preventDefault();
        // console.log(usuario);
        const banco = JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
        banco.push(usuario);
        localStorage.setItem("cd-usuarios", JSON.stringify(banco));
        alert("usuario salvo com sucesso");
    }
    return (
        <div className="dashboard-container">
            <div className='menu'>
                <h1>  menu</h1>
                <Menu />

            </div>
            <div className='principal'>
                <Head title="Cadastro de Usuários"/>
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados} >
                        <input type='text'
                            value={nome} onChange={e => setNome(e.target.value)}
                            placeholder='Digite o nome do usuário'
                        />
                        <input type='text'
                            value={email} onChange={e => setEmail(e.target.value)} placeholder='Digite seu email' />
                        <input type='password'
                            value={senha} onChange={e => setSenha(e.target.value)} placeholder='Digite sua senha' />
                        <div>
                            <button className='btn-save'>
                                <FaSave />
                                Salvar
                            </button>

                            <button className='btn-cancel'>
                                <MdOutlineCancel />
                                Cancelar
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
