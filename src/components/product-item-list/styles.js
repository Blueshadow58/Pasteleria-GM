import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  product: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 7,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 25,
    height: 120,
  },
  containerInfo: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
  containerImg: {
    marginRight: 10,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    backgroundColor: '#eee',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  info: {
    width: '100%',
    backgroundColor: '#aaa',
    fontSize: 14,
    color: colors.brown,
    height: 40,
  },
  price: {
    flex: 1,
    textAlignVertical: 'bottom',
    backgroundColor: '#eee',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.orange
  },


  // Stock section with add reduce and text 
  stock: {
    width: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusBtnText: {
    fontSize: 20,
    color: colors.orange,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: '#eee',
    marginBottom: 5
  },
  minusBtnText: {
    fontSize: 20,
    color: colors.orange,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: '#eee',
    marginTop: 5
  },
  stockText: {
    fontSize: 20,
    color: colors.orange,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 25,
    width: 25,
    borderRadius: 5,
  },


});
