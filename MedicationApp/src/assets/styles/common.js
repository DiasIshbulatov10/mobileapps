import { StyleSheet } from 'react-native';
// import { theme } from 'galio-framework';
import { basics } from '.';


export default StyleSheet.create({
  SafeAreaView: { 
    flex: 1, 
    backgroundColor: '#F3F4F7' 
  },
  wightAreaView: { 
    flex: 1, 
    backgroundColor: '#FFFFFF',
  },
  centerWapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  alignCenter: {
    flex: 0,
    alignItems: 'center',
  },
  outerWrapper: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#F3F4F7'
  },
  StartBtnPart: {
    flex: 0,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  startText: {
    marginTop: 33,
    fontSize: 70,
    color: '#2B7183',
    fontWeight: 'bold'
  },
  titleArea: {
    flexDirection: 'row', 
    alignContent: 'space-between', 
    width: '100%', 
  },
  LoginPart: {
    margin: 12,
    alignItems: 'center',
  },
  commonBtnSize: {
    height: 40, 
    width: '95%'
  },
  largeBtnSize: {
    height: 58, 
    width: '95%'
  },
  mediumBtnSize: {
    height: 50, 
    width: '95%'
  }
});
  