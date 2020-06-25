import {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import Divider from 'react-native-divider';
import * as React from 'react';
import {styles, signUp, signIn} from './Style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Select, SelectItem, Input} from '@ui-kitten/components';
import {Icon} from 'react-native-elements';

const dataGender = ['Male', 'Female', 'Others'];
var dataAge = [];
for (var i = 1; i <= 100; i++) {
  dataAge.push(i);
}
const RenderSignUp = () => {
  const renderOption = title => <SelectItem key={title} title={title} />;
  const [selectGender, setSelectGender] = React.useState('');
  const [selectAge, setSelectAge] = React.useState('');
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const displayAge = dataAge[selectAge.row];
  const displayValue = dataGender[selectGender.row];
  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        type="material"
        name={secureTextEntry ? 'visibility-off' : 'visibility'}
        color="#BEBEBE"
      />
    </TouchableWithoutFeedback>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={styles.container}
        scrollEnabled={true}>
        <Text style={signIn.txt}>
          Sign In or Sign Up to unlock and explore more features with Smart
          Fashion!
        </Text>
        <Select
          style={signUp.selectGender}
          placeholder="Gender"
          //status="alternative"
          value={displayValue}
          selectedIndex={selectGender}
          onSelect={index => setSelectGender(index)}>
          {dataGender.map(renderOption)}
        </Select>
        <Select
          style={signUp.selectGender}
          placeholder="Age"
          value={displayAge}
          selectedIndex={selectAge}
          onSelect={index => setSelectAge(index)}>
          {dataAge.map(renderOption)}
        </Select>
        <Input
          size="medium"
          placeholder="Email"
          value={username}
          placeholderTextColor="#696969"
          style={signUp.txtInput}
          //secureTextEntry={secureTextEntry}
          onChangeText={nextValue => setUserName(nextValue)}
        />
        <Input
          style={signUp.txtInput}
          value={password}
          size="medium"
          placeholderTextColor="#696969"
          placeholder="Password"
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={nextValue => setPassword(nextValue)}
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

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];
export default RenderSignUp;
