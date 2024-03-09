import React from 'react'
import { CardLogin, LoginContent } from './styles'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { LogoContainer } from '../../../components/HeaderNav/styles'

function Login() {
    return (
        <LoginContent>
            <Link to="/" className="back">
                <IoIosArrowBack /> <span>Back</span>
            </Link>
            <CardLogin autoComplete="off">
                <LogoContainer>
                    <h1>
                        E<span>-WORD</span>
                    </h1>
                </LogoContainer>
                <div className="email">
                    <p>Email:</p>
                    <input
                        type="text"
                        placeholder="Digite seu email"
                        autoComplete="new-password"
                    />
                </div>
                <div className="password">
                    <p>Password:</p>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        autoComplete="new-password"
                    />
                </div>
                <button type="submit">Entrar</button>

                <Link to="#">Esqueci a senha</Link>
                <Link to="#">Cadastra-se </Link>
            </CardLogin>
        </LoginContent>
    )
}

export default Login
