import {StyleSheet, Dimensions} from 'react-native';

const {width: w, height: h} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    width: w,
    height: h / 3,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  txtHeader: {
    fontFamily: 'optima',
    fontSize: 18,
  },
  txtBody: {
    fontFamily: 'optima',
    fontSize: 16,
  },
  body: {
    justifyContent: 'space-around',
    marginTop: 20,
  },
  colorProduct: {
    borderRadius: 50,
    borderWidth: 0.4,
    height: 20,
    width: 20,
  },
  divider: {
    width: 30,
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: 'black',
    marginVertical: 10,
  },
  footerProduct: {
    width: w,
    height: h,
  },
  txt: {
    fontFamily: 'optima',
    fontSize: 16,
  },
  divi: {
    alignItems: 'center',
    marginHorizontal: 20,
    borderWidth: 0.4,
    borderColor: '#616161',
    marginVertical: 30,
  },
});
