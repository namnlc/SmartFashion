import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  touch: {},
  touchFlags: {
    borderColor: '#098FA8',
    borderWidth: 1,
    borderRadius: 20,
  },
  regionImg: {
    position: 'absolute',
    top: 5,
    left: 10,
    height: '5%',
    backgroundColor: '#F0ECF0',
    padding: 10,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    //paddingLeft: 15,
  },
});

export {styles};
