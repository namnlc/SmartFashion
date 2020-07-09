import {StyleSheet, Dimensions} from 'react-native';
let {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
  },
  upload: {
    width: '40%',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    marginTop: 20,
  },
  txt: {
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: 'optima',
  },
  txtTouch: {
    marginLeft: 10,
    fontFamily: 'optima',
  },
  img: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: width / 2,
    height: height / 2,
  },
  containerFor: {
    height: height,
  },
  underLine: {
    backgroundColor: 'black',
  },
  txBar: {
    fontFamily: 'optima',
    fontSize: 13,
  },
});
