import React from 'react';
import Aside from './Aside';
import Content from './Content';
import * as S from './styles';

export default () => {
  return (
    <S.Container>
      <Aside />
      <Content />
    </S.Container>
  );
};
