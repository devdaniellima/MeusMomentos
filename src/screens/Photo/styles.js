import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RNCamera: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  textTop: {
    color: 'white',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 40,
    marginTop: 15,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    fontFamily: 'sans-serif-thin',
    fontSize: 18,
  },
  button: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginBottom: 10,
  },
  viewSending: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
    height: '100%',
  },
  textPercent: {color: 'white'},
  viewButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btnTakeAPicture: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 40,
    marginBottom: 20,
  },
});
