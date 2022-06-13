import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, View, Button } from '../components/Themed';
import InputBox from '../components/InputBox/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../store/actions/actions';
import { State } from '../types';
import Alert from '../components/Dialog/Alert';
import Loader from '../components/Loader/Loader';

type stateProp = {
  email: string;
  password: string;
};

export default function Login() {
  const initialState: stateProp = { email: '', password: '' };
  const [input, setInput] = useState(initialState);
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state: any) => state.user);
  console.log('State', isLoading);
  const onRegisterPress = () => {
    dispatch(signUpUser(dispatch));
  };

  const handleTextChange = (text: string, fieldName: string) => {
    setInput({ ...input, [fieldName]: text });
  };

  const loginData = [
    {
      fieldName: 'firstname',
      placeHolder: 'first name',
      isMultiline: false,
      secureTextEntry: false
    },
    {
      fieldName: 'last name',
      placeHolder: 'last name',
      isMultiline: false,
      secureTextEntry: false
    },
    {
      fieldName: 'email',
      placeHolder: 'email',
      isMultiline: false,
      secureTextEntry: false
    },
    {
      fieldName: 'password',
      placeHolder: 'password',
      isMultiline: false,
      secureTextEntry: true
    }
  ];

  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View>
        {loginData.map((item) => (
          <InputBox
            onTextChange={handleTextChange}
            value={input[item.fieldName]}
            placeHolder={item.placeHolder}
            isMultiline={item.isMultiline}
            fieldName={item.fieldName}
            secureTextEntry={item.secureTextEntry}
          />
        ))}

        <Button title='Login' onPress={() => {}} />
        <Button title='Register' onPress={onRegisterPress} />
      </View>
      {/* <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='/screens/TabTwoScreen.tsx' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
