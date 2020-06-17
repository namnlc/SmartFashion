import {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import Divider from 'react-native-divider';
import * as React from 'react';
import {styles, signUp} from './Style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {IndexPath, Select, SelectItem, Button} from '@ui-kitten/components';
import {Icon} from 'react-native-elements';

const dataGender = ['Male', 'Female', 'Others'];
var dataAge = [];
for (var i = 1; i <= 100; i++) {
  dataAge.push(i);
}
const RenderSignUp = () => {
  const [isBirth, setIsBirth] = useState(false);
  //const genderState = useSelectState();
  const renderOption = title => <SelectItem title={title} />;
  const [selectGender, setSelectGender] = React.useState('');
  const displayValue = dataGender[selectGender.row];
  //const renderOptions = () => <Text style={{color:'red'}}>asdd</Text>;
  const [selectAge, setSelectAge] = React.useState('');
  const displayAge = dataAge[selectAge.row];
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
        <Select
          style={{width: 310}}
          placeholder="Gender"
          //status="primary"
          value={displayValue}
          selectedIndex={selectGender}
          onSelect={index => setSelectGender(index)}>
          {dataGender.map(renderOption)}
        </Select>
        <Select
          style={{width: 310, marginTop: 20}}
          placeholder="Age"
          value={displayAge}
          selectedIndex={selectAge}
          onSelect={index => setSelectAge(index)}>
          {dataAge.map(renderOption)}
        </Select>

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

export default RenderSignUp;
