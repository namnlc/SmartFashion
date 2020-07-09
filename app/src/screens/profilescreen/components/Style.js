import {StyleSheet, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  txt: {
    fontSize: 18,
    fontFamily: 'optima',
    marginLeft: 20,
  },
  contentProfile: {
    justifyContent: 'space-around',
    height: height / 2,
    width: width / 2,
    //backgroundColor: 'blue',
  },
  touchProfile: {
    marginRight: 40,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
});
