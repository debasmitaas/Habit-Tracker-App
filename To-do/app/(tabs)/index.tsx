import { Text, View,StyleSheet } from "react-native";
// import {Link} from 'expo-router';
export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>index.tsx screen.</Text>
    </View>
  );
}
const styles = StyleSheet.create({

view:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
},
navButton:{
  width:100,
   height:30, 
   backgroundColor:'red',
   alignItems:"center",
   justifyContent:"center", 
   color:'#fff',
   borderRadius:8}

});
