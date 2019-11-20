import React,{Component} from 'react';
// import Logo from './src/VNU-UET.jpg';
// import BackgroundImage from './src/BG.jpg';
// import IconUser from './src/user.png';
// import IconLock from './src/lock.png';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          
        </View>
        <Text style={styles.title}>Đăng nhập ứng dụng</Text>
        <View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              
              <TextInput style={styles.input}
                autoCapitalize="none"
                
                autoCorrect={false}
                keyboardType='email-address'
                returnKeyType="next"
                placeholder="MSSV"
                placeholderTextColor='#000' />
            </View>
            <View style={styles.inputContainer}>
              
              <TextInput style={styles.input}
                autoCapitalize="none"
                returnKeyType="go"
                ref={(input) => this.passwordInput = input}
                placeholder='Password'
                placeholderTextColor='#000'
                secureTextEntry />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  logoContainer: {
    height: '55%',
  },
  bgimage: {
    height: '100%',
    width: '100%',
  },
  logo: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 10,
    alignSelf: 'center',
    top: '35%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingTop: 5,
  },
  formContainer: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFF',
    marginBottom: 10,
    padding: 0,
    color: '#000',
    elevation: 2,
  },
  icon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  input: {
    height: 50,
    width: 300,
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 10,

  },
  button: {
    backgroundColor: '#176AD3',
    paddingVertical: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
  }
});

export default Login;
