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
    border-bottom: 2px solid #b97111;
    border-radius: 25px 25px 0 0;
    
    transition: all 0.2s ease-in-out;

    ${({active}) => active ? `
        background-color: var(--theme-card);
        
    `: ` background-color: transparent;`}
`

export const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 60px;
        height: 80px;
        cursor: pointer;

        &:hover{
            transition: all 0.2s ease-in;
            font-size: 1.2rem;
        }
    }

    span{
        font-family: sans-serif;
        color: var(--branco);
        font-weight: 600;
        padding-top: 5px;
    }
`

export const BoxImg = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--theme-background-primary);   
`

export const img = styled.div`
    position: absolute;
    width: 33.333%;
    height: 100%;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 35%;
    
    img{
        position: absolute;
        width: 180px;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }

    span{
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 68%;
        font-size: 2rem;
        color: #F4F4F4;
        font-family: sans-serif;
    }
`