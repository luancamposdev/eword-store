// Functions and Components
import React from 'react'

// Icons and Styled Imports
import { MdFavorite } from 'react-icons/md'
import { IoSearch } from 'react-icons/io5'
import { IoMdCart } from 'react-icons/io'
import {
    HeaderNavigation,
    LogoContainer,
    Nav,
    NavContent,
    SeachInput,
} from './styles'
import { Link } from 'react-router-dom'

function HeaderNav() {
    return (
        <>
            <HeaderNavigation>
                <Nav>
                    <LogoContainer>
                        <h1>
                            E<span>-WORD</span>
                        </h1>
                    </LogoContainer>
                    <SeachInput>
                        <input type="text" placeholder="Pesquise aqui " />

                        <button type="button">
                            <IoSearch />
                        </button>
                    </SeachInput>
                    <NavContent>
                        <Link to="#">
                            <MdFavorite />
                        </Link>

                        <Link to="#">
                            <IoMdCart />
                        </Link>

                        <Link to="/login">Faça Login ou cadastre-se</Link>
                    </NavContent>
                </Nav>
            </HeaderNavigation>
        </>
    )
}

export default HeaderNav
