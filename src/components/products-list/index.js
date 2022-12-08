import React, { Children } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {    
    padding:5,    
  }
});

const ProductsList = ({Children,products,numColumns}) => {

  return (       
    <View style={styles.container} >
      <FlatList
        numColumns={numColumns? numColumns: 1}
        data={products}
        renderItem={({item}) => <Children product={item} />}
      />
    </View>
  );
}

export default ProductsList;