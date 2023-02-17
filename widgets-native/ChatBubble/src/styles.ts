import { type TextStyle, type ViewStyle } from 'react-native'

interface ChatStyles {
  outer: ViewStyle
  text: TextStyle
  arrow: ViewStyle
  arrowOverlap: ViewStyle
}

export const rightStyles: ChatStyles = {
  outer: {
    backgroundColor: '#0078fe',
    padding: 10,
    marginTop: 5,
    marginLeft: '45%',
    marginRight: '5%',
    maxWidth: '50%',
    alignSelf: 'flex-end',
    borderRadius: 20
  },
  text: {
    fontSize: 16,
    color: '#fff'
  },
  arrow: {
    position: 'absolute',
    backgroundColor: '#0078fe',
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },
  arrowOverlap: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20
  }
}

export const leftStyles: ChatStyles = {
  outer: {
    backgroundColor: '#dedede',
    padding: 10,
    marginTop: 5,
    marginLeft: '5%',
    marginRight: '45%',
    maxWidth: '50%',
    alignSelf: 'flex-start',
    borderRadius: 20
  },
  text: {
    fontSize: 16,
    color: '#000'
  },
  arrow: {
    position: 'absolute',
    backgroundColor: '#dedede',
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10
  },
  arrowOverlap: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20
  }
}
