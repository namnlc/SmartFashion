import {StyleSheet, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  content: {
    position: 'absolute',
  },
  txt: {
    fontFamily: 'Optima',
    textTransform: 'uppercase',
    fontSize: 15,
  },
  txtCate: {
    fontFamily: 'Optima',
    fontSize: 13,
  },
  iconMinius: {
    fontSize: 50,
    height: 30,
    top: -15,
  },
  yourChoice: {
    marginTop: 10,
    width: width / 2,
  },
  categories: {
    marginTop: 10,
    width: width / 2 + 65,
  },
});
