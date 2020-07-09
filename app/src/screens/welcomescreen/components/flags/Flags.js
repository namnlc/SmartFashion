import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import america from '../../../../../res/images/america.png';
import japan from '../../../../../res/images/japan.png';
import vietnam from '../../../../../res/images/vietnam.png';
import arrowLeft from '../../../../../res/images/arrowleft.png';
import arrowRight from '../../../../../res/images/arrowright.png';
import {styles} from './Style';

const Flag = ({selected, source, isExpand, onPress, index}) => {
  const style = [
    {marginLeft: 20},
    index === selected && styles.touchFlags,
    !isExpand && selected !== index ? {display: 'none'} : null,
  ];
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={style}>
        <Image source={source} style={styles.imgFlags} />
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
    source: vietnam,
  },
];
const Flags = () => {
  const [isExpand, setIsExpand] = useState(true);
  const [selected, setIsSelected] = useState(0);
  return (
    <View style={[styles.regionImg, styles.flag]}>
      <TouchableOpacity
        style={styles.expandArrow}
        onPress={() => {
          setIsExpand(!isExpand);
        }}>
        <Image source={isExpand ? arrowLeft : arrowRight} />
      </TouchableOpacity>
      {flagsData.map((v, i) => (
        <Flag
          key={i}
          source={v.source}
          selected={selected}
          isExpand={!isExpand}
          index={i}
          onPress={() => setIsSelected(i)}
        />
      ))}
    </View>
  );
};
export default Flags;
