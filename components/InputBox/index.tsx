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

const InputBox = () => {
  const [message, setMessage] = useState('');

  const onMicrophonePress = () => {
    console.warn('microphone pressed');
  };

  const onSendPress = () => {
    console.warn(`sending: ${message}`);
    setMessage('');
  };
  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name='laugh-beam' size={24} color='grey' />
        <TextInput
          style={styles.textInput}
          multiline
          placeholder='Type a message'
          value={message}
          onChangeText={setMessage}
        />
        <Entypo name='attachment' size={24} color='grey' style={styles.icon} />
        {!message && (
          <Fontisto name='camera' size={24} color='grey' style={styles.icon} />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress}>
          {!message ? (
            <MaterialCommunityIcons name='microphone' size={28} color='white' />
          ) : (
            <MaterialIcons name='send' size={28} color={'white'} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputBox;
