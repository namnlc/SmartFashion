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
  SafeAreaView,
} from 'react-native';
import Divider from 'react-native-divider';
import * as React from 'react';
import {styles, signUp, modal} from './Style';
import {validateAll} from 'indicative/validator';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Input, Card, FormValidationMessage, Icon} from 'react-native-elements';

const RenderSignUp = () => {
  const [isShow, setIsShow] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('Gender');
  const handleSignUp = () => {
    const rules = {
      email: 'required|email',
      password: 'required|string|min:8|max:20|confirmed',
    };
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={styles.container}
        scrollEnabled={true}>
        <Text style={signUp.txt}>
          Sign In or Sign Up to unlock and explore more features with Smart
          Fashion!
        </Text>
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
          <Icon
            type="font-awesome"
            name="facebook"
            color="#396AD6"
            onPress={() => console.log('ahihi')}
            reverseColor="white"
            reverse={true}
            size={20}
          />
          <Icon
            type="font-awesome"
            name="google"
            color="#FC5253"
            onPress={() => console.log('ahihi')}
            reverseColor="white"
            reverse={true}
            size={20}
          />
          <Icon
            type="font-awesome"
            name="twitter"
            color="#02B3F8"
            onPress={() => console.log('ahihi')}
            reverseColor="white"
            reverse={true}
            size={20}
          />
          <Icon
            type="font-awesome"
            name="apple"
            color="black"
            onPress={() => console.log('ahihi')}
            reverseColor="white"
            reverse={true}
            size={20}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
export default RenderSignUp;
