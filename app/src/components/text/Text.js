import React from 'react';
import {Text} from 'react-native';

import {txtStyle} from './TextStyle';
const text = (props) => (
  <Text
    style={[
      txtStyle.text,
      txtStyle[props.type],
      txtStyle[props.color],
      txtStyle[props.fontWeight],
      txtStyle[props.upper],
    ]}
    onPress={props.clicked}>
    {props.label}
  </Text>
);

export default text;
