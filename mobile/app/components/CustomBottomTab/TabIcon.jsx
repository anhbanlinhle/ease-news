import React from 'react'
import {View, StyleSheet} from 'react-native'
import Icons from "../../../constants/Icons";
import {ratioH, ratioW} from "../../../utils/converter";

const iconMap = {
  Feed: { focused: Icons.FeedFocused, default: Icons.Feed, size: { width: ratioW(22), height: ratioH(22) } },
  Reels: { focused: Icons.ReelsFocused, default: Icons.Reels, size: { width: ratioW(26), height: ratioH(26) } },
  Trending: { focused: Icons.TrendingFocused, default: Icons.Trending, size: { width: ratioW(22), height: ratioH(22) } },
  Profile: { focused: Icons.ProfileFocused, default: Icons.Profile, size: { width: ratioW(22), height: ratioH(22) } },
};

const TabIcon = ({screen, focus}) => {
  const icon = iconMap[screen];
  if (!icon) return null;

  const IconComponent = focus ? icon.focused : icon.default;
  return (
    <View style={styles.container}>
      <IconComponent width={icon.size.width} height={icon.size.height} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default TabIcon;
