import { SafeAreaView, Text, View } from "react-native"
import { FlatList } from "react-native";
import { styles } from "./styles"

const OrderList = ({products}) => {
    
    // const cart = products.map((product) => {
    //     return {
    //         id: product.id,
    //         name: product.name,
    //         price: product.price,
    //         quantity: product.quantity,
    //         total: product.price * product.quantity
    //     }
    // })
 

    // console.log(cart )

  
      
    const renderItem = ({ item }) => (
        <>
        {console.log(item)}
        <View style={styles.card}>
            {/* Card Header */}
            <View style={styles.cardHeader}>
                <Text style={styles.headerText}>Codigo de orden:</Text>
                <Text style={styles.orderCode}>{item.id}</Text>
            </View>
            {/* Card Body */}
            <View style={styles.cardBody}>
                <View style={styles.cardBodyLeft}>
                    <Text style={styles.titleBody}>Total</Text>
                    <Text style={styles.bodyText}>Precio:</Text>                    
                </View>    
                <View style={styles.cardBodyRight}>    
                    <Text style={styles.titleBody}>Estatus</Text>
                    <Text style={styles.textStatus}>{item.status}</Text>                    
                </View>    
            </View>
        </View>
          </>
        );
      
        return (
          <SafeAreaView style={styles.container}>
            <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        );
      

    }

export default OrderList