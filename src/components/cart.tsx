import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native'; // Imported 'View' from react-native
import { Catalog } from './catalog';
import { CartContext } from '../context/cartContext';

export const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <>
      {products.length > 0 ? (
        <Catalog data={products} />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.msg}>Tu carrito está vacío.</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
  },
});
