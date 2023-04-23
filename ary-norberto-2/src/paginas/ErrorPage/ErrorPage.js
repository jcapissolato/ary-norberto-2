import react from 'react'
import Header from '../../componentes/header/Header'
import {useNavigate} from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
    return(
        <div>
            <Header/>
            Página de Erro
        </div>
    )
}

export default ErrorPage