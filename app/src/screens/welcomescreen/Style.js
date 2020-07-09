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
  btn: {
    width: w / 3,
    height: h / 20,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  txLogin: {
    fontFamily: 'Optima',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  tx: {
    fontFamily: 'Optima',
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
  },
  img: {
    flex: 1,
  },
  imgLogo: {
    width: w / 10,
    height: h / 22,
  },
  txt2: {
    fontSize: 15,
    fontFamily: 'Optima',
    color: 'black',
    textTransform: 'uppercase',
  },
  txFooter: {
    alignItems: 'center',
  },
});
