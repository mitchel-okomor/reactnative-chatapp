import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, Button } from '../components/Themed';
import InputBox from '../components/InputBox/TextInput';
import Modal from '../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';

type stateProp = {
  email: string;
  password: string;
};

export default function Login() {
  const initialState: stateProp = { email: '', password: '' };
  const [input, setInput] = useState(initialState);
  const [modalOpen, setModalOpen] = useState(false);
  const { user, isLoading, isAuth } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const onRegisterPress = () => {
    navigation.navigate('Register');
  };

  const handleTextChange = (text: string, fieldName: string) => {
    setInput({ ...input, [fieldName]: text });
  };

  const loginData = [
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

  const SignUpOptions = () => (
    <View>
      <Button
        title='Sign up with email and pasword'
        onPress={() => {
          onRegisterPress();
          setModalOpen(false);
        }}
      />
      <Button
        title='Sign up with Google'
        onPress={() => {
          onRegisterPress();
          setModalOpen(false);
        }}
      />
    </View>
  );

  useEffect(() => {
    if (isAuth) {
      navigation.navigate('Root');
    }

    return () => {};
  }, [isAuth]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
        <Button title='Register' onPress={() => setModalOpen(true)} />
      </View>
      {/* <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='/screens/TabTwoScreen.tsx' /> */}
      {/* <Modal
        style={styles.modalContainer}
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}></View>
          <Button title='Cancel' onPress={() => setModal(false)} />
          Cancel
        </View>
      </Modal> */}
      <Modal
        title='Choose your signup preferece'
        ModalBody={SignUpOptions}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
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
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: 'white'
  },
  modalContainer: {
    height: '100%'
  }
});
