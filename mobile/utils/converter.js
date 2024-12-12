import {Dimensions} from 'react-native'
import moment from 'moment';

export const device_width = Dimensions.get('window').width
export const device_height = Dimensions.get('window').height

export const ratioW = (elementWidth) => {
  return (elementWidth * device_width) / 375;
}
export const ratioH = (elementWidth) => {
  return (elementWidth * device_height) / 812;
}

export const formatTimestamp = (timestamp) => {
  return moment(timestamp).format('dddd, D MMMM YYYY');
};
