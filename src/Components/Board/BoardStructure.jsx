import styled from 'styled-components';

export const BoardBackground = styled.div`
    padding:5px;
    width: 50vh;
    height: 50vh;
    background-color: Tomato;
    margin-left: auto;
    margin-right: auto;
    display:grid;npm install --save styled-components
    grid-gap:10px;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap:5px;
    grid-template-rows:repeat(3,1fr);
    grid-row-gap:5px;
    border-radius:10px;
    border: 3px solid black;
`;

    export const BoardSquare = styled.div`
    background-color:BlanchedAlmond;
    border-radius:5px;
    transition: ease 0.1;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover{
        background-color:MediumSeaGreen;
    }
    span{
        font-size:2.5rem;
    }
`