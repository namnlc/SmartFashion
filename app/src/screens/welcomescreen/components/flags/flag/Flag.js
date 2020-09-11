import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {styles} from './FlagStyle';

const Flag = (props) => {
  const style = [
    {marginLeft: 20},
    props.index === props.selected && styles.selected,
    props.isExpand && props.selected !== props.index ? {display: 'none'} : null,
  ];
  return (
    <View>
      <TouchableOpacity onPress={props.clicked} style={style}>
        <Image
          source={props.sourceImage}
          style={styles.imgFlags}
          resizeMode="center"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Flag;
