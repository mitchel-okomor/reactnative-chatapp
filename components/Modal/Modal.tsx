import { StyleSheet, Modal } from 'react-native';
import React from 'react';
import { Text, View, Button } from '../../components/Themed';

type modalProps = {
  title: string;
  ModalBody: React.FC;
  modalOpen: boolean;
  setModalOpen: any;
};

export default function Login({
  title,
  ModalBody,
  modalOpen,
  setModalOpen
}: modalProps) {
  return (
    <View style={styles.container}>
      <Modal
        style={styles.modalContainer}
        animationType='slide'
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Button title='Cancel' onPress={() => setModalOpen(false)} />
          </View>
          <View style={styles.modalBody}>
            <ModalBody />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modalBody: {
    height: '50%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
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
    width: '100%'
  },
  modalContainer: {
    height: '100%'
  }
});
