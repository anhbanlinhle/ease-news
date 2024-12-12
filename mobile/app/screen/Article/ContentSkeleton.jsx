import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { StyleSheet, View } from "react-native";
import { ratioH, ratioW } from "../../../utils/converter";

const ContentSkeleton = () => {
	return (
		<SkeletonPlaceholder
      borderRadius={10}
    >
      <View style={styles.container}>
        <View style={styles.paragraph} />
        <View style={styles.paragraph} />
        <View style={styles.paragraph} />
        <View style={styles.paragraph} />
        <View style={styles.paragraph} />
      </View>
		</SkeletonPlaceholder>
	)
}

export default ContentSkeleton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ratioW(16),
  },
  paragraph: {
    height: ratioH(80),
    width: ratioW(343),
    marginTop: ratioH(12),
  }
});