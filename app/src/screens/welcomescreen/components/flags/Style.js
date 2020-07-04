import {StyleSheet} from 'react-native';
//let {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  touch: {},
  touchFlags: {
    borderColor: '#098FA8',
    borderWidth: 1,
    borderRadius: 20,
  },
  regionImg: {
    alignSelf: 'flex-start',
    //width: width / 2,
    backgroundColor: '#F0ECF0',
    padding: 10,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    //backgroundColor: 'red',
  },

  btnSelected: {
    borderColor: '#098FA8',
    borderWidth: 1,
  },
  notSelected: {
    borderWidth: 2,
    borderColor: '#f0ecf0',
    borderRadius: 25,
  },
  hide: {
    display: 'none',
  },
  toggle: {
    // paddingLeft: 15,
  },
  imgFlags: {
    width: 20,
    height: 20,
  },
  expandArrow: {
    justifyContent: 'center',
  },
  flag: {
    paddingRight: 20,
  },
});

export {styles};
