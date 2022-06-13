import moment from 'moment';
import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export type chatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: chatListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  const navigation = useNavigation();
  const onClick = () => {
    // console.log(navigation);
    navigation.navigate('ChatRoomScreen', { id: chatRoom.id, name: user.name });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
