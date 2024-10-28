import FeedScreen from "../../screen/FeedScreen";
import ReelsScreen from "../../screen/ReelsScreen";
import TrendingScreen from "../../screen/TrendingScreen";
import ProfileScreen from "../../screen/ProfileScreen";

const TabScreen = [
  {
    route: "Feed", label: "Feed", screen: FeedScreen, color: '#A6A6A6'
  },
  {
    route: "Reels", label: "Reels", screen: ReelsScreen, color: '#A6A6A6'
  },
  {
    route: "Trending", label: "Trending", screen: TrendingScreen, color: '#A6A6A6'
  },
  {
    route: "Profile", label: "Profile", screen: ProfileScreen, color: '#A6A6A6'
  }
]

export default TabScreen
