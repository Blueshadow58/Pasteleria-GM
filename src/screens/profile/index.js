import { Text, View, Image, TouchableOpacity, Button } from 'react-native'
import { useState } from 'react';
import * as ImagePicker from "expo-image-picker";
import { styles } from './styles'
import { defaultAuth } from '../../firebase/firebase-config';
import { updateProfile } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { uploadImageAsync } from '../../firebase/api';
import { signOutFromActualAccout } from '../../firebase/auth';
import { useDispatch } from 'react-redux';
import { setToken } from '../../reduxSlices/authentification/authentificationSlice';
import Location from './location';



export default function Profile({ navigation }) {
  const dispatch = useDispatch()
  const currentUser = defaultAuth.currentUser;
  let profileImg = currentUser.photoURL || null;
  const [pickedUrl, setPickedUrl] = useState(profileImg);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos permisos para usar la cámara", [{ text: "Ok" }]);
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions().catch((error) => {
      console.log(error);
    });
    // Check if the user granted the camera permission
    if (!isCameraPermission) return;
    // Launch the camera
    const image = await ImagePicker.launchCameraAsync({
      aspect: [4, 3],
      quality: 0.3,
    });
    // Check if the user canceled the image picking
    if (image.canceled) return;
    const storage = getStorage();
    const storageRef = ref(storage, 'profilePictures');
    //upload the image to firebase storage
    uploadImageAsync(storageRef, image.assets[0].uri, currentUser.uid).then((url) => {
      //set the image url to the state
      setPickedUrl(url);
      //update the user profile
      updateProfile(currentUser, {
        photoURL: url
      }).catch((error) => {
        console.log(error);
      });
    });
  };



  const Header = () => (
    <View style={styles.headerContainer}>
      <View style={styles.headerInner}>
        {!pickedUrl ? <Image style={styles.img} />
          : <Image style={styles.img} source={{ uri: pickedUrl }} />}
        <TouchableOpacity style={styles.changeImg} onPress={onHandleTakeImage}>
          <Ionicons style={styles.pencilIcon} name="pencil" />
        </TouchableOpacity>
        <Text>{currentUser.displayName ? currentUser.displayName : currentUser.email}</Text>
      </View>
    </View>
  )




  // show current position 
  const Body = () => (
    <View style={styles.bodyContainer}>
      <View style={styles.bodyInner}>


        <Location />



      </View>
    </View>
  )




  // Render the profile screen 
  return (
    <View style={styles.container}>
      <Header />
      <Body />


      {/* <Button title='Cerrar sesion' onPress={() => {
        // dispatch(setToken(null))
        signOutFromActualAccout({ navigation })
        //redirect to login screen form this tab to avoid the user to go back to the profile screen
        // navigation.navigate('LoginTab',{screen:'Login'}); 
      }} /> */}
    </View>
  )


}
