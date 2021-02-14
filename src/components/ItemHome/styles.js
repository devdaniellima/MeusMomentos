import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  content: {marginLeft: 20},
  title: {fontFamily: 'sans-serif-thin', fontSize: 18},
  subTitle: {fontSize: 16, marginLeft: 8, marginBottom: 8},
});
