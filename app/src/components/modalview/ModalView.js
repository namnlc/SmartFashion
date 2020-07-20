import React from 'react';
import {View, Text, ViewPropTypes} from 'react-native';
import {Overlay} from 'react-native-elements';
import PropTypes from 'prop-types';
const createReactClass = require('../scrollableview/node_modules/create-react-class');

const ModalView = createReactClass({
  propTypes: {
    txStyle: Text.propTypes.style,
    imgStyle: ViewPropTypes.style,
  },
  render() {
    return (
      <Overlay>
        <Text>123</Text>
      </Overlay>
    );
  },
});

export default ModalView;
