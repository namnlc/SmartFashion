import {Dimensions, StyleSheet} from 'react-native';

const {width: w, height: h} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    width: w / 2,
  },
  img: {
    display: 'flex',
    height: h / 3,
    alignSelf: 'stretch',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  name: {
    fontFamily: 'optima',
    fontSize: 14,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
