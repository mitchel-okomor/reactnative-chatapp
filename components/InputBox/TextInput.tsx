import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { styles } from './style';

type inputProps = {
  onTextChange: Function;
  value: string;
  placeHolder: string;
  isMultiline: boolean;
  secureTextEntry: boolean;
  fieldName: string;
};

const InputBox = ({
  onTextChange,
  value,
  placeHolder,
  isMultiline,
  fieldName,
  secureTextEntry
}: inputProps) => {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name='laugh-beam' size={24} color='grey' />
        <TextInput
          style={styles.textInput}
          multiline={isMultiline}
          placeholder={placeHolder}
          value={value}
          secureTextEntry
          onChangeText={(text) => onTextChange(text, fieldName)}
        />
      </View>
    </View>
  );
};

export default InputBox;
