import styled from "styled-components";

interface IButton {
    active?: boolean
}

export const Footer = styled.footer`
    position: fixed;
    width: 100%;
    height: 90px;
    bottom: 0;
    background-color: var(--theme-card);
   
`

export const Box = styled.div <IButton>`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Button = styled.button <IButton>`
       cursor: pointer;
        font-size: 1.5rem;
        padding: 10px;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease-in;

        ${({active}) => active ? `
          background-color: var(--theme-button);
          color: #fff;

        `: ` background-color: #f4f4f4;`

        }

        :hover{
            transition: all 0.1s ease-in;
            font-size: 1.4rem;
        }
`