import { FlatList, StyleSheet } from 'react-native';
import ContactListItem from '../components/ContactListItem';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Users from '../data/Users';

export default function Contacts({ navigation }: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={Users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
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
  }
});
