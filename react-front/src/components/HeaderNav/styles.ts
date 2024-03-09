import styled from 'styled-components'

export const HeaderNavigation = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 100px;
    align-items: center;
`
export const Nav = styled.nav`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
`

export const SeachInput = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 50%;
    height: 45px;
    border: solid 2px #000000;
    border-radius: 10px;

    input {
        border: none;
        width: 100%;
        height: 100%;
        padding: 0 10px;
        border-radius: 10px;

        &:focus {
            outline: none;
        }

        &::placeholder {
            font-weight: 600;
        }
    }

    button {
        background-color: transparent;
        position: absolute;
        right: 0;
        border: none;
        height: 100%;
        width: 35px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:active {
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 0 10px 10px 0;
        }
    }
`

export const NavContent = styled.div`
    display: flex;
    gap: 20px;

    a:nth-child(1) {
        display: flex;
        align-items: center;
        font-size: 25px;
        background-color: transparent;
        cursor: pointer;
        border: none;
        color: black;

        &:hover {
            color: red;
        }
    }

    a:nth-child(2) {
        display: flex;
        align-items: center;
        font-size: 25px;
        background-color: transparent;
        cursor: pointer;
        border: none;
        color: black;

        &:hover {
            color: blue;
        }
    }

    a:nth-child(3) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        text-justify: auto;
        width: 150px;
        background-color: transparent;
        cursor: pointer;
        border: none;
        color: black;

        &:hover {
            color: blue;
        }
    }
`

export const LogoContainer = styled.div`
    font-weight: 800;
    font-size: 25px;

    span {
        margin-left: 5px;
        border-radius: 8px;
        background-color: #000000;
        color: #ffffff;
        padding: 0 10px 0 0;
    }
`
