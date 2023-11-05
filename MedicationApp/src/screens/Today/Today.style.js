import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  SafeAreaView: { 
    flex: 1, 
    backgroundColor: '#F3F4F7' 
  },
  emptyAlarms: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerWrapper: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#F3F4F7'
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' }
})
