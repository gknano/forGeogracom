import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderStyle = styled.div`
  height: 70px;
  background: #F0F0F0;
  border-radius: 10px;
`;

const Button = styled.button`
  height: 50px;
  width: 90px; 
  border-radius: 5px;
  margin-left: 5px;
  margin-top: 10px; 
`;

const Header = () => {
  return(
    <HeaderStyle>
      <div>
        <Button><Link to='/'>Главная</Link></Button>
        <Button><Link to='/formpage'>Форма</Link></Button>
        <Button><Link to='/collectionpage'>Коллекция</Link></Button>
      </div>
    </HeaderStyle>
  )
}

export default Header;