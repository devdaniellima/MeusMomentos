import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewImage: {
    flex: 3,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
  },
  viewButtons: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  viewButtonSend: {
    marginVertical: '10%',
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    borderRadius: 10,
  },
  viewButtonSendDisabled: {
    marginVertical: '10%',
    backgroundColor: 'rgba(0,0,0,0.03)',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    borderRadius: 10,
  },
  viewButtonBack: {
    marginVertical: '10%',
    backgroundColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    borderRadius: 10,
  },
  textButton: {
    fontFamily: 'sans-serif-thin',
    fontSize: 25,
  },
  textButtonDisabled: {
    fontFamily: 'sans-serif-thin',
    fontSize: 25,
    color: 'rgba(0,0,0,0.2)',
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
  viewSendSuccess: {
    paddingTop: 10,
  },
});
