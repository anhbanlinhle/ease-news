import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ratioH, ratioW } from '../../../utils/converter';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../../../constants/Icons';
import Tts from "react-native-tts"

const RedupModal = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(null);
  useImperativeHandle(ref, () => ({
    show: (data) => {
      setVisible(true)
      setData(data)
    },
    hide: () => setVisible(false),
  }));

  const handleOutsidePress = () => {
    setVisible(false);
  };

  if (!visible) return null; // Don't render anything if not visible

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.word}>{data?.word}</Text>
        <TouchableOpacity
        onPress={() => {
          Tts.speak(data?.word)
        }}
        style={styles.iconContainer}>
        {/* <LinearGradient colors={['#ff3a44', '#ff8086']} style={styles.icon}> */}
          <Icons.Voice width={ratioH(20)} height={ratioH(20)}/>
        {/* </LinearGradient> */}
      </TouchableOpacity>
      </View>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={[StyleSheet.absoluteFill, styles.container]}>
        <TouchableWithoutFeedback>
          <LinearGradient
            colors={['#FF9A9E', '#FAD0C4']}
            style={styles.modal}>
            <ScrollView
              contentContainerStyle={[styles.modalContent, { flexGrow: 1 }]}
              keyboardShouldPersistTaps="handled"
              style={{ maxHeight: '100%' }}
            >
              {renderHeader()}
              <Text style={styles.type}>{data?.type}</Text>
              <Text onPress={() => Tts.speak(data?.semantic)} style={styles.semantic}>{data?.semantic}</Text>
              {data?.examples?.slice(0, 2).map((item, index) => (
                <Text key={index} style={styles.example}>{'>'} {item}</Text>
              ))}
            </ScrollView>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modal: {
    width: '90%',
    height: '50%',
    borderRadius: ratioH(24)
  },
  background: {
    borderRadius: ratioH(24)
  },
  modalContent: {
    flex: 1,
    padding: ratioH(26),
    flexGrow: 1,
  },
  word: {
    fontSize: ratioH(24),
    fontWeight: 'bold',
    color: '#000'
  },
  type: {
    fontSize: ratioH(18),
    color: 'gray',
    fontStyle: 'italic',
    marginBottom: ratioH(20)
  },
  semantic: {
    fontSize: ratioH(20),
    color: '#000',
    fontWeight: '700',
    marginBottom: ratioH(20),
    textAlign: 'justify'
  },
  example: {
    fontSize: ratioH(16),
    color: '#000',
    marginVertical: ratioH(4),
    fontWeight: '500',
    fontStyle: 'italic'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    marginLeft: ratioH(12),
    alignItems: 'center',
  },
  icon: {
    width: ratioH(30),
    height: ratioH(30),
    borderRadius: ratioW(16),
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default RedupModal;
