import FeedScreen from "../../screen/FeedScreen";
import ReelsScreen from "../../screen/ReelsScreen";
import TrendingScreen from "../../screen/TrendingScreen";
import ProfileScreen from "../../screen/ProfileScreen";

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
