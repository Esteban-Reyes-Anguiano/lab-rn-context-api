import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { CartContext } from '../context/cartContext';
import { Cart } from './cart';
import { Catalog } from './catalog';

import data from '../../data.json';

const Content = () => {
  const { showCart } = useContext(CartContext);
  const contentToShow = showCart ? <Cart /> : <Catalog data={data} />;

  return <View style={styles.container}>{contentToShow}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Content;
