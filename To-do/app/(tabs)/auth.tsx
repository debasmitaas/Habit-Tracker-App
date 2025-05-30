
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
export default function Auth() {
  return <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"}>
    <View>
        <Text>Create Account</Text>
        <TextInput 
        label = "Email"
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="example@gmail.com"
        mode="outlined"
        />
        <TextInput 
        label = "Password"
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Enter Your Password"
        mode="outlined"
        />
    </View>
  </KeyboardAvoidingView>;
}