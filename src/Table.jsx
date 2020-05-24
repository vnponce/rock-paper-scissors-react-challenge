import React from 'react';
import styled from 'styled-components';
import Token from './Token';

const TableWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Table(props) {
  return (
    <TableWrapper>
      <Token name="rock"/>
      <Token name="scissors"/>
      <Token name="paper"/>
    </TableWrapper>
  );
}

export default Table;