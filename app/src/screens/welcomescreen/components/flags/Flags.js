import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import america from '../../../../../res/images/america.png';
import japan from '../../../../../res/images/japan.png';
import arrowLeft from '../../../../../res/images/arrowleft.png';
import arrowRight from '../../../../../res/images/arrowright.png';
import {styles} from './Style';

const Flag = ({selected, source, isExpand, onPress, index}) => {
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

const flagsData = [
  {
    source: america,
  },
  {
    source: japan,
  },
  {
    source: america,
  },
];
const Flags = () => {
  const [isExpand, setIsExpand] = useState(true);
  const [selected, setIsSelected] = useState(0);
  return (
    <View style={[styles.regionImg, {paddingRight: 20}]}>
      {flagsData.map((v, i) => (
        <Flag
          key={i}
          source={v.source}
          selected={selected}
          isExpand={isExpand}
          index={i}
          onPress={() => setIsSelected(i)}
        />
      ))}
      <TouchableOpacity
        onPress={() => {
          setIsExpand(!isExpand);
        }}>
        <Image source={isExpand ? arrowRight : arrowLeft} />
      </TouchableOpacity>
    </View>
  );
};
export default Flags;
