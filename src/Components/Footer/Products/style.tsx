import styled from "styled-components";

interface IButton {
    active?: boolean | number | null
}

export const Container = styled.div<IButton>`
    position: fixed;
    bottom: 90px;
    width: 100%;
    height: 120px;
    background-color: #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ${({active}) => active ? `
        background-color: #ccc;
        
    `: ` background-color: transparent;`}
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        font-size: 1.4rem;
        padding: 8px;
        cursor: pointer;

        &:hover{
            transition: all 0.2s ease-in;
            font-size: 1.2rem;
        }
    }

    span{
        padding-top: 10px;
        font-family: sans-serif;
    }
`