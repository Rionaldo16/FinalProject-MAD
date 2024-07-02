import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {NullPhoto, Google, Insta, Facebook} from '../../assets/icon';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {getDatabase, ref, set} from 'firebase/database';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(NullPhoto);
  const [photoBase64, setPhotoBase64] = useState('');

  const onSubmit = () => {
    const auth = getAuth();
    const db = getDatabase();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        showMessage({
          message: 'Registrasi telah berhasil',
          type: 'success',
        });
        //Simpan ke database
        const data = {
          uid: user.uid,
          fullName: fullName,
          email: email,
          photo: photoBase64,
        };
        set(ref(db, 'users/' + data.uid), data);
        navigation.navigate('SignIn');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
    });
    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
      setPhoto(NullPhoto);
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64, ${assets.base64}`;
      const source = {uri: base64};
      setPhoto(source);
      setPhotoBase64(base64);
    }
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <Header
        title="Registrasi                           "
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileWrapper}>
            <TouchableOpacity activeOpacity={0.5} onPress={getImage}>
              <Image source={photo} style={styles.avatar} />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={24} />
        <TextInput
          label="Full Name"
          placeholder="Type your full name"
          onChangeText={value => setFullName(value)}
        />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          onChangeText={value => setEmail(value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
        <Gap height={16} />
        <TextInput
          label="Re-Password"
          placeholder="Type your Password"
          secureTextEntry={true}
        />
        <Gap height={24} />
        <Button label="Continue" onPress={onSubmit} />
      </View>
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
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    paddingHorizontal: 24,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 29,
  },
  profileWrapper: {
    height: 110,
    width: 110,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
  },
  line: {
    borderBottomColor: '#8D92A3',
    borderBottomWidth: 2,
    marginVertical: 16,
  },
  or: {
    bottom: 10,
    left: 190,
  },
  containerAkun: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    right: 12,
  },
  google: {
    left: 140,
    bottom: 20,
  },
  insta: {
    bottom: 20,
    left: 170,
  },
  facebook: {
    left: 200,
    bottom: 20,
  },
});
