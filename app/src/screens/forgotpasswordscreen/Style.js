import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
  },
  header: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  txt: {
    fontFamily: 'optima',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  txHeader: {
    fontSize: 15,
  },
  txButton: {
    fontFamily: 'optima',
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: 'black',
  },
  btn: {
    backgroundColor: 'white',
    borderColor: '#838383',
    borderWidth: 1,
  },
  txInput: {
    fontFamily: 'optima',
    fontSize: 15,
  },
  txLabel: {
    fontFamily: 'optima',
    fontSize: 15,
    fontWeight: '100',
    color: '#545454',
  },
});
