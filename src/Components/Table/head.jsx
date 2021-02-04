import styled from '@emotion/styled';

const ThContainer = styled.th`
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

// создаем стилизованный th
const HeaderCell = ({ children }) => <ThContainer>{children}</ThContainer>;

// создаем массив title
const headerTitles = ['ФИО', 'Телефон', ''];

export const THead = () => (
  <thead>
    <tr>
      {headerTitles.map((title) => (
        <HeaderCell key={`title-${title}`}>{title}</HeaderCell>
      ))}
    </tr>
  </thead>
);
