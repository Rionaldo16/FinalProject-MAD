import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {Header, TextInput} from '../../components/molecules';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';
import {Facebook, Google, Insta} from '../../assets/icon';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const onSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('HomeScreen', {uid: user.uid});
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <Header title="Sign In                                    " />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          onChangeText={value => setEmail(value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Gap height={24} />
        <Button label="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          label="Create New Account"
          color="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
        <View style={styles.line} />
        <Text style={styles.or}>OR</Text>
        <Gap height={12} />
        <View style={styles.containerAkun}>
          <TouchableOpacity activeOpacity={0.5}>
            <Google style={styles.google} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Insta style={styles.insta} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Facebook style={styles.facebook} />
          </TouchableOpacity>
        </View>
        <Gap height={45} />
        <View style={styles.container}>
          <Text style={styles.title}>
            "Seseorang tidak dapat berpikir dengan baik, mencintai dengan baik,
            tidur dengan nyenyak, jika seseorang tidak makan dengan baik." -
            Virginia Woolf
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  containerAkun: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  google: {
    left: 120,
  },
  insta: {
    left: 140,
  },
  facebook: {
    left: 160,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic',
    marginLeft: 20,
    marginTop: 30,
    color: '#ffffff',
    bottom: 15,
  },
  line: {
    borderBottomColor: '#8D92A3',
    borderBottomWidth: 2,
    marginVertical: 16,
  },
  or: {
    bottom: 10,
    left: 175,
  },
  container: {
    backgroundColor: '#ab8a54',
    borderRadius: 18,
  },
});
