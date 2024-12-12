import React, { forwardRef, useImperativeHandle, useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Pressable, Animated } from 'react-native';
import { ratioH, ratioW } from '../../../utils/converter';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../../../constants/Icons';
import Tts from "react-native-tts"
import Fonts from '../../../constants/Fonts';

const RedupModal = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(null);
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useImperativeHandle(ref, () => ({
    show: (data) => {
      setData(data)
      handleShow()
    },
    hide: () => handleHide(),
  }));

  const handleShow = () => {
    setVisible(true);
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  const handleHide = () => {
    Animated.timing(scaleAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setVisible(false)
    }, 200)
  }

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.word}>{data?.word}</Text>
        <TouchableOpacity
        onPress={() => {
          Tts.speak(data?.word)
        }}
        style={styles.iconContainer}>
        <Icons.Voice width={ratioH(20)} height={ratioH(20)}/>
      </TouchableOpacity>
      </View>
    )
  }

  return (
    <View
      pointerEvents={visible ? undefined : 'none'}
      style={[
        StyleSheet.absoluteFill,
        styles.container,
        { opacity: visible ? 1 : 0 }
      ]}
    >
      <View style={[StyleSheet.absoluteFill, styles.container]}>
        <Pressable onPress={handleHide} style={StyleSheet.absoluteFill}/>
        <Animated.View
          style={[
            {transform: [{ scale: scaleAnim }]},
            styles.modal
          ]}
        >
          <LinearGradient
            colors={['#FF9A9E', '#FAD0C4']}
            style={styles.background}>
            <ScrollView
              contentContainerStyle={[styles.modalContent]}
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
        </Animated.View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '50%',
  },
  background: {
    borderRadius: ratioH(24)
  },
  modalContent: {
    flex: 1,
    padding: ratioH(26),
    flexGrow: 1,
    marginBottom: ratioH(20)
  },
  word: {
    fontSize: ratioH(24),
    ...Fonts.black,
    color: '#000'
  },
  type: {
    fontSize: ratioH(18),
    color: 'gray',
    ...Fonts.mediumItalic,
    marginBottom: ratioH(20)
  },
  semantic: {
    fontSize: ratioH(20),
    color: '#000',
    ...Fonts.extraBold,
    marginBottom: ratioH(20),
    textAlign: 'justify'
  },
  example: {
    fontSize: ratioH(16),
    color: '#000',
    marginVertical: ratioH(4),
    ...Fonts.mediumItalic,
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
