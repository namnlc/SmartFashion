import React, {useState} from 'react';
import {View} from 'react-native';
import Picker from 'react-native-picker';
import {Input, Icon} from 'react-native-elements';
import {styles} from './Style';
export const PickBottomGender = () => {
  const [isGender, setGender] = useState('Gender');
  Picker.init({
    pickerTitleText: '',
    pickerCancelBtnText: 'GENDER',
    pickerCancelBtnColor: [255, 255, 255, 1],
    pickerConfirmBtnColor: [255, 255, 255, 1],
    pickerConfirmBtnText: 'Done',
    pickerFontSize: 18,
    pickerData: gender,
    pickerTitleColor: [255, 255, 255, 1],
    pickerFontFamily: 'Optima',
    pickerBg: [151, 151, 151, 1],
    pickerToolBarBg: [151, 151, 151, 1],
    pickerRowHeight: 34,
    wheelFlex: [1, 1],
    pickerFontColor: [255, 255, 255, 1],
    selectedValue: ['Male'],
    onPickerConfirm: (gender) => {
      setGender(gender);
      //Picker.hide();
    },
  });
  Picker.hide();
  return (
    <View>
      <Input
        placeholderTextColor="#616161"
        disabled={true}
        rightIcon={
          <Icon
            name="arrow-down"
            type="simple-line-icon"
            size={13}
            onPress={() => Picker.show()}
          />
        }
        inputStyle={styles.txt}
        value={isGender.toString()}
      />
    </View>
  );
};

export const PickBottomDate = () => {
  const [isBirth, setBirth] = useState('Date of birth');
  Picker.init({
    pickerTitleText: '',
    pickerCancelBtnText: 'Birth',
    pickerCancelBtnColor: [255, 255, 255, 1],
    pickerConfirmBtnColor: [255, 255, 255, 1],
    pickerConfirmBtnText: 'Done',
    pickerFontSize: 18,
    pickerData: createDate(),
    pickerTitleColor: [255, 255, 255, 1],
    pickerFontFamily: 'Optima',
    pickerBg: [151, 151, 151, 1],
    pickerToolBarBg: [151, 151, 151, 1],
    pickerRowHeight: 34,
    wheelFlex: [1, 1, 1],
    pickerFontColor: [255, 255, 255, 1],
    selectedValue: ['1997', '04', '24'],
    onPickerConfirm: (birth) => {
      setBirth(birth);
    },
  });
  Picker.hide();
  return (
    <View>
      <Input
        placeholderTextColor="#616161"
        disabled={true}
        rightIcon={
          <Icon
            name="arrow-down"
            type="simple-line-icon"
            size={13}
            onPress={() => Picker.show()}
          />
        }
        inputStyle={styles.txt}
        value={isBirth.toString()}
      />
    </View>
  );
};

const createDate = (startYear = 1950, len = 70) => {
  const endYear = startYear + len;
  let dateData = [];
  for (let y = startYear; y <= endYear; y++) {
    let month = [];
    for (let m = 1; m <= 12; m++) {
      let day = [];
      if (m === 2) {
        for (let d = 1; d < 29; d++) {
          day.push(d < 10 ? '0' + d : '' + d);
        }
        if ((y % 4 === 0 && y % 100 > 0) || y % 400 === 0) {
          day.push('29');
        }
      } else if ([1, 3, 5, 7, 8, 10, 12].findIndex((it) => it === m) >= 0) {
        for (let d = 1; d <= 31; d++) {
          day.push(d < 10 ? '0' + d : '' + d);
        }
      } else {
        for (let d = 1; d <= 30; d++) {
          day.push(d < 10 ? '0' + d : '' + d);
        }
      }
      let _month = {};
      _month[m < 10 ? '0' + m : '' + m] = day;
      month.push(_month);
    }
    let _year = {};
    _year['' + y] = month;
    dateData.push(_year);
  }
  return dateData;
};
const gender = ['Male', 'Female', 'Others'];
