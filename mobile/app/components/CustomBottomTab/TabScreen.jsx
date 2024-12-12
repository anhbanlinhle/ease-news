import FeedScreen from "../../screen/Feed/FeedScreen";
import ProfileScreen from "../../screen/Profile/ProfileScreen";
import ReelsScreen from "../../screen/Reels/ReelsScreen";
import TrendingScreen from "../../screen/Trending/TrendingScreen";

const TabScreen = [
  {
    route: "Feed", label: "Feed", screen: FeedScreen
  },
  {
    route: "Reels", label: "Reels", screen: ReelsScreen
  },
  {
    route: "Trending", label: "Trending", screen: TrendingScreen
  },
  {
    route: "Profile", label: "Profile", screen: ProfileScreen
  }
]

export default TabScreen
