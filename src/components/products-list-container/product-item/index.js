import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    item: {        
        flex:1,
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
        borderRadius:25,
        height:140
    
      },
      containerImg:{        
        width:'50%',
        alignSelf:'center',
        alignItems:'center',        
        width:'50%'
      },      
      containerInfo:{
        flexDirection:'column',
        width:'50%'
      },
      img:{
        width:110,
        height:110
      },
      title: {
        backgroundColor:'#eee',
        fontSize: 18,
        fontWeight:'bold',
        paddingBottom:5
      },
      info: {
        backgroundColor:'#aaa',
        fontSize: 14,        
        color:colors.brown,
        paddingBottom:15,
        height:50   
      },
      price: {
        flex:1,
        textAlignVertical:'bottom',        
        backgroundColor:'#eee',
        fontSize: 20,        
        fontWeight:'bold',
        color:colors.orange
      }
});

const ProductItem = ({item}) => {
  return (    
        <View style={styles.item}>            
        
            
            <View style={styles.containerInfo}> 
                <Text style={styles.title} >{item.key}</Text>   
                <Text style={styles.info} numberOfLines={2}  >{item.info}</Text>   
                <Text style={styles.price} >{item.price}</Text>   
            </View>   
            <View style={styles.containerImg}> 
               <Image  style={styles.img} source={{uri: 'https://reactjs.org/logo-og.png'}}></Image> 
            </View>   

        </View>   
  );
}

export default ProductItem;