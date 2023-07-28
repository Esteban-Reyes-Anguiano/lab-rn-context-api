/* eslint-disable react/react-in-jsx-scope */
import React, { useContext } from 'react';
import { List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

import { CartContext } from '../context/cartContext';
import { CustomButton } from './customButton';
import { Product } from '../types/types';

interface CatalogProps {
  data: Product[] | null;
}

export const Catalog = ({ data }: CatalogProps) => {
  const { products, addToCart, removeFromCart } = useContext(CartContext);

  const renderButton = (item: Product): React.ReactElement => (
    <CustomButton
      onPress={() => (products?.find(product => product.id === item.id) ? removeFromCart(item) : addToCart(item))}
      text={products?.some(product => product.id === item.id) ? 'quitar' : 'Agregar al carrito'}
    />
  );

  return (
    <List
      style={styles.container}
      data={data}
      renderItem={({ item, index }: { item: Product; index: number }): React.ReactElement => (
        <ListItem
          title={`${item.title} | $${item.price}`}
          description={`${item.description} ${index + 1}`}
          accessoryRight={() => renderButton(item)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
