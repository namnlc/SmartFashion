import {StyleSheet, Dimensions} from 'react-native';
let {width: w} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  content: {
    marginTop: 10,
    alignSelf: 'center',
    width: w / 2,
    top: -32,
  },
  txt: {
    fontFamily: 'Optima',
  },
  txtSmall: {
    fontSize: 14,
  },
  txtMedium: {
    fontSize: 18,
  },
  txtLarge: {
    fontSize: 20,
  },
  txtSign: {
    textTransform: 'uppercase',
    fontSize: 18,
  },
  colorSign: {
    color: 'black',
  },
  txtForgot: {
    marginLeft: 10,
    color: '#616161',
    marginBottom: 20,
  },
  contentSign: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  btnSignIn: {
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
  btnSignUp: {
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
  },
  viewIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewIconSignUp: {
    top: -10,
  },
  apple: {
    backgroundColor: 'black',
  },
  viewHeader: {
    width: w,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    marginLeft: 10,
    height: 33,
    width: 33,
  },
  x: {
    marginRight: 10,
  },
  sizeIcon: {
    width: 35,
    height: 35,
  },
  txParam: {
    color: '#616161',
  },
  txHeader: {
    paddingBottom: 10,
  },
  pickDate: {
    backgroundColor: 'transparent',
  },
});
