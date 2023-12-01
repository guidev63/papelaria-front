import '../../Pages/global.css';
import Menu from '../../componentes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import Head from '../../componentes/head';

export default function Cadastrousuario() {

    return (

        <div className="dashboard-container">


            <div className='menu'>

                <Menu />
            </div>
            <div className='principal'>
                <Head title="Cadastro de Usuários" />

                <from>
                    <input type='Text' placeholder='Digite o nome do usuario' />
                    <input type='Text' placeholder='Digite seu @email' />
                    <input type='Text' placeholder='Digite seu senha' />
                    <button>Salvar</button>
                    <button>Cancelar</button>
                </from>

            </div>
        </div >

    )

}
