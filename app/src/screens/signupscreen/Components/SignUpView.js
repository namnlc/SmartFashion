import {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';
import Divider from 'react-native-divider';
import facebook from '../../../../res/images/facebook.png';
import printer from '../../../../res/images/printer.png';
import instagram from '../../../../res/images/instagram.png';
import twitter from '../../../../res/images/twitter.png';
import google from '../../../../res/images/google.png';
import * as React from 'react';
import {styles, signUp} from './Style';

const RenderSignUp = () => {
  const [isShow, setIsShow] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('Gender');
  return (
    <View style={styles.container}>
      <Text style={signUp.txt}>Sign In or Sign Up to upload your model!</Text>
      <TouchableOpacity
        style={[
          signUp.textGender,
          signUp.txtInput,
          isVisible ? styles.showGender : null,
        ]}
        onPress={() => setIsVisible(!isVisible)}
        activeOpacity={0.5}>
        <Text style={signUp.txtDrop}>{text}</Text>
      </TouchableOpacity>
      {isVisible ? (
        <ModalGender
          isVisible={isVisible}
          onPress={() => {
            setIsVisible(!isVisible);
          }}
          txt={() => setText(text)}
        />
      ) : null}

      <TouchableOpacity
        style={[signUp.txtInput, signUp.textGender]}
        onPress={() => setIsBirth(!isBirth)}>
        <Text style={signUp.txtDrop}>Age</Text>
        {isBirth === true ? (
          <View style={{height: 100}}>{/*<BirthModal />*/}</View>
        ) : null}
      </TouchableOpacity>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#696969"
        style={[signUp.txtInput, {zIndex: -2}]}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#696969"
        style={[signUp.txtInput, {zIndex: -2}]}
      />
      <TouchableOpacity style={signUp.button}>
        <Text style={signUp.txtButton}>Get a code</Text>
      </TouchableOpacity>

      <View style={signUp.divider}>
        <Divider orientation="center" color="#696969">
          Or
        </Divider>
      </View>
      <View style={signUp.icon}>
        {photoData.map((v, i) => (
          <Image style={signUp.img} source={v.source} key={i} />
        ))}
      </View>
    </View>
  );
};
const genderData = [
  {
    title: 'Female',
  },
  {
    title: 'Male',
  },
  {
    title: 'Others',
  },
];

export const ModalGender = ({isVisible, onPress, txt}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={modal.centeredView}>
        <View style={modal.modalView}>
          <Text style={modal.modalText}>Hello World!</Text>
          {genderData.map((v, i) => (
            <TouchableOpacity key={i} onPress={onPress}>
              <Text>{v.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};
const photoData = [
  {
    source: facebook,
  },
  {
    source: printer,
  },
  {
    source: instagram,
  },
  {
    source: twitter,
  },
  {
    source: google,
  },
];

const modal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default RenderSignUp;
