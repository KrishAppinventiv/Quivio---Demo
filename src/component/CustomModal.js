import {StyleSheet, Text, View, Modal, Image, Pressable} from 'react-native';
import React from 'react';

const CustomModal = props => {
  const {
    modalVisible,
    onRequestClose,
    buttonText = 'Okay',
    headText,
    TextContent,
    Img,
    handleModal,
    Imgbg,
    customModalViewStyle,
  } = props;
  return (
    <Modal
      // transparent={true}
      animationType="fade"
      visible={modalVisible}
      onRequestClose={onRequestClose}
      {...props}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          {/* <View style={Imgbg == true ? styles.modalViews : styles.modalView}> */}
          <View style={[styles.modalView, customModalViewStyle]}>
            <Image source={Img} />
          </View>
          <Text style={styles.modalheading}>{headText}</Text>
          <View>
            <Text style={styles.modalText1}>{TextContent}</Text>
          </View>
          <Pressable style={styles.modalButton} onPress={handleModal}>
            <Text style={styles.modalButtonText}>{buttonText}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalView: {
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F79E98',
    opacity: 0.5,
  },
  modalViews: {
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3F7FF',
    opacity: 0.5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    height: '31%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalheading: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 15,
    fontWeight: '700',
    lineHeight: 26,
  },

  modalText1: {
    marginHorizontal: 35,
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '300',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#4D5876',
    lineHeight: 19.5,
    marginBottom: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A7BBB',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});
