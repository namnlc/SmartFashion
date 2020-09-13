import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {btnStyle} from './ButtonStyle';
const button = (props) => (
  <Button
    onPress={props.clicked}
    title={props.label}
    titleStyle={[btnStyle.title, btnStyle[props.type], btnStyle[props.upper]]}
    buttonStyle={btnStyle[props.type]}
    containerStyle={[btnStyle.container, btnStyle[props.size]]}
  />
);

export default button;
