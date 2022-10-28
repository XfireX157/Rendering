import styled from "styled-components";

interface IProps {
    isActive?: boolean
}

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 120px;
    bottom: 0;
    background-color: var(--Cards);

    z-index: 20;
`

export const Box = styled.div<IProps>`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--branco);
    
    img{
        width: 64px;
    }
`

export const Span = styled.span<IProps>`
    width: 64px;
    height: 60px;
    border-radius: 50%;
    color: #000;
    cursor: pointer;

    ${({isActive}) => isActive ? `
        background-color: red;
    `: `
        background-color: #fff;
    `}
`

export const Nav = styled.div`
    background-color: var(--Cards);
    position: absolute;
    width: 100%;
    bottom: 120px;
    z-index: 20;
`

export const Porta = styled.div`
    position: absolute;
    left: 20%;
    top: 47%;
    transform: translate(-50%, -50%);

    img{
        width: 450px;
        height: 515px;
    }

    z-index: 10;
`

export const Wall = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
        height: 100%;
    }
`

export const Furniture = styled.div`
    position: absolute;
    left: 60%;
    top: 57%;
    transform: translate(-50%, -50%);

    img{
        width: 800px;
    }

    z-index: 10;
`

export const Floor = styled.div`
    position: absolute;
    top: 70%;
    width: 100%;
    img{
        width: 100%;
        height: 190px;
    }

`