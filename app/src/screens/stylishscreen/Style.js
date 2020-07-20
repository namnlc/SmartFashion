import {StyleSheet, Dimensions} from 'react-native';
let {width, height} = Dimensions.get('window');
import styled from 'styled-components';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableView from '../../components/scrollableview/Scrollable';
import {Button} from 'react-native-elements';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  upload: {
    width: width / 3,
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
  tx: {
    fontFamily: 'optima',
  },
});

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
  /* background-color: red; */
`;

const TextHeader = styled.Text`
  font-family: optima;
`;

const Body = styled.View`
  flex: 1;
  justify-content: space-around;
  /* background-color: blue; */
  padding: 10px;
  align-items: center;
`;

const Footer = styled.View`
  flex: 1;
  background-color: green;
`;

const ImageView = styled.Image`
  resize-mode: contain;
  height: 75%;
`;

const ImageWardRobe = styled.Image`
  resize-mode: contain;
  height: 50%;
`;

const ButtonView = styled.Text`
  color: ${(props) => (props.active ? 'black' : 'pink')};
`;

const Title = styled.Text`
  font-size: 15px;
  font-family: optima;
  text-align: center;
  margin: 0 10px 10px 0;
`;

const StyledButton = styled(Button).attrs({
  buttonStyle: {
    backgroundColor: 'red',
  },
})``;

const Scrollable = styled(ScrollableView).attrs({
  textStyle: {
    fontFamily: 'optima',
    fontSize: 13,
  },
  activeTabs: {
    borderBottomWidth: 2,
    //alignSelf: 'center',
  },
})``;

const ScrollableFooter = styled(ScrollableView).attrs({
  textStyle: {
    fontFamily: 'optima',
    fontSize: 13,
  },
  activeTabs: {
    //borderBottomWidth: 2,
    //alignSelf: 'center'
  },
})`
  width: 50%;
  border-color: transparent;
`;

export {
  Container,
  TextHeader,
  Body,
  Footer,
  ImageView,
  ButtonView,
  StyledButton,
  Scrollable,
  SafeAreaView,
  Title,
  ImageWardRobe,
  ScrollableFooter,
};
