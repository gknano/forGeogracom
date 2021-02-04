import React from 'react';
import { connect } from 'react-redux';
import { THead } from './head';
import { getUserInfo } from '../../utils/selectors';
import styled from '@emotion/styled';
import { CustomButton } from '../CustomButton';
import { setUserInfoAction } from '../../store/Actions';

const TableContainer = styled.table`
  overflow: hidden;
  border: 1px solid #d3d3d3;
  background: #fefefe;
  width: 100%;
  margin: 5% auto 0;
  border-radius: 5px;
  -moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 4px rgb(0 0 0 / 20%);
`;

const TdContainer = styled.td`
  padding: 18px 28px 18px;
  text-align: center;
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 25%,
    from(#f9f9f9),
    to(#fefefe)
  );
`;
// создаем стилизованный td
const BodyCell = ({ children }) => <TdContainer>{children}</TdContainer>;

export const TableView = ({ userInfo, setUserInfo }) => {
  // слушаем событие onClick на кнопке и прокидываем индекс элемента
  const onDeleteHandler = (e, i) => {
    // удаляем элемент из массива во индексу
    userInfo.splice(i, 1);
    // если не создавать новый массив, данные не будут динамически обновляться на странице
    setUserInfo(userInfo);
  };
  return (
    <TableContainer>
      <THead />
      <tbody>
        {userInfo.map(({ userName, phoneNumber }, i) => (
          <tr key={`user-info-tr${i}`}>
            <BodyCell>{userName}</BodyCell>
            <BodyCell>{phoneNumber}</BodyCell>
            <BodyCell>
              <CustomButton onClick={(e) => onDeleteHandler(e, i)}>
                {'Удалить'}
              </CustomButton>
            </BodyCell>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

const mapDispatchToProps = {
  setUserInfo: setUserInfoAction,
};

const mapStateToProps = (state) => {
  return {
    userInfo: getUserInfo(state),
  };
};

export const Table = connect(mapStateToProps, mapDispatchToProps)(TableView);
