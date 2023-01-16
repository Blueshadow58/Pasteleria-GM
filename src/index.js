
import 'react-native-gesture-handler';
import AppNavigator from './navigation';
import { store } from './store';
import { Provider } from 'react-redux';
import { fetchCart, init, createShippingInfoTable, fetchShippingInfo } from './db';

init().then(() => {
  console.log('Initialized database products');
}).catch(err => {
  console.log('Initializing db failed.');
  console.log(err);
});

createShippingInfoTable().then(() => {
  console.log('Initialized database shipping info');
}).catch(err => {
  console.log('Initializing db failed.');
  console.log(err);
});



// fetchCart().then(result => {
//   console.log(result.rows._array);
// }).catch(err => {
//   console.log(err);
// });


export default function App() {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
