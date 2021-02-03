import React from 'react';
import styled from '@emotion/styled';
import toCamelCase from '../../utils/toCamelCase';
import toPhoneNumber from '../../utils/toPhoneNumber';

const FormPageStyle = styled.form`
    transform: translate(50%,50%);
    position: absolute
    top:40%;
    left: 30%;
`;


function FormPage() {

    const [state, setState] = React.useState({
      nameUser: "",
      phoneNumber: "",
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    }

    const setUserInfoToLocalStorage = (props)=> {
        const { userName, phoneNumber } = state;
        let keyName = 'user_' + localStorage.length;
        let modifyUserName = toCamelCase(userName);
        let modifyPhoneNumber = toPhoneNumber(phoneNumber);

        localStorage.setItem(
            keyName,
            JSON.stringify({
                modifyUserName,
                modifyPhoneNumber,
            })
        );
    
    }
    return (
      <FormPageStyle>
        <label>
          ФИО
          <input
            type="text"
            name="userName"
            placeholder="Введите ФИО"
            value={state.userName}
            onChange={handleChange}
          />
        </label>
        <label>
          Телефон
          <input
            type="text"
            name="phoneNumber"
            placeholder="Введите номер"
            value={state.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <label>
        <button type="submit" onClick={setUserInfoToLocalStorage}>Сохранить</button>
        </label>
      </FormPageStyle>
    );
}

export default FormPage;