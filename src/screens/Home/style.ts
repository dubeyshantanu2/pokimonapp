import {StyleSheet} from 'react-native';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
} from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lemonchiffon',
    // justifyContent: 'flex-start',
    // alignItems: 'stretch',
  },
  headerText: {
    fontSize: fontPixel(20),
    // backgroundColor: 'red',
    // width: '100%',
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  // separator: {
  //   paddingVertical: heightPixel(5),
  // },
});

export default styles;

// container: {
//   flex: 1,
//   backgroundColor: 'lemonchiffon',
//   justifyContent: 'flex-start',

//   // alignItems: 'stretch',
//   // paddingHorizontal: pixelSizeHorizontal(16),
// },
// separator: {
//   height: heightPixel(10),
// },
// headerText: {
//   fontSize: fontPixel(20),
//   // color: 'white',
//   alignItems: 'center',
//   width: '100%',
//   justifyContent: 'center',
//   backgroundColor: 'red',
//   marginVertical: heightPixel(10),
// },
// list: {
//   flex: 1,
//   paddingHorizontal: pixelSizeHorizontal(16),
// },
