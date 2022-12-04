import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';


const styles = StyleSheet.create({
    item: {        
        flex:1,
        backgroundColor: '#ffffff',
        padding: 15,
        marginVertical: 7,
        marginHorizontal: 20,
        flexDirection:'row',
        borderRadius:25,
        height:120
      },
      containerInfo:{
        alignItems:'center',
        flexDirection:'column',
        width:'50%'
      },
      containerImg:{        
        width:'50%',
        alignSelf:'center',
        alignItems:'flex-end',        
        width:'50%'
      },  
      img:{
        width:'80%',
        height: '100%',
        borderRadius:15
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
        height:40,
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

const ProductItemList = ({item}) => {
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

export default ProductItemList;