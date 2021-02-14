import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  take: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    fontFamily: 'sans-serif-thin',
    fontSize: 20,
  },
  viewTitle: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: '5%',
  },
  textTitle: {
    fontFamily: 'sans-serif-thin',
    fontSize: 25,
  },
  viewScroll: {
    flex: 8,
    width: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
  },
  viewNoMoments: {
    alignItems: 'center',
  },
  textNoMoments: {
    fontFamily: 'sans-serif-thin',
    fontSize: 18,
    textAlign: 'center',
  },
  scroll: {width: '100%'},
  viewButtons: {flex: 2, justifyContent: 'center', alignItems: 'center'},
});
