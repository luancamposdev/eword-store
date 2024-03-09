import styled from 'styled-components'

export const LoginContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    @keyframes Slide {
        from {
            transform: translateX(10px);
        }

        to {
            transform: translateX(0px);
        }
    }
    .back {
        display: flex;
        align-items: center;
        position: absolute;
        top: 25px;
        left: 25px;
        font-size: 25px;
        color: #000000;
        animation: Slide 1s alternate 2.5;
        border-radius: 10px;
        padding: 10px 10px;
        width: 80px;

        span {
            font-size: 15px;
        }

        &:hover {
            transform: scale(1.1);
        }
    }
`
export const CardLogin = styled.form`
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    gap: 20px;
    align-items: center;
    width: 400px;
    border-radius: 10px;

    .email {
        width: 78%;
    }

    .password {
        width: 78%;
    }

    p {
        font-weight: 700;
        margin-bottom: 10px;
    }

    input {
        position: relative;
        padding: 8px 10px;
        width: 100%;
        font-weight: 600;
        border: none;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    button {
        text-align: center;
        width: 78%;
        padding: 10px 0;
        border-radius: 10px;
        border: none;
        background-color: #000000;
        color: #ffffff;
        font-weight: 700;
        font-size: 18px;
        margin-top: 25px;
        cursor: pointer;

        &:active {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }

    a {
        position: relative;
        color: #000000;
        font-weight: 700;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #000000;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
        &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
`
