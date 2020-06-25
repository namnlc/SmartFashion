import {StyleSheet, Dimensions} from 'react-native';
let {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
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
    fontFamily: 'Optima',
  },
  txtTouch: {
    marginLeft: 10,
    fontFamily: 'Optima',
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
});
