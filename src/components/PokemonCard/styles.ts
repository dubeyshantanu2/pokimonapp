import {StyleSheet} from 'react-native';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/normalize';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginHorizontal: pixelSizeHorizontal(16),
    marginVertical: pixelSizeVertical(10),
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: pixelSizeVertical(10),
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: fontPixel(16),
    fontWeight: 'bold',
  },
});

export default styles;
