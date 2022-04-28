import React from 'react';
import { history } from '../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../components/ui';

const Main = () => {
  return (
    <Div
      spaceBetween
      width="1400px"
      margin="150px auto 0px auto"
      border="1px solid black"
    >
      <Div
        border="1px solid black"
        width="680px"
        height="680px"
        cursor="pointer"
        _onClick={() => {
          history.push('/SubMain1');
        }}
      >
        목적별
      </Div>
      <Div
        border="1px solid black"
        width="680px"
        height="680px"
        cursor="pointer"
        _onClick={() => {
          history.push('/SubMain2');
        }}
      >
        나라별
      </Div>
    </Div>
  );
};

export default Main;
