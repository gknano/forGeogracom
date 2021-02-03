import React from 'react';
import styled from '@emotion/styled';

const MainPageStyle = styled.h1`
    transform: translate(50%,50%);
    position: absolute;
    top:40%;
    left: 30%;
`;


const MainPage = () => {
    return(
        <MainPageStyle>Добро пожаловать!</MainPageStyle>
    );
}

export default MainPage;