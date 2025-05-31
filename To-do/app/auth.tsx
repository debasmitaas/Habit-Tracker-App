
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View,StyleSheet } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
export default function AuthScreen() {
  const [isSignup,setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error , setError] = useState<string | null>("");


  const theme = useTheme();
  const router = useRouter();

  const {signIn,signUp}  = useAuth();
  const handleAuth  =async ()=>{
    if(!email || !password){
      setError("fill in all fields!");
      return;
    }

    if(password.length<7){
      setError("Password must be at least 7 characters long!")
      return;
    }

    setError(null);
     if (isSignup){
      const error =await signUp(email,password);
      if (error){
        setError(error);
        return;
      }
     }
    else{
      const error= await signIn(email,password);

      if (error){
        setError(error);
        return;
      }
      router.replace("/");
    }

  };

   const handleSwitchMode = () =>{
      setIsSignUp((prev) => !prev);
    
   };
  return <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"} style={styles.container}>
    <View style={styles.content}>
        <Text style={styles.title} variant="headlineMedium">{ isSignup? "Create Account" : "Welcome Back!"}</Text>
        <TextInput 
        label = "Email"
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="example@gmail.com"
        mode="outlined"
        style={styles.input}
        onChangeText={setEmail}
        />
        <TextInput 
        label = "Password"
        autoCapitalize="none"
        secureTextEntry
        placeholder="Enter Your Password"
        mode="outlined"
        style={styles.input}
        onChangeText={setPassword}
        />


        { error && <Text style={{color:theme.colors.error}}>{error}</Text>}

        <Button mode="contained" style={styles.button} onPress={handleAuth}>{isSignup ? "Sign Up" : "Sign In "}</Button>
        <Button mode="text" onPress={handleSwitchMode} style={styles.SwitchModeButton}>{isSignup? "Alredy have an account? Sign In" : "Don't Have An Account? Sign Up"}</Button>
    </View>
  </KeyboardAvoidingView>;
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    justifyContent:"center",
    alignItems:'center'
  }  ,
  content:{
    flex:1,
    padding:16,
    justifyContent:"center",
    alignItems:'center'
  } ,
  title:{
    textAlign
    :"center",
    marginBottom:24,
  },
  input:{
    marginBottom:16,
  },
  button:{
    marginBottom:8,
    textAlign: "center",
  },
  SwitchModeButton :{
    marginTop:16,
  }
  
  
});