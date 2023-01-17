import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
  container: {

    backgroundColor: colors.white,
    width: '80%',
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: 'column',
  },
  inputContainer: {
    marginVertical: 5,
    marginHorizontal: 15,
    borderColor: '#ddd',
    borderRadius: 25,
    borderWidth: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#424242',
  },
  icon: {
    color: colors.orange,
    marginRight: 10,
  },
  containerButton: {
    width: '100%',
  },
  button: {
    marginHorizontal: 15,
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: colors.orange,
    paddingVertical: 12,
    borderRadius: 25,
  },
  textButtom: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15,
  }
})
