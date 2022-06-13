import moment from 'moment';
import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from '../../types';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export type contactListItemProps = {
  user: User;
};

const ContactListItem = (props: contactListItemProps) => {
  const { user } = props;
  const navigation = useNavigation();
  const onClick = () => {};
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
