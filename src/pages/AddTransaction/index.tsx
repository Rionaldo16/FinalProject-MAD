import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {Header, TextInput, TransactionCard} from '../../components/molecules';

const AddTransaction = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Header
        title="Add To Chart                    "
        backButton
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TransactionCard
          date="27 June 2024"
          desc="Spaghetti"
          price="35.000"
          type="Menu"
        />
        <TransactionCard
          date="27 June 2024"
          desc="Salad"
          price="40.000"
          type="Menu"
        />
        <TransactionCard
          date="27 June 2024"
          desc="Lemon Tea"
          price="18.000"
          type="Menu"
        />
        <TransactionCard
          date="27 June 2024"
          desc="Carbonara"
          price="Rp. 65.000"
          type="Menu"
        />
        <TransactionCard
          date="27 June 2024"
          desc="Sup Tulang tanduk badak"
          price="Rp. 750.000"
          type="Menu"
        />
      </ScrollView>
      <View style={styles.contentWrapper}>
        <View style={styles.wrapper}>
          <TextInput label="  Tambahan Menu" placeholder="minta extra apapun" />
          <Gap height={17} />
          <TextInput label="  Jenis Pembayaran" placeholder="Cash/Transfer" />
          <Gap height={17} />
        </View>
        <Gap height={17} />
        <Button
          label="Add Another Menu"
          onPress={() => navigation.navigate('HomePage')}
          color="#34cb99"
        />
        <Gap height={17} />
        <Button
          label="Procced To Payment"
          onPress={() => navigation.navigate('SignIn')}
          color="#34cb99"
        />
      </View>
    </View>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#ab8a54',
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    height: 2,
    width: 405,
    left: -5,
  },
  contentWrapper: {
    marginTop: 20,
    backgroundColor: '#ab8a54',
    paddingHorizontal: 24,
    paddingVertical: 18,
    flex: 1,
    left: -0,
  },
  wrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    height: 180,
    width: 400,
    right: 25,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 16,
    marginVertical: 12,
  },
});
