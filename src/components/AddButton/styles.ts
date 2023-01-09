import {StyleSheet} from 'react-native';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(10),
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 2,
  },
});

export default styles;
