import { FlatList, StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';

export default function ChatsScreen({
  navigation
}: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
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
