import React from 'react';
import {View} from 'react-native';
import {ImageView, Title, Name, styles} from './Style';
import {Icon} from 'react-native-elements';
const Card = ({onLike, onTry, onPress, title, name, sourceImage}) => {
  return (
    <View style={styles.container}>
      <View>
        <ImageView
          source={sourceImage}
          resizeMode="contain"
          style={styles.img}
          onPress={onPress}
        />
        <Title>{title}</Title>
        <View style={styles.footer}>
          <Name>{name}</Name>
          <Icon name="heart" type="feather" onPress={onTry} />
        </View>
      </View>
    </View>
  );
};

export default Card;
