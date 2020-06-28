import {StyleSheet, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //position: 'absolute',
    //backgroundColor: 'red',
  },
  botView: {
    width: width,
    height: height / 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    backgroundColor: 'white',
  },
  txt: {
    fontFamily: 'Optima',
    textTransform: 'uppercase',
    fontSize: 13,
  },
});
