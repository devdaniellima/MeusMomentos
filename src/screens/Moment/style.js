import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {width: '100%', backgroundColor: 'white', height: '100%'},
  viewImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  image: {
    width: '90%',
    height: '80%',
    borderRadius: 10,
  },
  viewActions: {
    marginTop: -10,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {fontFamily: 'sans-serif-thin', fontSize: 18},
  subTitle: {fontSize: 16, marginLeft: 8, marginBottom: 8},
  viewButtons: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginRight: 30,
    marginTop: 10,
  },
  buttonRemove: {
    backgroundColor: 'rgba(226,106,106,0.6)',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonBack: {
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: 'center',
  },
});
