import {StyleSheet, Dimensions} from 'react-native';

let {width: w, height: h} = Dimensions.get('window');

export const btnStyle = StyleSheet.create({
  medium: {
    width: w / 2,
  },
  large: {
    width: w - 40,
  },
  container: {
    borderWidth: 1,
    borderColor: '#eee',
    width: w / 3,
  },
  title: {
    fontFamily: 'optima',
    fontSize: 16,
  },
  black: {
    backgroundColor: 'black',
    color: 'white',
  },
  white: {
    backgroundColor: 'white',
    color: 'black',
  },
  upper: {
    textTransform: 'uppercase',
  },
});
