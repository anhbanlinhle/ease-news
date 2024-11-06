import FeedScreen from "../../screen/Feed/FeedScreen";
import ReelsScreen from "../../screen/ReelsScreen";
import TrendingScreen from "../../screen/Trending/TrendingScreen";
import ProfileScreen from "../../screen/Profile/ProfileScreen";

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
