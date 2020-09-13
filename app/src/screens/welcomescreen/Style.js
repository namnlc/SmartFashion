import {StyleSheet, Dimensions} from 'react-native';
const {width: w, height: h} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    flex: 2,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img: {
    flex: 1,
  },
  imgLogo: {
    width: w / 10,
    height: h / 22,
  },
});
