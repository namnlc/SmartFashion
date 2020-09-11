import React, {useState} from 'react';
import {View, TouchableOpacity, LayoutAnimation, Image} from 'react-native';
import america from '../../../../../res/images/america.png';
import japan from '../../../../../res/images/japan.png';
import vietnam from '../../../../../res/images/vietnam.png';
import arrowLeft from '../../../../../res/images/arrowleft.png';
import arrowRight from '../../../../../res/images/arrowright.png';
import {styles} from './Style';
import Flag from './flag/Flag';

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
  const [expand, setExpand] = useState(false);
  const [selected, setIsSelected] = useState(0);

  const animFlag = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpand(!expand);
  };

  return (
    <View style={[styles.regionImg, styles.flag]}>
      <TouchableOpacity style={styles.expandArrow} onPress={animFlag}>
        <Image source={expand ? arrowLeft : arrowRight} />
      </TouchableOpacity>
      {flagsData.map((v, i) => (
        <Flag
          key={i}
          sourceImage={v.source}
          selected={selected}
          isExpand={expand}
          index={i}
          clicked={() => setIsSelected(i)}
        />
      ))}
    </View>
  );
};
export default Flags;
