import {StyleSheet, Dimensions} from 'react-native';

const {width: w, height: h} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: w / 8,
    height: h / 8,
  },
  viewFirst: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tx: {
    fontFamily: 'optima',
  },
});
