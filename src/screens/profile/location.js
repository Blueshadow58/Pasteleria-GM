import React, { useEffect, useState } from 'react'
import * as ExpoLocation from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Button } from 'react-native';
import { fetchShippingInfo, insertShippingInfo } from '../../db';


function Location() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    // shipping info
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [instructions, setInstructions] = useState('');

    useEffect(() => {
        fetchShippingInfo().then((data) => {
            if (data.rows._array.length > 0) {
                data = data.rows._array[0];
                setPhoneNumber(data.phoneNumber);
                setAddress(data.address);
                setInstructions(data.instructions);
            }
            console.log('number of loads');
        })
    }, [])


    useEffect(() => {
        (async () => {

            let { status } = await ExpoLocation.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await ExpoLocation.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = false;
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const reverseGeoCode = async () => {
        const { coords: { latitude, longitude } } = location;
        const geocode = await ExpoLocation.reverseGeocodeAsync({ longitude, latitude });
        setAddress(geocode[0].street + ' ' + geocode[0].streetNumber);
    }

    const updateShippingInfo = async () => {

        if (phoneNumber === '' || address === '') {
            Alert.alert('Error', 'Por favor, ingrese su numero telefonico y dirección');
            return;
        }
        await insertShippingInfo(phoneNumber, address, instructions).then(() => {
            Alert.alert('Éxito', 'Información de envío actualizada');
        }).catch(err => {
            console.log(err);
            Alert.alert('Error', 'No se pudo actualizar la información de envío');
        });

    }

    return (
        <>
            <View >
                <Text style={styles.titleBody} >Datos de entrega:</Text>
            </View>


            <View style={styles.formContainer}>

                <View style={styles.formContainer}>
                    <TextInput
                        autoFocus={true}
                        onChangeText={(text) => setPhoneNumber(text)}
                        defaultValue={phoneNumber}
                        style={styles.inputForm} placeholder='Número telefónico' />

                    <TextInput
                        onChangeText={(text) => setAddress(text)}
                        defaultValue={address}
                        style={styles.inputForm} placeholder='Dirección' />
                    {/* <Text style={styles.modalText}>Instrucciones de entrega (opcional)</Text>*/}
                    <TextInput
                        onChangeText={(text) => setInstructions(text)}
                        defaultValue={instructions}
                        style={styles.inputForm} placeholder='Instrucciones de entrega' />
                </View>
            </View>
            <View style={styles.divRow}>
                {text ? <Button title='Buscar Ubicación' onPress={reverseGeoCode}></Button> : null}
                {text ? <Button title='Actualizar' onPress={updateShippingInfo}></Button> : null}

            </View>

            {/* Map with location */}
            <View style={styles.container}>
                {location ? <MapView style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    minZoomLevel={17}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Yo"
                    />
                </MapView> : null}
            </View>



            {/* Direccion */}


            {/* shipping instrucicon */}

        </>
    );
}

export default Location