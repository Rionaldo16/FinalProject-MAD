import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TransactionCard = ({date, desc, price, type}) => {
  return (
    <View style={styles.cardTransaction}>
      <View>
        <Text style={styles.textDate}>{date}</Text>
        <Text style={styles.textDescription}>{desc}</Text>
      </View>
      {type === 'Menu' && <Text style={styles.Menu}>Rp. {price}</Text>}
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  cardTransaction: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 18,
    width: 375,
    left: 15,
  },
  textDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
  },
  textDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },

  Menu: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#1ABC9C',
  },
});
