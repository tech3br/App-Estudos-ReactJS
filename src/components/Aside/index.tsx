import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import * as S from './styles';

export default () => {
  return (
    <S.Aside>
      <S.Logo />
      <ul>
        {routes.map((item, key) => (
          <li key={key}>
            <Link to={{ pathname: item.path }}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </S.Aside>
  );
};
