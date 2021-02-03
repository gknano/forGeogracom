import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <Link to='/'>Главная</Link>
            <Link to='/form'>Форма</Link>
            <Link to='/collection'>Коллекция</Link>
       </div>
    );
}

export default Header;