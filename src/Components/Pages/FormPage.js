import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import toCamelCase from '../../utils/toCamelCase';
import toPhoneNumber from '../../utils/toPhoneNumber';
import { PageContainer } from '../PageContainer';
import { CustomInput } from '../CustomInput';
import { CustomButton } from '../CustomButton';
import { setUserInfo, getUserInfo } from '../../utils/selectors';

const FormPageStyle = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  align-items: center;
`;

const FormPage = () => {
  // создаем переменные для считывания ФИО и телефона
  const [state, setState] = useState({
    userName: '',
    phoneNumber: '',
  });
  // создаем переменную для чтения и изменения массива с пользователями
  const [userInfo, _setUserInfo] = useState([]);

  // записываем данные из localStorage в локлаьный массив при первом рендере
  useEffect(() => {
    let info = getUserInfo();
    if (info && info.length) _setUserInfo(info);
  }, []);

  // слушаем событие onChange и перезаписываем соответствующую переменную
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const { userName, phoneNumber } = state;

  const onSubmitHandler = (e) => {
    // останавливаем дефолтное событие
    e.preventDefault();

    // преобразовываем ФИО и телефон по заданной маске
    let modifyUserName = toCamelCase(userName);
    let modifyPhoneNumber = toPhoneNumber(phoneNumber);

    // нет смысла записывать данные, если обе переменные будут пустые
    if (modifyUserName || modifyPhoneNumber) {
      userInfo.push({
        userName: modifyUserName,
        phoneNumber: modifyPhoneNumber,
      });
      // записываем данные в localStorage
      setUserInfo(JSON.stringify(userInfo));
    }
  };

  // для удобства записываем статические данные в массив, чтобы потом использовать map
  let inputArr = [
    {
      labelText: 'ФИО',
      name: 'userName',
      placeholder: 'Введите ФИО',
      value: userName,
    },
    {
      labelText: 'Телефон',
      name: 'phoneNumber',
      placeholder: 'Введите номер',
      value: phoneNumber,
    },
  ];
  return (
    // оборачиваем страницу в дефолтный контейнер
    <PageContainer>
      <FormPageStyle>
        {inputArr.map((props, i) => (
          <CustomInput
            key={`${props.name + i}`}
            type="text"
            {...props}
            onChange={handleChange}
          />
        ))}

        <CustomButton type="submit" onClick={onSubmitHandler}>
          {'Сохранить'}
        </CustomButton>
      </FormPageStyle>
    </PageContainer>
  );
};

export default FormPage;
