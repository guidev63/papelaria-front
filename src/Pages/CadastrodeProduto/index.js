import react, { useState } from 'react';

import '../../Pages/global.css';
import Menu from '../../componentes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { FaSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';
import Head from '../../componentes/head';
import api from '../../server/api';
//fiz alteração aqui

export default function Cadastroproduto() {
    const navigate = useNavigate();

    const [status, setStatus] = useState("");
    const [descricao, setDescricao] = useState("");
    const [estoque_minimo, setEstoque_minimo] = useState("0");
    const [estoque_maximo, setEstoque_maximo] = useState("10");
    

    const produto = {
       // id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
        status,
        descricao,
        estoque_minimo,
        estoque_maximo

    }

    function salvardados(e) {
        e.preventDefault();
        let i = 0;
        if (status === "")
            i++;
        else if (descricao === "")
            i++;
        else if (estoque_minimo === "" || estoque_minimo === 0)
            i++;
        else if (estoque_maximo === "" || estoque_maximo === 0)
            i++;
        if (i == 0)
        
         {
            api.post("/produtos", produto)
  .then(res => {
    console.log(res.status)
    if (res.status === 201) { // 201 Created
      alert(res.data.mensagem)
      navigate('/listarproduto');
      // Adicione qualquer manipulação adicional após o cadastro bem-sucedido
    }
    // Adicione tratamento para outros códigos de status, se necessário
  })
  .catch(error => {
    console.error("Erro ao cadastrar produto:", error);
    
    // Adicione tratamento de erros aqui, se necessário
  });
            //const banco = JSON.parse(localStorage.getItem("cd-produto") || "[]");
           // banco.push(produto);
          //  localStorage.setItem("cd-produto", JSON.stringify(banco));
         
            navigate('/listarproduto');
        } else {
            alert("Verifique! Há campos vazios!")
        }
    }
    

    return (
        <div className="dashboard-container">

            <div className='menu'>
                <h1>  </h1>
                <Menu />

            </div>
            <div className='principal'>
                <Head title="Cadastro de Produto" />
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados} >
                        <input type='text'
                            value={status} onChange={e => setStatus(e.target.value)}
                            placeholder='Digite o Status'
                        />
                        <input type='text'
                            value={descricao} onChange={e => setDescricao(e.target.value)} placeholder='Digite a descrição' />
                        <input type='number'
                            value={estoque_minimo} onChange={e => setEstoque_minimo(e.target.value)} placeholder='Digite sua senha' />
                        <input type='number'
                            value={estoque_maximo} onChange={e => setEstoque_maximo(e.target.value)} placeholder='Digite sua senha' />
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
