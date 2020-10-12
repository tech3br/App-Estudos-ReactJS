import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ComCreateElement from '../components/ComCreateElement';
import Home from '../components/Home';
import IncorporandoExpressoes from '../components/IncorporandoExpressoes';
import Teste from '../components/Teste';

// Definindo interface
interface RoutesProps {
  name?: string;
  path?: string | undefined;
  exact?: boolean;
  component?: React.FC | React.FunctionComponent | JSX.Element;
}

// Definindo Array
export const routes: RoutesProps[] = [
  {
    name: 'Home',
    path: 'home',
    exact: false,
    component: <Route path="/home" exact={true} component={Home} />,
  },
  {
    name: 'Com Create Element',
    path: 'create-element',
    exact: false,
    component: <Route path="/create-element" component={ComCreateElement} />,
  },
  {
    name: 'Incorporando Expressoes',
    path: 'incorp-expressoes',
    exact: false,
    component: (
      <Route path="/incorp-expressoes" component={IncorporandoExpressoes} />
    ),
  },
  {
    name: 'Teste',
    path: 'teste',
    exact: false,
    component: <Route path="/teste" component={Teste} />,
  },
  {
    name: '',
    path: '',
    exact: false,
  },
  {
    name: '',
    path: '',
    exact: false,
  },
];

// Fazendo map da Array e exportando
export default () => (
  <Switch>{routes.map((route, key) => route.component)}</Switch>
);
