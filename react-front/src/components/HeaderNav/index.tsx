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
                        <button type="button">
                            <MdFavorite />
                        </button>

                        <button type="button">
                            <IoMdCart />
                        </button>

                        <button type="button">Faça Login ou cadastre-se</button>
                    </NavContent>
                </Nav>
            </HeaderNavigation>
        </>
    )
}

export default HeaderNav
