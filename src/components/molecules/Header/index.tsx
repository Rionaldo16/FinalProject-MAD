import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {Logo2} from '../../../assets/icon';

const Header = ({title, backButton, onPress}) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
      )}
      <Text style={styles.text}>{title}</Text>
      <Logo2 style={styles.logo} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ab8a54',
    paddingLeft: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 20,
    marginHorizontal: 8,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 34,
    marginVertical: 38,
  },
  buttonBack: {
    height: 35,
    width: 35,
  },
  Logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    right: 40,
  },
});
