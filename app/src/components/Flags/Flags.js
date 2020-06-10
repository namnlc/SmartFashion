import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import america from '../../../res/images/america.png';
import japan from '../../../res/images/japan.png';
import arrowLeft from '../../../res/images/arrowleft.png';
import arrowRight from '../../../res/images/arrowright.png';
import {styles} from './Style';

const Flags = () => {
  const [isExpand, setIsExpand] = useState(true);
  const [isSelected, setIsSelected] = useState(1);
  return (
    <View style={[styles.regionImg, {paddingRight: 20}]}>
      <TouchableOpacity
        onPress={() => setIsSelected(1)}
        style={[
          isExpand === true ? {marginRight: 20} : null,
          isSelected === 1 ? styles.touchFlags : null,
          (isSelected === 2 && isExpand === false) ||
          (isSelected === 3 && isExpand === false)
            ? {display: 'none'}
            : null,
        ]}>
        <Image source={america} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsSelected(2)}
        style={[
          isExpand === true ? {marginRight: 20} : null,
          isSelected === 2 ? styles.touchFlags : null,
          (isSelected === 1) & (isExpand === false) ||
          (isSelected === 3 && isExpand === false)
            ? {
                display: 'none',
                margin: 0,
              }
            : null,
        ]}>
        <Image source={japan} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsSelected(3)}
        style={[
          isSelected === 3 ? styles.touchFlags : null,
          (isSelected === 1 && isExpand === false) ||
          (isSelected === 2 && isExpand === false)
            ? {display: 'none'}
            : null,
        ]}>
        <Image source={america} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.toggle}
        onPress={() => setIsExpand(!isExpand)}>
        <Image source={isExpand === false ? arrowRight : arrowLeft} />
      </TouchableOpacity>
    </View>
  );
};
export default Flags;
