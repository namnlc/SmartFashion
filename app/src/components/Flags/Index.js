import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {styles} from './Style';

export const Flag = ({selected, source, isExpand, onPress, index}) => {
  const style = [
    {marginRight: 20},
    index === selected && styles.touchFlags,
    !isExpand && selected !== index ? {display: 'none'} : null,
  ];
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={style}>
        <Image source={source} />
      </TouchableOpacity>
    </View>
  );
};
