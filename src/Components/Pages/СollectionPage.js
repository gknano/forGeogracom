import React from 'react';
import styled from '@emotion/styled';

const CollectionPageStyle = styled.table`
    transform: translate(50%,50%);
    position: absolute;
    top:40%;
    left: 5%;
    border: 1px solid grey;
    width: 600px;
    th {
        width: 20%;
    }
    td:first-child {
        width: 30%;
    }
    th, td {
        border: 1px solid grey;
    }
`;


function CollectionPage() {
    
    const data = JSON.parse(localStorage.getItem('user_0'));
    console.log(data.modifyUserName, data.modifyPhoneNumber)
  
    return(
            <CollectionPageStyle>
                <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Телефон</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>{data.modifyUserName}</td>
                        <td>{data.modifyPhoneNumber}</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </CollectionPageStyle>
        )
}

export default CollectionPage;