import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {Icon} from 'react-native-elements';
export const Sex = ({title, image, onPress, active, index}) => {
  const touchStyle = [
    index === active && {
      borderColor: '#098FA8',
      borderWidth: 1.5,
    },
    [styles.touch],
    {
      backgroundColor: index === active ? 'white' : '#EDF1FA',
    },
  ];
  const styleText = [
    {fontSize: 12, fontWeight: index === active ? 'bold' : null, top: 5},
  ];
  const styleImage = [{resizeMode: 'contain', width: 40, height: 40}];
  return (
    <TouchableOpacity style={touchStyle} onPress={onPress}>
      {index === active && (
        <View style={styles.check}>
          <Icon
            type="font-awesome5"
            name="check-circle"
            size={28}
            color="#098FA8"
          />
        </View>
      )}
      <Image source={image} style={styleImage} />
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 15,
    width: 67,
    height: 74,
  },
  check: {
    left: 50,
    top: -8,
    position: 'absolute',
  },
});
