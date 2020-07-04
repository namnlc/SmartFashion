import {Dimensions, StyleSheet} from 'react-native';
let {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    //backgroundColor: 'red',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 20,
  },
  txtHeader: {
    fontFamily: 'Optima',
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    resizeMode: 'contain',
    width: width - 20,
    height: height / 3,
  },
  txtList: {
    fontSize: 16,
    fontFamily: 'Optima',
    marginLeft: 10,
  },
  viewList: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  txtSign: {
    fontSize: 14,
    fontFamily: 'Optima',
    color: '#8A8A8A',
    //marginBottom: 30,
  },
  touchSign: {
    borderRadius: 10,
    borderWidth: 1,
    //height: '25%',
    width: width / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#8A8A8A',
    padding: 10,
  },
  txtTouch: {
    fontFamily: 'Optima',
  },
  divider: {
    height: 1,
    width: width - 40,
    backgroundColor: '#8A8A8A',
  },
  txtSignin: {
    fontFamily: 'Optima',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentList: {
    marginVertical: 10,
  },
});
