import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './Style';
import {Icon} from 'react-native-elements';
const Card = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={props.sourceImage}
          resizeMode="contain"
          style={styles.img}
          onPress={props.clicked}
        />
        <Text>{props.title}</Text>
        <View style={styles.footer}>
          <Text>{props.name}</Text>
          <Icon name="heart" type="feather" onPress={props.buttonTry} />
        </View>
      </View>
    </View>
  );
};

export default Card;
