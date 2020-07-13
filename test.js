import React, {useState} from 'react';
import {View, Text, ViewPropTypes} from 'react-native';
import {Overlay} from 'react-native-elements';
import PropTypes from 'prop-types';
const createReactClass = require('create-react-class');

const ModalView = createReactClass({
  propTypes: {
    txStyle: Text.propTypes.style,
    imgStyle: ViewPropTypes.style,
  },
  render() {
    return (
      <Overlay>
        <Text>1</Text>
      </Overlay>
    );
  },
});

export default ModalView;
