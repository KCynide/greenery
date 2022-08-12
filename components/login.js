import LoginScreen, {SocialButton} from 'react-native-login-screen';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
    const [username, setUsername] = useState(null);
    const [switchValue, setSwitchValue] = useState(false);
    const [spinnerVisibility, setSpinnerVisibility] = useState(false);
  
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <LoginScreen
          // logoImageSource={require('./assets/logo-greenery.png')} //
          onLoginPress={() => {}}
          onSignupPress={() => {}}
          onEmailChange={(email: string) => {}}
          onPasswordChange={(password: string) => {}}
        />
      </View>
    );
  };

  export default App;