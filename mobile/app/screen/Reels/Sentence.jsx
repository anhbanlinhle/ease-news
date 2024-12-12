import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ratioH, ratioW } from '../../../utils/converter';
import { useDispatch } from 'react-redux';
import { getTextToImageAction } from '../../../redux/reducers/newsSlice';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Tts from 'react-native-tts';

const Sentence = ({ sentence }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  if (!sentence || !sentence?.trim()?.length) return null;

  useEffect(() => {
    dispatch(getTextToImageAction({
      text: sentence?.trim(),
      onSuccess: (image) => {
        if (!image?.reply) {
          setImage('https://cdn.tgdd.vn/hoi-dap/580732/loi-404-not-found-la-gi-9-cach-khac-phuc-loi-404-not-3-800x534.jpg');
        }
        else {
          setImage(image?.reply);
        }
      },
      onFail: (error) => {
        console.log(error);
        setImage('https://cdn.tgdd.vn/hoi-dap/580732/loi-404-not-found-la-gi-9-cach-khac-phuc-loi-404-not-3-800x534.jpg');
      }
    }));
  }, [sentence]);

  const renderImage = () => {
    if (image) {
      return <Image source={{ uri: image }} resizeMode="cover" width={ratioW(343)} height={ratioH(343)} style={styles.image} />;
    }
    return (
      <View style={styles.image}>
        <ActivityIndicator size="large" color="red" />
      </View>
    )
  }

  return (
    <TouchableOpacity
      onLongPress={() => {
        Tts.speak(sentence?.trim());
      }}
      style={styles.container}>
      <Text style={styles.text}>{sentence?.trim()}</Text>
      {renderImage()}
    </TouchableOpacity>
  )
}

export default Sentence;

const styles = StyleSheet.create({
  container: {
    marginVertical: ratioH(8),
    marginHorizontal: ratioW(8),
    backgroundColor: "#ff8086",
    padding: ratioH(8),
    borderRadius: ratioH(16),
  },
  text: {
    fontSize: ratioH(12),
    fontWeight: "bold",
  },
  image: {
    marginTop: ratioH(8),
    width: ratioW(343),
    height: ratioH(343),
    borderRadius: ratioH(16),
    alignItems: "center",
    justifyContent: "center",
  }
})
