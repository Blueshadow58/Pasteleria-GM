import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProductItem from '../product-item';

const styles = StyleSheet.create({
  container: {    
    padding:5,    
  }
 
});

const ProductsList = () => {
  return (       
    <View style={styles.container} >
      <FlatList 
        data={[
          {key: 'Ice Cream',info:'lorem impus lorem is',price:3500},
          {key: 'Hamburger',info:'lorem impus lorem is lorem impus lorem is lorem impus lorem is',price:1500},
          {key: 'Cookies',info:'lorem impus lorem is',price:2500},
          {key: 'French Fries',info:'lorem impus lorem is lorem impus lorem is',price:3000},         
        ]}
        renderItem={({item}) => <ProductItem item={item}/>}
      />
    </View>
  );
}

export default ProductsList;